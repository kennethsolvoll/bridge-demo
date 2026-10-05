export type TaskTypeId = 'nettside' | 'automatisering' | 'verktoy'
export type TimeframeId = 'to-uker' | 'en-maaned' | 'fleksibel'
export type BudgetId = 'under-15' | '15-30' | 'over-30'

export interface Choice<T extends string> {
  id: T
  label: string
  hint?: string
}

export interface TaskTypeChoice extends Choice<TaskTypeId> {
  /** Kort beskrivelse brukt i begrunnelsen for en match, f.eks. "nettsider". */
  noun: string
  suggestedPackage: string
}

export interface Mentor {
  id: string
  name: string
  role: string
  yearsOfExperience: number
}

export interface Student {
  id: string
  name: string
  initials: string
  study: string
  year: number
  skills: string[]
  taskTypes: TaskTypeId[]
  /** Tidsrammer studenten kan levere innenfor. */
  availability: TimeframeId[]
  /** Budsjettnivåer (oppdragsstørrelser) studenten er vurdert klar for. */
  budgets: BudgetId[]
  pastCase: {
    title: string
    description: string
  }
  mentorId: string
}

export interface Package {
  id: string
  name: string
  price: number
  priceUnit: string
  priceNote: string
  description: string
  includes: string[]
  delivery: string
}

export interface Quote {
  text: string
  name: string
  role: string
}

export interface TitledText {
  title: string
  description: string
}
