/**
 * All hardkodet data for demo-siden, på norsk (nb) og engelsk (en).
 * Alle personer, bedrifter, sitater og priser er FIKTIVE og laget kun for å illustrere idéen.
 *
 * Tekster skrives som { nb, en }. Tekst som er lik på begge språk (navn, «React») kan være en vanlig streng.
 * Maler med {plassholdere} fylles ut i komponentene.
 */
import type {
  BudgetId,
  Choice,
  Mentor,
  Package,
  Quote,
  Student,
  TaskTypeChoice,
  Text,
  TimeframeId,
  TitledText,
} from '../types'

export const site = {
  name: 'Bridge',
  contactEmail: 'bridge-demo@example.com',
  course: {
    nb: 'Entreprenørskap i praksis',
    en: 'Entreprenørskap i praksis (Entrepreneurship in Practice)',
  } satisfies Text,
}

export const meta = {
  title: { nb: 'Bridge – prototype', en: 'Bridge – prototype' } satisfies Text,
  description: {
    nb: 'Bridge (prototype): kvalitetssikrede studenter til avgrensede web- og digitaliseringsoppdrag for småbedrifter i Trondheim. Studentprosjekt – alle personer og priser er fiktive.',
    en: 'Bridge (prototype): vetted students for well-defined web and digitalisation projects for small businesses in Trondheim. Student project – all people and prices are fictional.',
  } satisfies Text,
}

export const ui = {
  skipLink: { nb: 'Hopp til innhold', en: 'Skip to content' },
  demoLabel: { nb: 'Demo/prototype:', en: 'Demo/prototype:' },
  demoNotice: {
    nb: 'Siden er laget for et studentprosjekt, og alle personer, bedrifter, sitater og priser på siden er fiktive.',
    en: 'This site was made for a student project. All people, companies, quotes and prices on it are fictional.',
  },
  prototypeBadge: { nb: 'prototype', en: 'prototype' },
  homeLink: { nb: 'Bridge, til toppen', en: 'Bridge, back to top' },
  mainNav: { nb: 'Hovedmeny', en: 'Main menu' },
  menu: { nb: 'Meny', en: 'Menu' },
  language: { nb: 'Språk', en: 'Language' },
} satisfies Record<string, Text>

export const languages = [
  { id: 'nb', short: 'NO', name: 'Norsk' },
  { id: 'en', short: 'EN', name: 'English' },
] as const

export const navItems: { href: string; label: Text }[] = [
  { href: '#slik-fungerer-det', label: { nb: 'Slik fungerer det', en: 'How it works' } },
  { href: '#kvalitet', label: { nb: 'Kvalitet', en: 'Quality' } },
  { href: '#pakker', label: { nb: 'Pakker', en: 'Packages' } },
  { href: '#matching', label: { nb: 'Prøv matching', en: 'Try matching' } },
  { href: '#studenter', label: { nb: 'For studenter', en: 'For students' } },
]

export const hero = {
  eyebrow: {
    nb: 'Web og digitalisering for småbedrifter i Trondheim',
    en: 'Web and digitalisation for small businesses in Trondheim',
  },
  title: {
    nb: 'Digitale oppgaver løst av håndplukkede studenter, kontrollert av erfarne mentorer',
    en: 'Digital tasks delivered by hand-picked students, reviewed by experienced mentors',
  },
  lead: {
    nb: 'Bridge finner rett student til rett oppdrag: en ny nettside, en enkel automatisering eller et lite internt verktøy. Dere får fast pris, et tydelig avgrenset oppdrag og en mentorgjennomgang før noe leveres.',
    en: 'Bridge matches the right student to the right project: a new website, a simple automation or a small internal tool. You get a fixed price, a clearly defined scope and a mentor review before anything is delivered.',
  },
  primaryCta: { href: '#matching', label: { nb: 'Beskriv oppdraget ditt', en: 'Describe your project' } },
  secondaryCta: { href: '#studenter', label: { nb: 'Jeg er student', en: "I'm a student" } },
  highlights: [
    { nb: 'Fast pakkepris, ingen timeliste', en: 'Fixed package price, no timesheets' },
    { nb: 'Mentor gjennomgår alt før levering', en: 'A mentor reviews everything before delivery' },
    { nb: 'Valgfri drift etterpå', en: 'Optional maintenance afterwards' },
  ],
  example: {
    title: { nb: 'Slik kan et oppdrag se ut', en: 'What a project can look like' },
    rows: [
      {
        label: { nb: 'Oppdrag', en: 'Project' },
        value: { nb: 'Ny nettside med bestillingsskjema', en: 'New website with an order form' },
      },
      {
        label: { nb: 'Student', en: 'Student' },
        value: { nb: 'Valgt av oss etter bestått case-test', en: 'Chosen by us after passing the case test' },
      },
      {
        label: { nb: 'Kvalitet', en: 'Quality' },
        value: { nb: 'Mentorgjennomgang før levering', en: 'Mentor review before delivery' },
      },
      {
        label: { nb: 'Pris', en: 'Price' },
        value: { nb: 'Fast, avtalt før oppstart', en: 'Fixed, agreed before we start' },
      },
      {
        label: { nb: 'Etterpå', en: 'Afterwards' },
        value: { nb: 'Driftsabonnement hvis dere ønsker', en: 'Maintenance subscription if you want it' },
      },
    ],
    note: { nb: 'Eksempel til illustrasjon', en: 'Illustrative example' },
  },
}

