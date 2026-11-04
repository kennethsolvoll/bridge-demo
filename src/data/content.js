// All hardkodet innhold for demo-siden.
// Alle personer, bedrifter og sitater er FIKTIVE. Prisene er EKSEMPLER.

export const site = {
  name: 'Bond',
  tagline: 'Markedsføringsstudenter fra hele Norge for scale-ups',
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
  eyebrow: 'For scale-ups i Norge',
  title: 'Markedsføring som holder tempoet ditt, levert av håndplukkede studenter og kvalitetssikret av erfarne mentorer.',
  lead:
    'Bond kobler scale-ups med markedsføringsstudenter fra hele landet. De hjelper med sosiale medier, kampanjer, innhold og merkevare, i avgrensede oppdrag med fast pris. En erfaren mentor går gjennom alt før det publiseres.',
  primaryCta: { href: '#matching', label: 'Beskriv oppdraget ditt' },
  secondaryCta: { href: '#for-studenter', label: 'Jeg er student' },
  points: [
    'Fast pris per oppdrag, ikke timepris',
    'Mentor godkjenner alt før publisering',
    'Studenter fra hele Norge, digitalt samarbeid',
  ],
}

export const steps = [
  {
    title: 'Beskriv behovet',
    text: 'Fortell kort hva dere vil oppnå, for eksempel flere leads, en lansering eller en tydeligere merkevare. Legg til tidsramme og budsjett. En halvferdig brief er helt greit.',
  },
  {
    title: 'Vi matcher',
    text: 'Vi velger selv riktig student ut fra fagfelt, tidligere case og kapasitet, uansett hvor i landet de studerer. Dere får fast pris og et tydelig omfang før arbeidet starter.',
  },
  {
    title: 'Mentor kvalitetssikrer og leverer',
    text: 'Studenten jobber digitalt med faste avsjekker. En erfaren markedsfører godkjenner innhold og kampanjer før noe publiseres, og dere får en kort rapport på resultatene.',
  },
]

export const quality = {
  intro:
    'Merkevaren er for viktig til å prøve og feile med. Derfor bygger vi kvaliteten inn i tre ledd, ikke bare i én samtale.',
  pillars: [
    {
      title: 'Opptak med praktisk case-test',
      text: 'Studentene velges ut gjennom en tidsavgrenset markedsbrief som ligner et ekte kundeoppdrag, ikke bare på CV og karakterer. Vi ser på idé, målgruppeforståelse, gjennomføring og hvordan de begrunner valgene.',
    },
    {
      title: 'Mentorgjennomgang før publisering',
      text: 'Alt som skal ut gjennomgås av en erfaren markedsfører etter en fast sjekkliste: tone of voice og merkevare, målgruppe, merking av reklame og markedsføringsloven, universell utforming og måltall.',
    },
    {
      title: 'Ingenting står og faller på én student',
      text: 'Kontoer, merkevaremateriell, innholdsbibliotek og kampanjeoppsett eies alltid av bedriften. Med løpende avtale tar en annen student eller mentoren over hvis den opprinnelige studenten ikke er tilgjengelig.',
    },
  ],
  guarantee: {
    title: 'Hvis noe ikke holder mål',
    items: [
      'Mentoren stopper innholdet og ber om retting før bedriften ser det.',
      'Avvik fra det avtalte rettes uten ekstra kostnad.',
      'Blir oppdraget likevel ikke levert som avtalt, setter vi inn en ny student, eller pengene tilbakebetales for den delen som ikke er levert.',
    ],
    note: 'Vilkårene over er et forslag vi tester i prosjektet, ikke en bindende avtale.',
  },
}

