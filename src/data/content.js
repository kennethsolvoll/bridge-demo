// All hardkodet innhold for demo-siden.
// Alle personer, bedrifter og sitater er FIKTIVE. Prisene er EKSEMPLER.

export const site = {
  name: 'Studentbridge',
  tagline: 'Kvalitetssikrede NTNU-studenter for små digitale oppdrag',
  contactEmail: 'kontakt@example.no',
  demoNotice:
    'Demo/prototype fra et studentprosjekt. Alle personer, bedrifter, sitater og priser er fiktive eksempler.',
}

export const nav = [
  { href: '#slik-fungerer-det', label: 'Slik fungerer det' },
  { href: '#kvalitet', label: 'Kvalitet' },
  { href: '#pakker', label: 'Pakker' },
  { href: '#matching', label: 'Prøv matching' },
  { href: '#for-studenter', label: 'For studenter' },
]

export const hero = {
  eyebrow: 'For småbedrifter i Trondheim',
  title: 'Få nettsiden eller verktøyet dere trenger, levert av en håndplukket student og kontrollert av en mentor.',
  lead:
    'Vi matcher bedriften med en NTNU-student innen web og digitalisering til avgrensede oppdrag med fast pris. Før noe leveres, går en erfaren mentor gjennom arbeidet.',
  primaryCta: { href: '#matching', label: 'Beskriv oppdraget ditt' },
  secondaryCta: { href: '#for-studenter', label: 'Jeg er student' },
  points: [
    'Fast pakkepris, ikke timepris',
    'Mentor gjennomgår hver leveranse',
    'Valgfri drift etterpå',
  ],
}

export const steps = [
  {
    title: 'Beskriv behovet',
    text: 'Fortell kort hva dere trenger, når det må være ferdig og omtrent hva dere kan bruke. Dere trenger ikke kunne noe teknisk.',
  },
  {
    title: 'Vi matcher',
    text: 'Vi velger selv riktig student til oppdraget ut fra ferdigheter, tidligere case og kapasitet. Dere får en fast pris og en tydelig avgrensning før arbeidet starter.',
  },
  {
    title: 'Mentor kvalitetssikrer og leverer',
    text: 'Studenten gjør jobben med jevnlige avsjekker. En erfaren mentor går gjennom leveransen før dere får den, og dere får en enkel overlevering.',
  },
]

export const quality = {
  intro:
    'Trygghet for bedriften er hele poenget. Derfor bygger vi kvaliteten inn i tre ledd, ikke bare i én samtale.',
  pillars: [
    {
      title: 'Opptak med praktisk case-test',
      text: 'Studentene velges ut gjennom en tidsavgrenset oppgave som ligner et ekte kundeoppdrag, ikke bare på CV og karakterer. Vi ser på løsningen, kommunikasjonen og hvordan de prioriterer.',
    },
    {
      title: 'Mentorgjennomgang før levering',
      text: 'Hver leveranse gjennomgås av en erfaren mentor fra bransjen etter en fast sjekkliste: funksjon, sikkerhet, universell utforming, ytelse og dokumentasjon.',
    },
    {
      title: 'Ingenting står og faller på én student',
      text: 'Kode, tilganger og dokumentasjon eies av bedriften og overleveres samlet. Med driftsabonnement tar en annen student eller mentoren over hvis den opprinnelige studenten ikke er tilgjengelig.',
    },
  ],
  guarantee: {
    title: 'Hvis noe ikke holder mål',
    items: [
      'Mentoren stopper leveransen og ber om retting før bedriften ser den.',
      'Avvik fra det avtalte rettes uten ekstra kostnad.',
      'Blir oppdraget likevel ikke levert som avtalt, setter vi inn en ny student, eller pengene tilbakebetales for den delen som ikke er levert.',
    ],
    note: 'Vilkårene over er et forslag vi tester i prosjektet, ikke en bindende avtale.',
  },
}

