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
  /** Hvilke kriterier studenten oppfyller. Oppdragstype er alltid oppfylt, ellers er studenten filtrert bort. */
  fits: { timeframe: boolean; budget: boolean }
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
 * Funksjonen er språknøytral. Begrunnelsene formuleres i komponenten.
 */
export function matchStudents(
  criteria: MatchCriteria,
  students: Student[],
  mentors: Mentor[],
  limit = 3,
): MatchResult[] {
  const ranked = students
    .filter((student) => student.taskTypes.includes(criteria.taskType))
    .map((student) => {
      const fits = {
        timeframe: student.availability.includes(criteria.timeframe),
        budget: student.budgets.includes(criteria.budget),
      }
      const score =
        WEIGHTS.taskType + (fits.timeframe ? WEIGHTS.timeframe : 0) + (fits.budget ? WEIGHTS.budget : 0)

      return {
        student,
        mentor: mentors.find((m) => m.id === student.mentorId),
        score,
        strength: strengthFor(score),
        fits,
      }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  // Vis heller to gode forslag enn å fylle opp med svake, men alltid minst to.
  const good = ranked.filter((result) => result.strength !== 'mulig')
  return good.length >= 2 ? good : ranked
}