export const packages = [
  {
    id: 'innhold',
    name: 'Innholdsmåned',
    price: 'kr 14 000',
    priceNote: 'fast pris, eks. mva.',
    idealFor: 'Scale-ups som vil være synlige i sosiale medier, men mangler kapasitet.',
    includes: [
      'Innholdsplan for én måned på to kanaler',
      '12 innlegg og 4 korte videoer',
      'Tekst, foto og redigering i deres tone of voice',
      'Publisering og enkel oppfølging av kommentarer',
      'Mentorgodkjenning før publisering',
    ],
    deliveryTime: '1 måned',
  },
  {
    id: 'kampanje',
    name: 'Kampanjesprint',
    price: 'kr 24 000',
    priceNote: 'fast pris, eks. mva. og annonsebudsjett',
    idealFor: 'Lanseringer, rekruttering eller en konkret vekstmålsetting.',
    includes: [
      'Kampanjekonsept med budskap og målgrupper',
      'Annonsemateriell for Meta og LinkedIn',
      'Oppsett, A/B-testing og løpende justering',
      'Sluttrapport med resultater og anbefalinger',
      'Mentorgjennomgang av konsept og annonser',
    ],
    deliveryTime: 'ca. 4 uker',
    highlighted: true,
  },
  {
    id: 'lopende',
    name: 'Løpende markedsteam',
    price: 'kr 9 900',
    priceNote: 'per måned, eks. mva.',
    idealFor: 'Alle som vil ha kontinuitet etter første oppdrag.',
    includes: [
      'Fast student med inntil 15 timer per måned',
      'Månedlig rapport og prioriteringsmøte',
      'Mentor følger med i bakhånd',
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
    { value: 'sosiale-medier', label: 'Sosiale medier' },
    { value: 'kampanje', label: 'Kampanje og annonsering' },
    { value: 'innhold', label: 'Innhold (foto, video, tekst)' },
    { value: 'merkevare', label: 'Merkevare og branding' },
  ],
  timeframes: [
    { value: 'kort', label: 'Innen 2 uker' },
    { value: 'middels', label: 'Innen 1 måned' },
    { value: 'fleksibel', label: 'Fleksibelt' },
  ],
  budgets: [
    { value: 'lav', label: 'Under kr 20 000' },
    { value: 'middels', label: 'kr 20 000–50 000' },
    { value: 'hoy', label: 'Over kr 50 000' },
  ],
}

export const mentors = [
  { id: 'm1', name: 'Mentor Mari Eksempelsen', role: 'Fiktiv markedsdirektør, 14 års erfaring' },
  { id: 'm2', name: 'Mentor Per Prøvesen', role: 'Fiktiv performance-markedsfører, 10 års erfaring' },
  { id: 'm3', name: 'Mentor Ida Demostad', role: 'Fiktiv merkevarestrateg og tekstforfatter' },
]

// taskTypes: hvilke oppdragstyper studenten passer til (første = sterkest)
// availability: hvilke tidsrammer studenten har kapasitet til
// budgets: hvilke budsjettnivåer studenten typisk jobber innenfor
export const students = [
  {
    id: 's1',
    name: 'Ola Testmann',
    initials: 'OT',
    study: 'Markedsføring og merkevareledelse',
    year: '3. år, bachelor',
    location: 'Oslo',
    skills: ['Instagram', 'TikTok', 'Innholdsplanlegging', 'Community management'],
    taskTypes: ['sosiale-medier', 'innhold'],
    availability: ['kort', 'middels', 'fleksibel'],
    budgets: ['lav', 'middels'],
    pastCase: {
      title: 'Sosiale medier for en treningsapp',
      client: 'Eksempel Fitness AS (fiktiv)',
      summary: 'Ny innholdsplan og ukentlige reels. Engasjementet ble tredoblet på tre måneder.',
    },
    mentorId: 'm1',
  },
  {
    id: 's2',
    name: 'Kari Prototype',
    initials: 'KP',
    study: 'Digital markedsføring',
    year: '2. år, master',
    location: 'Bergen',
    skills: ['Meta Ads', 'LinkedIn Ads', 'Google Analytics', 'A/B-testing'],
    taskTypes: ['kampanje', 'sosiale-medier'],
    availability: ['kort', 'middels'],
    budgets: ['middels', 'hoy'],
    pastCase: {
      title: 'Leadkampanje for B2B-programvare',
      client: 'Fiktiv SaaS AS',
      summary: 'LinkedIn-kampanje som ga 140 kvalifiserte leads til 40 % lavere kostnad per lead.',
    },
    mentorId: 'm2',
  },
  {
    id: 's3',
    name: 'Emil Eksempel',
    initials: 'EE',
    study: 'Kreativ kommunikasjon',
    year: '3. år, bachelor',
    location: 'Trondheim',
    skills: ['Videoproduksjon', 'Premiere Pro', 'Foto', 'Storytelling'],
    taskTypes: ['innhold', 'kampanje'],
    availability: ['middels', 'fleksibel'],
    budgets: ['lav', 'middels'],
    pastCase: {
      title: 'Rekrutteringsfilmer',
      client: 'Demo Energi AS (fiktiv)',
      summary: 'Tre korte filmer om arbeidshverdagen, brukt i en rekrutteringskampanje.',
    },
    mentorId: 'm3',
  },
  {
    id: 's4',
    name: 'Sara Skisse',
    initials: 'SS',
    study: 'Merkevarebygging og design',
    year: '2. år, master',
    location: 'Oslo',
    skills: ['Merkevarestrategi', 'Visuell identitet', 'Figma', 'Tone of voice'],
    taskTypes: ['merkevare', 'innhold'],
    availability: ['middels', 'fleksibel'],
    budgets: ['middels', 'hoy'],
    pastCase: {
      title: 'Ny merkevareplattform',
      client: 'Eksempel Mat AS (fiktiv)',
      summary: 'Posisjonering, tone of voice og visuell retning før en internasjonal lansering.',
    },
    mentorId: 'm3',
  },
  {
    id: 's5',
    name: 'Jonas Mockup',
    initials: 'JM',
    study: 'Økonomi og administrasjon, markedsføring',
    year: '2. år, bachelor',
    location: 'Kristiansand',
    skills: ['Canva', 'LinkedIn', 'Copywriting', 'Nyhetsbrev'],
    taskTypes: ['sosiale-medier', 'innhold'],
    availability: ['kort', 'middels', 'fleksibel'],
    budgets: ['lav'],
    pastCase: {
      title: 'LinkedIn for gründerteam',
      client: 'Fiktiv Klimatech AS',
      summary: 'Ukentlige innlegg for daglig leder og selskapsside. Antall følgere doblet seg på et halvår.',
    },
    mentorId: 'm1',
  },
  {
    id: 's6',
    name: 'Nora Plassholder',
    initials: 'NP',
    study: 'Markedsføring og analyse',
    year: '1. år, master',
    location: 'Bergen',
    skills: ['Google Ads', 'SEO', 'Looker Studio', 'Konverteringsoptimalisering'],
    taskTypes: ['kampanje', 'merkevare'],
    availability: ['fleksibel', 'middels'],
    budgets: ['middels', 'hoy'],
    pastCase: {
      title: 'Søkemotorkampanje for nettbutikk',
      client: 'Eksempel Interiør AS (fiktiv)',
      summary: 'Ny kontostruktur og landingssider. Salget fra søk økte med 35 %.',
    },
    mentorId: 'm2',
  },
  {
    id: 's7',
    name: 'Ahmed Utkast',
    initials: 'AU',
    study: 'Kommunikasjon og PR',
    year: '3. år, bachelor',
    location: 'Trondheim',
    skills: ['PR', 'Pressemeldinger', 'Influencer-samarbeid', 'Lanseringsplaner'],
    taskTypes: ['merkevare', 'kampanje'],
    availability: ['kort', 'fleksibel'],
    budgets: ['lav', 'middels'],
    pastCase: {
      title: 'Lansering av ny tjeneste',
      client: 'Kafé Fiktiva Gruppen (fiktiv)',
      summary: 'Lanseringsplan med pressemelding og tre influencer-samarbeid som ga omtale i lokalpressen.',
    },
    mentorId: 'm1',
  },
]

export const forStudents = {
  intro:
    'Vi ser etter markedsføringsstudenter i hele Norge som vil ha ekte, betalt erfaring, og som vil lære av folk som har gjort det i mange år. Alt arbeid kan gjøres digitalt, uansett hvor du studerer.',
  benefits: [
    { title: 'Betalt arbeid', text: 'Fast honorar per oppdrag, avtalt før du starter.' },
    { title: 'Ekte scale-ups', text: 'Avgrensede oppdrag for selskaper i vekst, med reelle mål, budsjetter og frister.' },
    { title: 'Mentorveiledning', text: 'En erfaren markedsfører følger deg og gir tilbakemelding før noe publiseres.' },
    { title: 'Portefølje og referanse', text: 'Du får case med resultater til porteføljen og en referanse du kan bruke videre.' },
  ],
  admission: [
    { title: 'Kort søknad', text: 'Fortell hva du studerer, hva du er god på og hvor mye tid du har.' },
    { title: 'Praktisk case-test', text: 'En tidsavgrenset markedsbrief (ca. 4 timer) som ligner et ekte kundeoppdrag.' },
    { title: 'Samtale', text: 'Vi går gjennom løsningen din digitalt og snakker om hvordan du jobber.' },
    { title: 'Første oppdrag med tett oppfølging', text: 'Du starter med et lite oppdrag og ekstra mentorstøtte.' },
  ],
  cta: 'Vil du være med i pilotfasen? Send oss en e-post.',
}

export const testimonial = {
  quote:
    'Vi vokste raskere enn markedsavdelingen. At en erfaren mentor godkjente alt før det gikk ut, gjorde at vi turte å slippe til studentene.',
  author: 'Fiktiv markedssjef, Eksempel Tech AS',
  note: 'Illustrerende sitat, ikke fra en ekte kunde.',
}

export const footer = {
  about:
    'Bond er et studentprosjekt i emnet Entreprenørskap i praksis ved NTNU. Nettsiden er en prototype som skal teste idéen. Den er ikke en aktiv tjeneste, og vi har ingen avtale om samarbeid med NTNU, andre utdanningsinstitusjoner eller bedriftene som nevnes.',
}