export const packages = [
  {
    id: 'nettside',
    name: 'Enkel nettside',
    price: 'kr 18 000',
    priceNote: 'fast pris, eks. mva.',
    idealFor: 'Bedrifter som mangler nettside eller har en utdatert en.',
    includes: [
      'Opptil 5 sider på en enkel publiseringsløsning',
      'Mobiltilpasset og universelt utformet',
      'Kontaktskjema og grunnleggende søkemotoroptimalisering',
      'Opplæring i å oppdatere innhold selv',
      'Mentorgjennomgang før lansering',
    ],
    deliveryTime: 'ca. 3–4 uker',
  },
  {
    id: 'automatisering',
    name: 'Automatisering eller lite verktøy',
    price: 'kr 12 000',
    priceNote: 'fast pris, eks. mva.',
    idealFor: 'Bedrifter som bruker tid på manuelle, gjentakende oppgaver.',
    includes: [
      'Kartlegging av én konkret arbeidsprosess',
      'Én automatisering eller ett lite internt verktøy',
      'For eksempel skjema → regneark → e-post, eller en enkel bookingoversikt',
      'Skriftlig brukerveiledning',
      'Mentorgjennomgang før overlevering',
    ],
    deliveryTime: 'ca. 2–3 uker',
    highlighted: true,
  },
  {
    id: 'drift',
    name: 'Driftsabonnement',
    price: 'kr 990',
    priceNote: 'per måned, eks. mva.',
    idealFor: 'Alle som vil ha trygg drift etter levering.',
    includes: [
      'Oppdateringer og sikkerhetssjekk hver måned',
      'Inntil 1 time med små endringer per måned',
      'Fast kontaktperson, med mentor i bakhånd',
      'Overtagelse hvis studenten slutter',
      'Ingen bindingstid',
    ],
    deliveryTime: 'løpende',
  },
]

export const packagesDisclaimer =
  'Alle priser er eksempler laget for å teste idéen. De er ikke et tilbud.'

// --- Matching-demo ---

export const matchOptions = {
  taskTypes: [
    { value: 'nettside', label: 'Nettside' },
    { value: 'automatisering', label: 'Automatisering' },
    { value: 'verktoy', label: 'Lite internt verktøy' },
    { value: 'drift', label: 'Drift og vedlikehold' },
  ],
  timeframes: [
    { value: 'kort', label: 'Innen 2 uker' },
    { value: 'middels', label: 'Innen 1 måned' },
    { value: 'fleksibel', label: 'Fleksibelt' },
  ],
  budgets: [
    { value: 'lav', label: 'Under kr 15 000' },
    { value: 'middels', label: 'kr 15 000–30 000' },
    { value: 'hoy', label: 'Over kr 30 000' },
  ],
}

export const mentors = [
  { id: 'm1', name: 'Mentor Mari Eksempelsen', role: 'Fiktiv senior webutvikler, 12 års erfaring' },
  { id: 'm2', name: 'Mentor Per Prøvesen', role: 'Fiktiv løsningsarkitekt, 15 års erfaring' },
  { id: 'm3', name: 'Mentor Ida Demostad', role: 'Fiktiv UX-designer og tilgjengelighetsrådgiver' },
]