export const howItWorks = {
  eyebrow: { nb: 'Slik fungerer det', en: 'How it works' },
  title: { nb: 'Tre steg fra behov til ferdig leveranse', en: 'Three steps from need to finished delivery' },
  intro: {
    nb: 'Dere trenger ikke vite hvilken teknologi som passer. Det er vår jobb.',
    en: "You don't need to know which technology fits. That's our job.",
  },
  stepLabel: { nb: 'Steg {n}: ', en: 'Step {n}: ' },
  steps: [
    {
      title: { nb: 'Beskriv behovet', en: 'Describe your need' },
      description: {
        nb: 'Fortell kort, med vanlige ord, hva dere trenger. Vi hjelper dere å avgrense oppdraget og velge riktig pakke, så alle vet hva som skal leveres.',
        en: 'Tell us briefly, in plain words, what you need. We help you scope the project and choose the right package, so everyone knows what will be delivered.',
      },
      detail: { nb: 'Tar rundt 15 minutter', en: 'Takes about 15 minutes' },
    },
    {
      title: { nb: 'Vi matcher', en: 'We match' },
      description: {
        nb: 'Vi velger studenten som passer best ut fra ferdigheter, tidligere case og tilgjengelighet. Dere ser profilen og godkjenner før arbeidet starter.',
        en: 'We pick the student who fits best based on skills, previous cases and availability. You see the profile and approve it before work starts.',
      },
      detail: { nb: 'Forslag innen tre virkedager', en: 'Proposal within three working days' },
    },
    {
      title: { nb: 'Mentor kvalitetssikrer og leverer', en: 'A mentor reviews and delivers' },
      description: {
        nb: 'En erfaren mentor følger arbeidet og gjennomgår leveransen før dere får den. Dere får dokumentasjon og en kort opplæring ved overlevering.',
        en: 'An experienced mentor follows the work and reviews the delivery before you receive it. You get documentation and a short training session at handover.',
      },
      detail: { nb: 'Innen avtalt tidsramme', en: 'Within the agreed timeframe' },
    },
  ] satisfies (TitledText & { detail: Text })[],
}

