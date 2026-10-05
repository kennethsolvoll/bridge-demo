/**
 * All hardkodet data for demo-siden.
 * Alle personer, bedrifter, sitater og priser er FIKTIVE og laget kun for å illustrere idéen.
 */
import type {
  BudgetId,
  Choice,
  Mentor,
  Package,
  Quote,
  Student,
  TaskTypeChoice,
  TimeframeId,
  TitledText,
} from '../types'

export const site = {
  name: 'Bridge',
  course: 'Entreprenørskap i praksis',
  contactEmail: 'bridge-demo@example.com',
  demoNotice:
    'Siden er laget for et studentprosjekt, og alle personer, bedrifter, sitater og priser på siden er fiktive.',
}

export const navItems = [
  { href: '#slik-fungerer-det', label: 'Slik fungerer det' },
  { href: '#kvalitet', label: 'Kvalitet' },
  { href: '#pakker', label: 'Pakker' },
  { href: '#matching', label: 'Prøv matching' },
  { href: '#studenter', label: 'For studenter' },
]

export const hero = {
  eyebrow: 'Web og digitalisering for småbedrifter i Trondheim',
  title: 'Digitale oppgaver løst av håndplukkede studenter, kontrollert av erfarne mentorer',
  lead: 'Bridge finner rett student til rett oppdrag: en ny nettside, en enkel automatisering eller et lite internt verktøy. Dere får fast pris, et tydelig avgrenset oppdrag og en mentorgjennomgang før noe leveres.',
  primaryCta: { href: '#matching', label: 'Beskriv oppdraget ditt' },
  secondaryCta: { href: '#studenter', label: 'Jeg er student' },
  highlights: ['Fast pakkepris, ingen timeliste', 'Mentor gjennomgår alt før levering', 'Valgfri drift etterpå'],
  example: {
    title: 'Slik kan et oppdrag se ut',
    rows: [
      { label: 'Oppdrag', value: 'Ny nettside med bestillingsskjema' },
      { label: 'Student', value: 'Valgt av oss etter bestått case-test' },
      { label: 'Kvalitet', value: 'Mentorgjennomgang før levering' },
      { label: 'Pris', value: 'Fast, avtalt før oppstart' },
      { label: 'Etterpå', value: 'Driftsabonnement hvis dere ønsker' },
    ],
    note: 'Eksempel til illustrasjon',
  },
}

export const steps: (TitledText & { detail: string })[] = [
  {
    title: 'Beskriv behovet',
    description:
      'Fortell kort, med vanlige ord, hva dere trenger. Vi hjelper dere å avgrense oppdraget og velge riktig pakke, så alle vet hva som skal leveres.',
    detail: 'Tar rundt 15 minutter',
  },
  {
    title: 'Vi matcher',
    description:
      'Vi velger studenten som passer best ut fra ferdigheter, tidligere case og tilgjengelighet. Dere ser profilen og godkjenner før arbeidet starter.',
    detail: 'Forslag innen tre virkedager',
  },
  {
    title: 'Mentor kvalitetssikrer og leverer',
    description:
      'En erfaren mentor følger arbeidet og gjennomgår leveransen før dere får den. Dere får dokumentasjon og en kort opplæring ved overlevering.',
    detail: 'Innen avtalt tidsramme',
  },
]

