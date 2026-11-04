// Enkel, deterministisk poengsum for matching-demoen. Kun frontend.
// `reasonText` kommer fra språkfilen, så begrunnelsene følger valgt språk.

const WEIGHTS = { task: 6, taskPrimary: 2, time: 3, budget: 2 }

export function matchStudents(students, { taskType, timeframe, budget }, reasonText, limit = 3) {
  return students
    .filter((student) => student.taskTypes.includes(taskType))
    .map((student) => {
      const reasons = []
      const taskIndex = student.taskTypes.indexOf(taskType)
      let score = WEIGHTS.task + (taskIndex === 0 ? WEIGHTS.taskPrimary : 0)
      reasons.push(taskIndex === 0 ? reasonText.taskPrimary : reasonText.task)

      if (student.availability.includes(timeframe)) {
        score += WEIGHTS.time
        reasons.push(reasonText.time)
      }
      if (student.budgets.includes(budget)) {
        score += WEIGHTS.budget
        reasons.push(reasonText.budget)
      }

      return { student, score, reasons }
    })
    .sort((a, b) => b.score - a.score || a.student.name.localeCompare(b.student.name, 'nb'))
    .slice(0, limit)
}