export const quality = {
  eyebrow: { nb: 'Kvalitet', en: 'Quality' },
  title: { nb: 'Trygghet er hele poenget', en: 'Peace of mind is the whole point' },
  intro: {
    nb: 'Det viktigste for en liten bedrift er å vite at jobben blir gjort ordentlig. Derfor bygger Bridge på tre ting.',
    en: 'What matters most to a small business is knowing the job will be done properly. That is why Bridge is built on three things.',
  },
  pillars: [
    {
      title: { nb: 'Opptak gjennom praktisk case-test', en: 'Admission through a practical case test' },
      description: {
        nb: 'Søkerne løser en realistisk kundeoppgave på 48 timer. Vi vurderer selve løsningen, hvordan de kommuniserer og hvordan de håndterer uklare krav, ikke bare CV og karakterer.',
        en: 'Applicants solve a realistic client task in 48 hours. We assess the solution itself, how they communicate and how they handle unclear requirements, not just their CV and grades.',
      },
    },
    {
      title: { nb: 'Mentorgjennomgang av hver leveranse', en: 'Mentor review of every delivery' },
      description: {
        nb: 'En mentor med flere års erfaring fra bransjen går gjennom leveransen etter en fast sjekkliste: at den virker, sikkerhet, universell utforming og dokumentasjon.',
        en: 'A mentor with years of industry experience reviews the delivery against a fixed checklist: that it works, security, accessibility and documentation.',
      },
    },
    {
      title: { nb: 'Ingenting står og faller på én student', en: 'Nothing depends on a single student' },
      description: {
        nb: 'Alt arbeid dokumenteres i et fast format. Med driftsabonnement tar en ny student eller mentor over hvis den opprinnelige studenten ikke lenger er tilgjengelig.',
        en: 'All work is documented in a fixed format. With a maintenance subscription, a new student or mentor takes over if the original student is no longer available.',
      },
    },
  ] satisfies TitledText[],
  safeguardsTitle: { nb: 'Hvis noe ikke holder mål', en: "If something isn't good enough" },
  safeguards: [
    {
      nb: 'Mentoren stopper leveransen hvis den ikke består gjennomgangen. Dere får den først når den er god nok.',
      en: "The mentor stops the delivery if it doesn't pass the review. You only receive it once it is good enough.",
    },
    {
      nb: 'Oppfyller leveransen ikke det avtalte omfanget, retter vi det uten ekstra kostnad.',
      en: "If the delivery doesn't meet the agreed scope, we fix it at no extra cost.",
    },
    {
      nb: 'Må studenten trekke seg underveis, setter vi inn en ny. Arbeidet er dokumentert hele veien.',
      en: 'If the student has to step away, we bring in a new one. The work is documented all along.',
    },
    {
      nb: 'Som siste utvei får dere pengene tilbake for den delen som ikke ble levert.',
      en: 'As a last resort, you get your money back for the part that was not delivered.',
    },
  ] satisfies Text[],
  safeguardsNote: {
    nb: 'Vilkårene er et utkast og viser hvordan vi ser for oss modellen.',
    en: 'These terms are a draft that shows how we envision the model.',
  },
  quote: {
    text: {
      nb: 'Vi visste hva vi fikk, hva det kostet, og at noen med erfaring hadde sett over det før vi fikk det.',
      en: 'We knew what we were getting, what it cost, and that someone experienced had checked it before we got it.',
    },
    name: { nb: 'Daglig leder i «Bakeriet Eksempel»', en: 'Managing director, “Bakeriet Eksempel”' },
    role: { nb: 'Fiktivt sitat til illustrasjon', en: 'Fictional quote for illustration' },
  } satisfies Quote,
}

export const packagesSection = {
  eyebrow: { nb: 'Pakker', en: 'Packages' },
  title: { nb: 'Faste priser, avtalt på forhånd', en: 'Fixed prices, agreed up front' },
  intro: {
    nb: 'Dere betaler for en avgrenset leveranse, ikke for timer. Det gjør det enkelt å budsjettere.',
    en: 'You pay for a well-defined delivery, not for hours. That makes budgeting easy.',
  },
  noteLabel: { nb: 'Merk:', en: 'Note:' },
  note: {
    nb: 'Prisene er eksempler som viser hvordan modellen kan se ut. De er ikke et tilbud.',
    en: 'The prices are examples that show what the model could look like. They are not an offer.',
  },
  examplePrice: { nb: 'Eksempelpris', en: 'Example price' },
  exVat: { nb: 'eks. mva', en: 'excl. VAT' },
}

