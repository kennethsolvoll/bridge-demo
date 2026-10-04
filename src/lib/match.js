// Enkel, deterministisk poengsum for matching-demoen. Kun frontend.

const WEIGHTS = { task: 6, taskPrimary: 2, time: 3, budget: 2 }

export function matchStudents(students, { taskType, timeframe, budget }, limit = 3) {
  return students
    .map((student) => {
      const reasons = []
      let score = 0

      const taskIndex = student.taskTypes.indexOf(taskType)
      if (taskIndex !== -1) {
        score += WEIGHTS.task + (taskIndex === 0 ? WEIGHTS.taskPrimary : 0)
        reasons.push(taskIndex === 0 ? 'Hovedfelt er denne typen oppdrag' : 'Har erfaring med denne typen oppdrag')
      }
      if (student.availability.includes(timeframe)) {
        score += WEIGHTS.time
        reasons.push('Har kapasitet innenfor tidsrammen')
      }
      if (student.budgets.includes(budget)) {
        score += WEIGHTS.budget
        reasons.push('Passer budsjettnivået')
      }

      return { student, score, reasons }
    })
    .filter((r) => r.student.taskTypes.includes(taskType))
    .sort((a, b) => b.score - a.score || a.student.name.localeCompare(b.student.name, 'nb'))
    .slice(0, limit)
}
