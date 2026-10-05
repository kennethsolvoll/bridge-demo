import type { BudgetId, Mentor, Student, TaskTypeId, TimeframeId } from '../types'

export interface MatchCriteria {
  taskType: TaskTypeId
  timeframe: TimeframeId
  budget: BudgetId
}

export type MatchStrength = 'sterk' | 'god' | 'mulig'

export interface MatchResult {
  student: Student
  mentor: Mentor | undefined
  score: number
  strength: MatchStrength
  reasons: string[]
  caveats: string[]
}

const WEIGHTS = { taskType: 3, timeframe: 2, budget: 1 }
const MAX_SCORE = WEIGHTS.taskType + WEIGHTS.timeframe + WEIGHTS.budget

function strengthFor(score: number): MatchStrength {
  if (score === MAX_SCORE) return 'sterk'
  if (score >= WEIGHTS.taskType + WEIGHTS.timeframe) return 'god'
  return 'mulig'
}

/**
 * Enkel, regelbasert matching for demoen. Studenter som ikke tar oppdragstypen filtreres bort,
 * resten rangeres etter tidsramme og budsjett. I den ekte tjenesten gjøres matchingen manuelt.
 */
export function matchStudents(
  criteria: MatchCriteria,
  students: Student[],
  mentors: Mentor[],
  labels: { taskNoun: string; timeframe: string; budget: string },
  limit = 3,
): MatchResult[] {
  const ranked = students
    .filter((student) => student.taskTypes.includes(criteria.taskType))
    .map((student) => {
      const reasons = [`Har bestått case-test og levert ${labels.taskNoun} før`]
      const caveats: string[] = []
      let score = WEIGHTS.taskType

      if (student.availability.includes(criteria.timeframe)) {
        score += WEIGHTS.timeframe
        reasons.push(
          criteria.timeframe === 'fleksibel'
            ? 'Har kapasitet dette semesteret'
            : `Har kapasitet til å levere ${labels.timeframe.toLowerCase()}`,
        )
      } else {
        caveats.push(`Kan trolig ikke levere ${labels.timeframe.toLowerCase()}`)
      }

      if (student.budgets.includes(criteria.budget)) {
        score += WEIGHTS.budget
        reasons.push(`Vurdert klar for oppdrag i størrelsen ${labels.budget}`)
      } else {
        caveats.push(`Vanligvis matchet med oppdrag i en annen størrelse enn ${labels.budget}`)
      }

      return {
        student,
        mentor: mentors.find((m) => m.id === student.mentorId),
        score,
        strength: strengthFor(score),
        reasons,
        caveats,
      }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  // Vis heller to gode forslag enn å fylle opp med svake, men alltid minst to.
  const good = ranked.filter((result) => result.strength !== 'mulig')
  return good.length >= 2 ? good : ranked
}