export const packages: Package[] = [
  {
    id: 'nettside',
    name: { nb: 'Nettside Start', en: 'Website Starter' },
    price: 18000,
    priceNote: { nb: 'fast pris', en: 'fixed price' },
    description: {
      nb: 'En enkel, rask og tilgjengelig nettside som dere kan oppdatere selv.',
      en: 'A simple, fast and accessible website that you can update yourselves.',
    },
    includes: [
      { nb: 'Opptil fem sider', en: 'Up to five pages' },
      { nb: 'Kontakt- eller bestillingsskjema', en: 'Contact or order form' },
      { nb: 'Tilpasset mobil og universelt utformet', en: 'Mobile-friendly and accessible' },
      { nb: 'Grunnleggende søkemotoroptimalisering', en: 'Basic search engine optimisation' },
      { nb: 'Opplæring i å oppdatere innholdet', en: 'Training in updating the content' },
    ],
    delivery: { nb: 'Levering på rundt 3 uker', en: 'Delivered in about 3 weeks' },
  },
  {
    id: 'automatisering',
    name: { nb: 'Automatisering', en: 'Automation' },
    price: 12000,
    priceNote: { nb: 'fast pris', en: 'fixed price' },
    description: {
      nb: 'Én avgrenset automatisering som fjerner en manuell rutine.',
      en: 'One well-defined automation that removes a manual routine.',
    },
    includes: [
      { nb: 'Kartlegging av dagens rutine', en: 'Mapping of your current routine' },
      { nb: 'For eksempel skjema → regneark → e-postvarsel', en: 'For example form → spreadsheet → email alert' },
      { nb: 'Test sammen med dere før overlevering', en: 'Tested together with you before handover' },
      { nb: 'Enkel dokumentasjon på norsk', en: 'Simple documentation in Norwegian or English' },
    ],
    delivery: { nb: 'Levering på rundt 2 uker', en: 'Delivered in about 2 weeks' },
  },
  {
    id: 'drift',
    name: { nb: 'Drift og vedlikehold', en: 'Maintenance' },
    price: 990,
    priceSuffix: { nb: '/mnd', en: '/month' },
    priceNote: { nb: 'abonnement', en: 'subscription' },
    description: {
      nb: 'Trygghet etter levering, med oppdateringer, små endringer og en fast kontaktperson.',
      en: 'Peace of mind after delivery, with updates, small changes and a dedicated contact person.',
    },
    includes: [
      { nb: 'Sikkerhetsoppdateringer og sikkerhetskopi', en: 'Security updates and backups' },
      { nb: 'Inntil 2 timer småendringer per måned', en: 'Up to 2 hours of small changes per month' },
      { nb: 'Overvåking av at løsningen er oppe', en: 'Uptime monitoring' },
      { nb: 'Overtakelse hvis studenten slutter', en: 'Takeover if the student leaves' },
    ],
    delivery: { nb: 'Kan legges til alle pakker', en: 'Can be added to any package' },
  },
]

export const matching = {
  eyebrow: { nb: 'Prøv matching', en: 'Try matching' },
  title: {
    nb: 'Beskriv oppdraget, og se hvem vi kunne foreslått',
    en: 'Describe your project and see who we might suggest',
  },
  intro: {
    nb: 'En forenklet demo. I den ekte tjenesten gjør vi matchingen selv, etter en kort samtale med dere. Profilene under er fiktive.',
    en: 'A simplified demo. In the real service we do the matching ourselves, after a short conversation with you. The profiles below are fictional.',
  },
  formTitle: { nb: 'Ditt oppdrag', en: 'Your project' },
  taskLegend: { nb: 'Type oppdrag', en: 'Type of project' },
  timeframeLegend: { nb: 'Tidsramme', en: 'Timeframe' },
  budgetLegend: { nb: 'Budsjett', en: 'Budget' },
  descriptionLabel: { nb: 'Kort beskrivelse', en: 'Short description' },
  optional: { nb: '(valgfritt)', en: '(optional)' },
  placeholder: {
    nb: 'F.eks. «Vi trenger en ny nettside der kundene kan bestille time.»',
    en: 'E.g. “We need a new website where customers can book appointments.”',
  },
  descriptionHint: {
    nb: 'Teksten blir værende i nettleseren din og sendes ikke noe sted.',
    en: 'The text stays in your browser and is not sent anywhere.',
  },
  submit: { nb: 'Vis foreslåtte studenter', en: 'Show suggested students' },
  resultsTitle: { nb: 'Foreslåtte studenter', en: 'Suggested students' },
  prompt: {
    nb: 'Velg type oppdrag, tidsramme og budsjett, og trykk «Vis foreslåtte studenter».',
    en: 'Choose the type of project, timeframe and budget, then press “Show suggested students”.',
  },
  emptyState: {
    nb: 'Her dukker 2–3 fiktive studentprofiler opp, med fag, ferdigheter, tidligere case og mentor.',
    en: '2–3 fictional student profiles will appear here, with field of study, skills, previous case and mentor.',
  },
  summary: {
    nb: '{count} forslag for {task}, {timeframe}, {budget}.',
    en: '{count} suggestions for {task}, {timeframe}, {budget}.',
  },
  yourDescription: { nb: 'Din beskrivelse:', en: 'Your description:' },
  suggestedPackage: { nb: 'Foreslått pakke:', en: 'Suggested package:' },
  card: {
    fictional: { nb: '(fiktiv)', en: '(fictional)' },
    studyYear: { nb: '{study}, {year}. år', en: '{study}, year {year}' },
    skills: { nb: 'Ferdigheter', en: 'Skills' },
    pastCase: { nb: 'Tidligere case', en: 'Previous case' },
    mentor: { nb: 'Mentor', en: 'Mentor' },
    mentorDetails: { nb: ', {role} ({years} års erfaring)', en: ', {role} ({years} years of experience)' },
    why: { nb: 'Hvorfor denne profilen', en: 'Why this profile' },
    caveatPrefix: { nb: 'Forbehold: ', en: 'Caveat: ' },
    strength: {
      sterk: { nb: 'Sterk match', en: 'Strong match' },
      god: { nb: 'God match', en: 'Good match' },
      mulig: { nb: 'Mulig match', en: 'Possible match' },
    },
  },
  reasons: {
    taskType: {
      nb: 'Har bestått case-test og levert {task} før',
      en: 'Passed the case test and has delivered {task} before',
    },
    timeframe: { nb: 'Har kapasitet til å levere {timeframe}', en: 'Has capacity to deliver {timeframe}' },
    flexible: { nb: 'Har kapasitet dette semesteret', en: 'Has capacity this semester' },
    budget: {
      nb: 'Vurdert klar for oppdrag i størrelsen {budget}',
      en: 'Assessed as ready for projects of {budget}',
    },
    timeframeCaveat: { nb: 'Kan trolig ikke levere {timeframe}', en: 'Probably cannot deliver {timeframe}' },
    budgetCaveat: {
      nb: 'Vanligvis matchet med oppdrag i en annen størrelse enn {budget}',
      en: 'Usually matched with projects of a different size than {budget}',
    },
  },
}