export const quality = {
  intro:
    'Det viktigste for en liten bedrift er å vite at jobben blir gjort ordentlig. Derfor bygger Bridge på tre ting.',
  pillars: [
    {
      title: 'Opptak gjennom praktisk case-test',
      description:
        'Søkerne løser en realistisk kundeoppgave på 48 timer. Vi vurderer selve løsningen, hvordan de kommuniserer og hvordan de håndterer uklare krav, ikke bare CV og karakterer.',
    },
    {
      title: 'Mentorgjennomgang av hver leveranse',
      description:
        'En mentor med flere års erfaring fra bransjen går gjennom leveransen etter en fast sjekkliste: at den virker, sikkerhet, universell utforming og dokumentasjon.',
    },
    {
      title: 'Ingenting står og faller på én student',
      description:
        'Alt arbeid dokumenteres i et fast format. Med driftsabonnement tar en ny student eller mentor over hvis den opprinnelige studenten ikke lenger er tilgjengelig.',
    },
  ] satisfies TitledText[],
  safeguardsTitle: 'Hvis noe ikke holder mål',
  safeguards: [
    'Mentoren stopper leveransen hvis den ikke består gjennomgangen. Dere får den først når den er god nok.',
    'Oppfyller leveransen ikke det avtalte omfanget, retter vi det uten ekstra kostnad.',
    'Må studenten trekke seg underveis, setter vi inn en ny. Arbeidet er dokumentert hele veien.',
    'Som siste utvei får dere pengene tilbake for den delen som ikke ble levert.',
  ],
  safeguardsNote: 'Vilkårene er et utkast og viser hvordan vi ser for oss modellen.',
  quote: {
    text: 'Vi visste hva vi fikk, hva det kostet, og at noen med erfaring hadde sett over det før vi fikk det.',
    name: 'Daglig leder i «Bakeriet Eksempel»',
    role: 'Fiktivt sitat til illustrasjon',
  } satisfies Quote,
}

export const packagesNote =
  'Prisene er eksempler som viser hvordan modellen kan se ut. De er ikke et tilbud.'

export const packages: Package[] = [
  {
    id: 'nettside',
    name: 'Nettside Start',
    price: 18000,
    priceUnit: 'kr',
    priceNote: 'fast pris',
    description: 'En enkel, rask og tilgjengelig nettside som dere kan oppdatere selv.',
    includes: [
      'Opptil fem sider',
      'Kontakt- eller bestillingsskjema',
      'Tilpasset mobil og universelt utformet',
      'Grunnleggende søkemotoroptimalisering',
      'Opplæring i å oppdatere innholdet',
    ],
    delivery: 'Levering på rundt 3 uker',
  },
  {
    id: 'automatisering',
    name: 'Automatisering',
    price: 12000,
    priceUnit: 'kr',
    priceNote: 'fast pris',
    description: 'Én avgrenset automatisering som fjerner en manuell rutine.',
    includes: [
      'Kartlegging av dagens rutine',
      'For eksempel skjema → regneark → e-postvarsel',
      'Test sammen med dere før overlevering',
      'Enkel dokumentasjon på norsk',
    ],
    delivery: 'Levering på rundt 2 uker',
  },
  {
    id: 'drift',
    name: 'Drift og vedlikehold',
    price: 990,
    priceUnit: 'kr/mnd',
    priceNote: 'abonnement',
    description: 'Trygghet etter levering, med oppdateringer, små endringer og en fast kontaktperson.',
    includes: [
      'Sikkerhetsoppdateringer og sikkerhetskopi',
      'Inntil 2 timer småendringer per måned',
      'Overvåking av at løsningen er oppe',
      'Overtakelse hvis studenten slutter',
    ],
    delivery: 'Kan legges til alle pakker',
  },
]

export const taskTypes: TaskTypeChoice[] = [
  {
    id: 'nettside',
    label: 'Nettside',
    hint: 'Ny side eller oppgradering av den gamle',
    noun: 'nettsider',
    suggestedPackage: 'Nettside Start',
  },
  {
    id: 'automatisering',
    label: 'Automatisering',
    hint: 'Fjerne en manuell rutine',
    noun: 'automatisering',
    suggestedPackage: 'Automatisering',
  },
  {
    id: 'verktoy',
    label: 'Lite internt verktøy',
    hint: 'For eksempel booking, oversikt eller rapport',
    noun: 'interne verktøy',
    suggestedPackage: 'Fast pris avtales etter en kort kartlegging',
  },
]

