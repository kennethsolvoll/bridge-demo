export type Locale = 'nb' | 'en'

/** En tekst på alle språk siden støtter. */
export type Text = Record<Locale, string>

/** Tekst som enten er lik på alle språk (f.eks. navn og «React») eller oversatt. */
export type Localizable = string | Text

export type TaskTypeId = 'nettside' | 'automatisering' | 'verktoy'
export type TimeframeId = 'to-uker' | 'en-maaned' | 'fleksibel'
export type BudgetId = 'under-15' | '15-30' | 'over-30'

export interface Choice<T extends string> {
  id: T
  label: Text
  hint?: Text
  /** Brukes midt i en setning, f.eks. "innen 2 uker" / "within 2 weeks". */
  phrase: Text
}

export interface TaskTypeChoice extends Choice<TaskTypeId> {
  /** Flertallsform brukt i begrunnelsen for en match, f.eks. "nettsider" / "websites". */
  noun: Text
  suggestedPackage: Text
}

export interface Mentor {
  id: string
  name: string
  role: Text
  yearsOfExperience: number
}

export interface Student {
  id: string
  name: string
  initials: string
  study: Text
  year: number
  skills: Localizable[]
  taskTypes: TaskTypeId[]
  /** Tidsrammer studenten kan levere innenfor. */
  availability: TimeframeId[]
  /** Budsjettnivåer (oppdragsstørrelser) studenten er vurdert klar for. */
  budgets: BudgetId[]
  pastCase: {
    title: Text
    description: Text
  }
  mentorId: string
}

export interface Package {
  id: string
  name: Text
  price: number
  /** Valgfritt suffiks etter prisen, f.eks. "/mnd". */
  priceSuffix?: Text
  priceNote: Text
  description: Text
  includes: Text[]
  delivery: Text
}

export interface Quote {
  text: Text
  name: Localizable
  role: Text
}

export interface TitledText {
  title: Text
  description: Text
}