export const taskTypes: TaskTypeChoice[] = [
  {
    id: 'nettside',
    label: { nb: 'Nettside', en: 'Website' },
    hint: { nb: 'Ny side eller oppgradering av den gamle', en: 'A new site or an upgrade of the old one' },
    phrase: { nb: 'nettside', en: 'a website' },
    noun: { nb: 'nettsider', en: 'websites' },
    suggestedPackage: { nb: 'Nettside Start', en: 'Website Starter' },
  },
  {
    id: 'automatisering',
    label: { nb: 'Automatisering', en: 'Automation' },
    hint: { nb: 'Fjerne en manuell rutine', en: 'Remove a manual routine' },
    phrase: { nb: 'automatisering', en: 'an automation' },
    noun: { nb: 'automatisering', en: 'automations' },
    suggestedPackage: { nb: 'Automatisering', en: 'Automation' },
  },
  {
    id: 'verktoy',
    label: { nb: 'Lite internt verktøy', en: 'Small internal tool' },
    hint: { nb: 'For eksempel booking, oversikt eller rapport', en: 'For example booking, an overview or a report' },
    phrase: { nb: 'lite internt verktøy', en: 'a small internal tool' },
    noun: { nb: 'interne verktøy', en: 'internal tools' },
    suggestedPackage: {
      nb: 'Fast pris avtales etter en kort kartlegging',
      en: 'A fixed price is agreed after a short assessment',
    },
  },
]

export const timeframes: Choice<TimeframeId>[] = [
  {
    id: 'to-uker',
    label: { nb: 'Innen 2 uker', en: 'Within 2 weeks' },
    phrase: { nb: 'innen 2 uker', en: 'within 2 weeks' },
  },
  {
    id: 'en-maaned',
    label: { nb: 'Innen en måned', en: 'Within a month' },
    phrase: { nb: 'innen en måned', en: 'within a month' },
  },
  {
    id: 'fleksibel',
    label: { nb: 'Fleksibelt', en: 'Flexible' },
    phrase: { nb: 'fleksibelt', en: 'flexible' },
  },
]