export const timeframes: Choice<TimeframeId>[] = [
  { id: 'to-uker', label: 'Innen 2 uker' },
  { id: 'en-maaned', label: 'Innen en måned' },
  { id: 'fleksibel', label: 'Fleksibelt' },
]

export const budgets: Choice<BudgetId>[] = [
  // Hardt mellomrom (\u00a0) hindrer at beløpene brytes over to linjer.
  { id: 'under-15', label: 'Under 15\u00a0000\u00a0kr' },
  { id: '15-30', label: '15\u00a0000–30\u00a0000\u00a0kr' },
  { id: 'over-30', label: 'Over 30\u00a0000\u00a0kr' },
]

export const mentors: Mentor[] = [
  { id: 'm1', name: 'Hanne Referansen', role: 'seniorutvikler', yearsOfExperience: 12 },
  { id: 'm2', name: 'Petter Prototypsen', role: 'løsningsarkitekt', yearsOfExperience: 9 },
  { id: 'm3', name: 'Lise Lorem', role: 'UX- og tilgjengelighetsrådgiver', yearsOfExperience: 10 },
]

export const students: Student[] = [
  {
    id: 's1',
    name: 'Kari Prøvestad',
    initials: 'KP',
    study: 'Informatikk',
    year: 4,
    skills: ['React', 'TypeScript', 'Universell utforming', 'Figma'],
    taskTypes: ['nettside', 'verktoy'],
    availability: ['en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: 'Bestillingsside for «Bakeriet Eksempel»',
      description: 'Case-test: mobilvennlig side med forhåndsbestilling av kaker, levert på 48 timer.',
    },
    mentorId: 'm1',
  },
  {
    id: 's2',
    name: 'Ola Testesen',
    initials: 'OT',
    study: 'Datateknologi',
    year: 3,
    skills: ['Python', 'Power Automate', 'Google Sheets', 'API-integrasjoner'],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['under-15', '15-30'],
    pastCase: {
      title: 'Automatisk betalingspåminnelse for «Fiktiv Frisør AS»',
      description: 'Koblet timebok og regneark slik at kunder med ubetalte timer får påminnelse automatisk.',
    },
    mentorId: 'm2',
  },
  {
    id: 's3',
    name: 'Sara Demodal',
    initials: 'SD',
    study: 'Interaksjonsdesign',
    year: 3,
    skills: ['Figma', 'WordPress', 'HTML og CSS', 'Brukertesting'],
    taskTypes: ['nettside'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['under-15', '15-30'],
    pastCase: {
      title: 'Ny forside for «Demo Sykkelverksted»',
      description: 'Testet med fem kunder og gjorde det enklere å finne åpningstider og bestille service.',
    },
    mentorId: 'm3',
  },
  {
    id: 's4',
    name: 'Emil Eksempelsen',
    initials: 'EE',
    study: 'Informatikk',
    year: 5,
    skills: ['TypeScript', 'Node.js', 'PostgreSQL', 'Next.js'],
    taskTypes: ['nettside', 'automatisering', 'verktoy'],
    availability: ['en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: 'Bookingverktøy for «Kontorhotellet Prototyp»',
      description: 'Internt verktøy for booking av møterom med enkel administrasjon og ukesrapport.',
    },
    mentorId: 'm2',
  },
  {
    id: 's5',
    name: 'Ingrid Plassholder',
    initials: 'IP',
    study: 'Industriell økonomi og teknologiledelse',
    year: 4,
    skills: ['Excel', 'Power BI', 'Python', 'Prosesskartlegging'],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: 'Lagerrapport for «Butikken Utkast»',
      description: 'Erstattet manuell telling i regneark med en automatisk ukerapport over varebeholdning.',
    },
    mentorId: 'm2',
  },
  {
    id: 's6',
    name: 'Jonas Fiktivsen',
    initials: 'JF',
    study: 'Webutvikling',
    year: 2,
    skills: ['HTML og CSS', 'JavaScript', 'Webflow', 'Søkemotoroptimalisering'],
    taskTypes: ['nettside'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['under-15'],
    pastCase: {
      title: 'Landingsside for «Kafé Lorem»',
      description: 'Enkel side med meny, åpningstider og kart, og en tydelig forbedring i søkeresultatene.',
    },
    mentorId: 'm3',
  },
  {
    id: 's7',
    name: 'Amir Utkast',
    initials: 'AU',
    study: 'Datateknologi',
    year: 4,
    skills: ['Python', 'Django', 'Docker', 'Zapier'],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: 'Timeregistrering for «Rørlegger Mockup AS»',
      description: 'Mobilvennlig registrering av timer på oppdrag, med eksport til regnskapssystemet.',
    },
    mentorId: 'm1',
  },
  {
    id: 's8',
    name: 'Mia Mockberg',
    initials: 'MM',
    study: 'Interaksjonsdesign',
    year: 5,
    skills: ['React', 'Figma', 'Universell utforming', 'Tilgjengelighetstesting'],
    taskTypes: ['nettside', 'verktoy'],
    availability: ['to-uker', 'en-maaned', 'fleksibel'],
    budgets: ['15-30', 'over-30'],
    pastCase: {
      title: 'Tilgjengelighetsløft for «Treningssenteret Test»',
      description: 'Gikk gjennom og rettet nettsiden slik at den kan brukes med skjermleser og tastatur.',
    },
    mentorId: 'm3',
  },
]