// taskTypes: hvilke oppdragstyper studenten passer til (første = sterkest)
// availability: hvilke tidsrammer studenten har kapasitet til
// budgets: hvilke budsjettnivåer studenten typisk jobber innenfor
export const students = [
  {
    id: 's1',
    name: 'Ola Testmann',
    initials: 'OT',
    study: 'Informatikk',
    year: '4. år, master',
    skills: ['React', 'WordPress', 'Universell utforming', 'SEO'],
    taskTypes: ['nettside', 'drift'],
    availability: ['middels', 'fleksibel'],
    budgets: ['middels', 'hoy'],
    pastCase: {
      title: 'Ny nettside for et bakeri',
      client: 'Eksempel Bakeri AS (fiktiv)',
      summary: 'Fem sider, bestillingsskjema og mobiltilpasning, levert på tre uker.',
    },
    mentorId: 'm3',
  },
  {
    id: 's2',
    name: 'Kari Prototype',
    initials: 'KP',
    study: 'Industriell økonomi og teknologiledelse',
    year: '3. år',
    skills: ['Power Automate', 'Excel/Sheets', 'Zapier', 'Prosesskartlegging'],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['kort', 'middels'],
    budgets: ['lav', 'middels'],
    pastCase: {
      title: 'Automatisert fakturagrunnlag',
      client: 'Fiktiv Rørlegger Trondheim',
      summary: 'Timelister i skjema blir automatisk til fakturagrunnlag, og sparer ca. 3 timer i uka.',
    },
    mentorId: 'm2',
  },
  {
    id: 's3',
    name: 'Emil Eksempel',
    initials: 'EE',
    study: 'Datateknologi',
    year: '5. år, master',
    skills: ['Python', 'Node.js', 'Databaser', 'API-integrasjoner'],
    taskTypes: ['verktoy', 'automatisering', 'drift'],
    availability: ['middels', 'fleksibel'],
    budgets: ['middels', 'hoy'],
    pastCase: {
      title: 'Internt bookingverktøy',
      client: 'Demo Sykkelverksted (fiktiv)',
      summary: 'Enkel webapp for timebestilling og oversikt over verkstedskapasitet.',
    },
    mentorId: 'm2',
  },
  {
    id: 's4',
    name: 'Sara Skisse',
    initials: 'SS',
    study: 'Interaksjonsdesign',
    year: '3. år',
    skills: ['Figma', 'Webflow', 'Brukertesting', 'Universell utforming'],
    taskTypes: ['nettside'],
    availability: ['kort', 'middels'],
    budgets: ['lav', 'middels'],
    pastCase: {
      title: 'Nettside for frisørsalong',
      client: 'Klipp & Test (fiktiv)',
      summary: 'Ny visuell profil og nettside med timebestillingslenke, testet med fem kunder.',
    },
    mentorId: 'm3',
  },
  {
    id: 's5',
    name: 'Jonas Mockup',
    initials: 'JM',
    study: 'Informatikk',
    year: '2. år',
    skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'Google Workspace'],
    taskTypes: ['drift', 'nettside', 'automatisering'],
    availability: ['kort', 'middels', 'fleksibel'],
    budgets: ['lav'],
    pastCase: {
      title: 'Oppdatering og drift av eksisterende nettside',
      client: 'Fiktivt Regnskapskontor',
      summary: 'Oppdaterte utdaterte plugins, fikset ødelagte lenker og satte opp sikkerhetskopi.',
    },
    mentorId: 'm1',
  },
  {
    id: 's6',
    name: 'Nora Plassholder',
    initials: 'NP',
    study: 'Kybernetikk og robotikk',
    year: '4. år, master',
    skills: ['Python', 'Dataanalyse', 'Dashboards', 'Automatisering'],
    taskTypes: ['automatisering', 'verktoy'],
    availability: ['fleksibel', 'middels'],
    budgets: ['middels', 'hoy'],
    pastCase: {
      title: 'Lagerdashboard',
      client: 'Eksempel Interiør AS (fiktiv)',
      summary: 'Henter salgsdata hver natt og viser lagerstatus i et enkelt dashboard.',
    },
    mentorId: 'm1',
  },
  {
    id: 's7',
    name: 'Ahmed Utkast',
    initials: 'AU',
    study: 'Datateknologi',
    year: '3. år',
    skills: ['React', 'Next.js', 'Headless CMS', 'Ytelse'],
    taskTypes: ['nettside', 'verktoy'],
    availability: ['kort', 'fleksibel'],
    budgets: ['middels', 'hoy'],
    pastCase: {
      title: 'Menyside og arrangementskalender',
      client: 'Kafé Fiktiva (fiktiv)',
      summary: 'Ansatte oppdaterer meny og arrangementer selv, uten å gå via utvikler.',
    },
    mentorId: 'm1',
  },
]

export const forStudents = {
  intro:
    'Vi ser etter studenter som vil ha ekte, betalt erfaring med det de studerer, og som vil lære av noen som har gjort det i mange år.',
  benefits: [
    { title: 'Betalt arbeid', text: 'Fast honorar per oppdrag, avtalt før du starter.' },
    { title: 'Ekte kunder', text: 'Avgrensede oppdrag for lokale småbedrifter, med reelle krav og frister.' },
    { title: 'Mentorveiledning', text: 'En erfaren mentor følger deg og går gjennom arbeidet ditt før levering.' },
    { title: 'Portefølje og referanse', text: 'Du får et ferdig case til porteføljen og en referanse du kan bruke videre.' },
  ],
  admission: [
    { title: 'Kort søknad', text: 'Fortell hva du studerer, hva du kan og hvor mye tid du har.' },
    { title: 'Praktisk case-test', text: 'En tidsavgrenset oppgave (ca. 4 timer) som ligner et ekte kundeoppdrag.' },
    { title: 'Samtale', text: 'Vi går gjennom løsningen sammen med deg og snakker om hvordan du jobber.' },
    { title: 'Første oppdrag med tett oppfølging', text: 'Du starter med et lite oppdrag og ekstra mentorstøtte.' },
  ],
  cta: 'Vil du være med i pilotfasen? Send oss en e-post.',
}

export const testimonial = {
  quote:
    'Vi visste ikke hvor vi skulle begynne. Det at en mentor sjekket alt før vi fikk det, gjorde at vi turte å prøve.',
  author: 'Fiktiv daglig leder, Eksempel Bakeri AS',
  note: 'Illustrerende sitat, ikke fra en ekte kunde.',
}

export const footer = {
  about:
    'Studentbridge er et studentprosjekt i emnet Entreprenørskap i praksis ved NTNU. Nettsiden er en prototype som skal teste idéen. Den er ikke en aktiv tjeneste, og vi har ingen avtale om samarbeid med NTNU, Sit eller bedriftene som nevnes.',
}