// Beløpene bruker hardt mellomrom (\u00a0) slik at de ikke brytes over to linjer.
export const budgets: Choice<BudgetId>[] = [
  {
    id: 'under-15',
    label: { nb: 'Under 15\u00a0000\u00a0kr', en: 'Under NOK\u00a015,000' },
    phrase: { nb: 'under 15\u00a0000\u00a0kr', en: 'under NOK\u00a015,000' },
  },
  {
    id: '15-30',
    label: { nb: '15\u00a0000–30\u00a0000\u00a0kr', en: 'NOK\u00a015,000–30,000' },
    phrase: { nb: '15\u00a0000–30\u00a0000\u00a0kr', en: 'NOK\u00a015,000–30,000' },
  },
  {
    id: 'over-30',
    label: { nb: 'Over 30\u00a0000\u00a0kr', en: 'Over NOK\u00a030,000' },
    phrase: { nb: 'over 30\u00a0000\u00a0kr', en: 'over NOK\u00a030,000' },
  },
]

export const mentors: Mentor[] = [
  {
    id: 'm1',
    name: 'Hanne Referansen',
    role: { nb: 'seniorutvikler', en: 'senior developer' },
    yearsOfExperience: 12,
  },
  {
    id: 'm2',
    name: 'Petter Prototypsen',
    role: { nb: 'løsningsarkitekt', en: 'solution architect' },
    yearsOfExperience: 9,
  },
  {
    id: 'm3',
    name: 'Lise Lorem',
    role: { nb: 'UX- og tilgjengelighetsrådgiver', en: 'UX and accessibility consultant' },
    yearsOfExperience: 10,
  },
]

const skill = {
  a11y: { nb: 'Universell utforming', en: 'Accessibility' },
  htmlCss: { nb: 'HTML og CSS', en: 'HTML and CSS' },
  userTesting: { nb: 'Brukertesting', en: 'User testing' },
  processMapping: { nb: 'Prosesskartlegging', en: 'Process mapping' },
  seo: { nb: 'Søkemotoroptimalisering', en: 'SEO' },
  a11yTesting: { nb: 'Tilgjengelighetstesting', en: 'Accessibility testing' },
  apis: { nb: 'API-integrasjoner', en: 'API integrations' },
} satisfies Record<string, Text>

const study = {
  informatics: { nb: 'Informatikk', en: 'Informatics' },
  computerScience: { nb: 'Datateknologi', en: 'Computer Science' },
  interactionDesign: { nb: 'Interaksjonsdesign', en: 'Interaction Design' },
  iot: { nb: 'Industriell økonomi og teknologiledelse', en: 'Industrial Economics and Technology Management' },
  webDev: { nb: 'Webutvikling', en: 'Web Development' },
} satisfies Record<string, Text>