export const forStudents = {
  intro:
    'Bridge gir deg betalt, ekte erfaring med ekte kunder, med en erfaren mentor ved siden av. Oppdragene er avgrenset, så de lar seg kombinere med studiene.',
  benefits: [
    {
      title: 'Betalt arbeid',
      description: 'Fast honorar per oppdrag, avtalt før du starter. Ingen gratisjobbing for «erfaringens skyld».',
    },
    {
      title: 'Mentorveiledning',
      description: 'Tilbakemelding på kode, design og kundedialog fra noen som har jobbet med dette i mange år.',
    },
    {
      title: 'Portefølje og referanse',
      description: 'Reelle leveranser du kan vise frem, og en referanse fra både kunde og mentor.',
    },
    {
      title: 'Tilpasset studiene',
      description: 'Du sier fra om kapasiteten din per semester, og vi matcher deretter. Eksamensperioder respekteres.',
    },
  ] satisfies TitledText[],
  admissionSteps: [
    {
      title: 'Kort søknad',
      description: 'Studieprogram, årstrinn og hva du kan. Lenke til tidligere arbeid er fint, men ikke et krav.',
    },
    {
      title: 'Praktisk case-test',
      description: 'En realistisk oppgave for en fiktiv kunde, med 48 timer på deg. Vi ser på løsningen og tankegangen.',
    },
    {
      title: 'Samtale med en mentor',
      description: 'Dere går gjennom løsningen din sammen. Her ser vi også hvordan du forklarer valgene dine.',
    },
    {
      title: 'Første oppdrag med tett oppfølging',
      description: 'Du starter med et mindre oppdrag, og mentoren følger deg ekstra tett.',
    },
  ] satisfies TitledText[],
  cta: { label: 'Meld interesse på e-post', subject: 'Interesse som student i Bridge' },
  quote: {
    text: 'Første gang jeg har levert noe til en ekte kunde, og fått skikkelig tilbakemelding på koden underveis.',
    name: 'Sara Demodal, Interaksjonsdesign',
    role: 'Fiktivt sitat til illustrasjon',
  } satisfies Quote,
}

export const footer = {
  about: `Bridge er et studentprosjekt i emnet ${site.course} ved NTNU. Denne siden er en prototype som brukes til å teste og presentere idéen.`,
  disclaimer:
    'Alle personer, bedrifter, sitater og priser på siden er fiktive. Bridge er ikke et tilbud fra NTNU, og vi har ingen avtaler med NTNU, Sit eller bedrifter.',
}