export const students: Student[] = [
  {
    id: 's1',
    name: 'Kari Prøvestad',
    initials: 'KP',
    study: study.informatics,
    year: 4,
    skills: ['React', 'TypeScript', skill.a11y, 'Figma'],
    taskTypes: ['nettside', 'verktoy'],
    availability: ['en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: { nb: 'Bestillingsside for «Bakeriet Eksempel»', en: 'Order site for “Bakeriet Eksempel”' },
      description: {
        nb: 'Case-test: mobilvennlig side med forhåndsbestilling av kaker, levert på 48 timer.',
        en: 'Case test: mobile-friendly site for pre-ordering cakes, delivered in 48 hours.',
      },
    },
    mentorId: 'm1',
  },
  {
    id: 's2',
    name: 'Ola Testesen',
    initials: 'OT',
    study: study.computerScience,
    year: 3,
    skills: ['Python', 'Power Automate', 'Google Sheets', skill.apis],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['under-15', '15-30'],
    pastCase: {
      title: {
        nb: 'Automatisk betalingspåminnelse for «Fiktiv Frisør AS»',
        en: 'Automatic payment reminder for “Fiktiv Frisør AS”',
      },
      description: {
        nb: 'Koblet timebok og regneark slik at kunder med ubetalte timer får påminnelse automatisk.',
        en: 'Connected the booking calendar and a spreadsheet so customers with unpaid appointments get reminders automatically.',
      },
    },
    mentorId: 'm2',
  },
  {
    id: 's3',
    name: 'Sara Demodal',
    initials: 'SD',
    study: study.interactionDesign,
    year: 3,
    skills: ['Figma', 'WordPress', skill.htmlCss, skill.userTesting],
    taskTypes: ['nettside'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['under-15', '15-30'],
    pastCase: {
      title: { nb: 'Ny forside for «Demo Sykkelverksted»', en: 'New front page for “Demo Sykkelverksted”' },
      description: {
        nb: 'Testet med fem kunder og gjorde det enklere å finne åpningstider og bestille service.',
        en: 'Tested with five customers and made it easier to find opening hours and book a service.',
      },
    },
    mentorId: 'm3',
  },
  {
    id: 's4',
    name: 'Emil Eksempelsen',
    initials: 'EE',
    study: study.informatics,
    year: 5,
    skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Next.js'],
    taskTypes: ['nettside', 'automatisering', 'verktoy'],
    availability: ['en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: { nb: 'Bookingverktøy for «Kontorhotellet Prototyp»', en: 'Booking tool for “Kontorhotellet Prototyp”' },
      description: {
        nb: 'Internt verktøy for booking av møterom med enkel administrasjon og ukesrapport.',
        en: 'Internal tool for booking meeting rooms, with simple admin and a weekly report.',
      },
    },
    mentorId: 'm2',
  },
  {
    id: 's5',
    name: 'Ingrid Plassholder',
    initials: 'IP',
    study: study.iot,
    year: 4,
    skills: ['Excel', 'Power BI', 'Python', skill.processMapping],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: { nb: 'Lagerrapport for «Butikken Utkast»', en: 'Stock report for “Butikken Utkast”' },
      description: {
        nb: 'Erstattet manuell telling i regneark med en automatisk ukerapport over varebeholdning.',
        en: 'Replaced manual counting in spreadsheets with an automatic weekly stock report.',
      },
    },
    mentorId: 'm2',
  },
  {
    id: 's6',
    name: 'Jonas Fiktivsen',
    initials: 'JF',
    study: study.webDev,
    year: 2,
    skills: [skill.htmlCss, 'JavaScript', 'Webflow', skill.seo],
    taskTypes: ['nettside'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['under-15'],
    pastCase: {
      title: { nb: 'Landingsside for «Kafé Lorem»', en: 'Landing page for “Kafé Lorem”' },
      description: {
        nb: 'Enkel side med meny, åpningstider og kart, og en tydelig forbedring i søkeresultatene.',
        en: 'Simple page with menu, opening hours and map, and a clear improvement in search results.',
      },
    },
    mentorId: 'm3',
  },
  {
    id: 's7',
    name: 'Amir Utkast',
    initials: 'AU',
    study: study.computerScience,
    year: 4,
    skills: ['Python', 'Django', 'Docker', 'Zapier'],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: { nb: 'Timeregistrering for «Rørlegger Mockup AS»', en: 'Time tracking for “Rørlegger Mockup AS”' },
      description: {
        nb: 'Mobilvennlig registrering av timer på oppdrag, med eksport til regnskapssystemet.',
        en: 'Mobile-friendly time tracking per job, with export to the accounting system.',
      },
    },
    mentorId: 'm1',
  },
  {
    id: 's8',
    name: 'Mia Mockberg',
    initials: 'MM',
    study: study.interactionDesign,
    year: 5,
    skills: ['React', 'Figma', skill.a11y, skill.a11yTesting],
    taskTypes: ['nettside', 'verktoy'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: {
        nb: 'Tilgjengelighetsløft for «Treningssenteret Test»',
        en: 'Accessibility upgrade for “Treningssenteret Test”',
      },
      description: {
        nb: 'Gikk gjennom og rettet nettsiden slik at den kan brukes med skjermleser og tastatur.',
        en: 'Reviewed and fixed the website so it can be used with a screen reader and keyboard.',
      },
    },
    mentorId: 'm3',
  },
]

export const forStudents = {
  eyebrow: { nb: 'For studenter', en: 'For students' },
  title: { nb: 'Betalt erfaring, med en mentor i ryggen', en: 'Paid experience, with a mentor behind you' },
  intro: {
    nb: 'Bridge gir deg betalt, ekte erfaring med ekte kunder, med en erfaren mentor ved siden av. Oppdragene er avgrenset, så de lar seg kombinere med studiene.',
    en: 'Bridge gives you paid, real experience with real clients, with an experienced mentor by your side. Projects are well-defined, so they fit alongside your studies.',
  },
  benefits: [
    {
      title: { nb: 'Betalt arbeid', en: 'Paid work' },
      description: {
        nb: 'Fast honorar per oppdrag, avtalt før du starter. Ingen gratisjobbing for «erfaringens skyld».',
        en: 'A fixed fee per project, agreed before you start. No unpaid work “for the experience”.',
      },
    },
    {
      title: { nb: 'Mentorveiledning', en: 'Mentoring' },
      description: {
        nb: 'Tilbakemelding på kode, design og kundedialog fra noen som har jobbet med dette i mange år.',
        en: 'Feedback on code, design and client communication from someone who has done this for years.',
      },
    },
    {
      title: { nb: 'Portefølje og referanse', en: 'Portfolio and reference' },
      description: {
        nb: 'Reelle leveranser du kan vise frem, og en referanse fra både kunde og mentor.',
        en: 'Real deliveries you can show, and a reference from both the client and your mentor.',
      },
    },
    {
      title: { nb: 'Tilpasset studiene', en: 'Fits your studies' },
      description: {
        nb: 'Du sier fra om kapasiteten din per semester, og vi matcher deretter. Eksamensperioder respekteres.',
        en: 'You tell us your capacity each semester, and we match accordingly. Exam periods are respected.',
      },
    },
  ] satisfies TitledText[],
  admissionTitle: { nb: 'Slik fungerer opptaket', en: 'How admission works' },
  admissionSteps: [
    {
      title: { nb: 'Kort søknad', en: 'Short application' },
      description: {
        nb: 'Studieprogram, årstrinn og hva du kan. Lenke til tidligere arbeid er fint, men ikke et krav.',
        en: 'Study programme, year and what you can do. A link to previous work is nice, but not required.',
      },
    },
    {
      title: { nb: 'Praktisk case-test', en: 'Practical case test' },
      description: {
        nb: 'En realistisk oppgave for en fiktiv kunde, med 48 timer på deg. Vi ser på løsningen og tankegangen.',
        en: 'A realistic task for a fictional client, with 48 hours to complete it. We look at the solution and your reasoning.',
      },
    },
    {
      title: { nb: 'Samtale med en mentor', en: 'Conversation with a mentor' },
      description: {
        nb: 'Dere går gjennom løsningen din sammen. Her ser vi også hvordan du forklarer valgene dine.',
        en: 'You go through your solution together. This is also where we see how you explain your choices.',
      },
    },
    {
      title: { nb: 'Første oppdrag med tett oppfølging', en: 'First project with close follow-up' },
      description: {
        nb: 'Du starter med et mindre oppdrag, og mentoren følger deg ekstra tett.',
        en: 'You start with a smaller project, and your mentor follows you extra closely.',
      },
    },
  ] satisfies TitledText[],
  cta: {
    label: { nb: 'Meld interesse på e-post', en: 'Register interest by email' },
    subject: { nb: 'Interesse som student i Bridge', en: 'Student interest in Bridge' },
  },
  quote: {
    text: {
      nb: 'Første gang jeg har levert noe til en ekte kunde, og fått skikkelig tilbakemelding på koden underveis.',
      en: 'The first time I have delivered something to a real client, and got proper feedback on my code along the way.',
    },
    name: { nb: 'Sara Demodal, Interaksjonsdesign', en: 'Sara Demodal, Interaction Design' },
    role: { nb: 'Fiktivt sitat til illustrasjon', en: 'Fictional quote for illustration' },
  } satisfies Quote,
}

export const footer = {
  about: {
    nb: 'Bridge er et studentprosjekt i emnet {course} ved NTNU. Denne siden er en prototype som brukes til å teste og presentere idéen.',
    en: 'Bridge is a student project in the course {course} at NTNU. This site is a prototype used to test and present the idea.',
  },
  disclaimer: {
    nb: 'Alle personer, bedrifter, sitater og priser på siden er fiktive. Bridge er ikke et tilbud fra NTNU, og vi har ingen avtaler med NTNU, Sit eller bedrifter.',
    en: 'All people, companies, quotes and prices on this site are fictional. Bridge is not a service offered by NTNU, and we have no agreements with NTNU, Sit or any companies.',
  },
  contactTitle: { nb: 'Kontakt', en: 'Contact' },
  contactText: {
    nb: 'Spørsmål, innspill eller lyst til å teste idéen med oss?',
    en: 'Questions, feedback or want to test the idea with us?',
  },
  bottomLine: { nb: 'Prototype · Studentprosjekt i {course}', en: 'Prototype · Student project in {course}' },
}
