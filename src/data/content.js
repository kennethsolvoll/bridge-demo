// All hardkodet innhold for demo-siden, på norsk bokmål (nb) og engelsk (en).
// Alle personer, bedrifter og sitater er FIKTIVE. Prisene er EKSEMPLER.
//
// Matching-data (oppdragstyper, kapasitet, budsjett, mentor) er felles for begge
// språk og ligger i `studentBase`. Kun tekst oversettes.

export const languages = [
  { code: 'nb', label: 'Norsk', short: 'NO' },
  { code: 'en', label: 'English', short: 'EN' },
]

const contactEmail = 'kontakt@example.no'

const studentBase = [
  { id: 's1', name: 'Ola Testmann', initials: 'OT', taskTypes: ['sosiale-medier', 'innhold'], availability: ['kort', 'middels', 'fleksibel'], budgets: ['lav', 'middels'], mentorId: 'm1' },
  { id: 's2', name: 'Kari Prototype', initials: 'KP', taskTypes: ['kampanje', 'sosiale-medier'], availability: ['kort', 'middels'], budgets: ['middels', 'hoy'], mentorId: 'm2' },
  { id: 's3', name: 'Emil Eksempel', initials: 'EE', taskTypes: ['innhold', 'kampanje'], availability: ['middels', 'fleksibel'], budgets: ['lav', 'middels'], mentorId: 'm3' },
  { id: 's4', name: 'Sara Skisse', initials: 'SS', taskTypes: ['merkevare', 'innhold'], availability: ['middels', 'fleksibel'], budgets: ['middels', 'hoy'], mentorId: 'm3' },
  { id: 's5', name: 'Jonas Mockup', initials: 'JM', taskTypes: ['sosiale-medier', 'innhold'], availability: ['kort', 'middels', 'fleksibel'], budgets: ['lav'], mentorId: 'm1' },
  { id: 's6', name: 'Nora Plassholder', initials: 'NP', taskTypes: ['kampanje', 'merkevare'], availability: ['fleksibel', 'middels'], budgets: ['middels', 'hoy'], mentorId: 'm2' },
  { id: 's7', name: 'Ahmed Utkast', initials: 'AU', taskTypes: ['merkevare', 'kampanje'], availability: ['kort', 'fleksibel'], budgets: ['lav', 'middels'], mentorId: 'm1' },
]

const mentorBase = [
  { id: 'm1', name: 'Mari Eksempelsen' },
  { id: 'm2', name: 'Per Prøvesen' },
  { id: 'm3', name: 'Ida Demostad' },
]

// Slår sammen felles data med oversatt tekst (nøkkel = id).
const withText = (base, text) => base.map((item) => ({ ...item, ...text[item.id] }))

const nb = {
  meta: {
    title: 'Bond – demo',
    description:
      'Bond (demo): håndplukkede markedsføringsstudenter fra hele Norge for scale-ups – sosiale medier, kampanjer, innhold og merkevare. Studentprosjekt – prototype.',
  },
  site: {
    name: 'Bond',
    contactEmail,
    demoNotice:
      'Demo/prototype fra et studentprosjekt. Alle personer, bedrifter, sitater og priser er fiktive eksempler.',
  },
  ui: {
    skipLink: 'Hopp til hovedinnhold',
    demoLabel: 'Prototype:',
    demoBadge: 'demo',
    noticeLabel: 'Demo-merking',
    navLabel: 'Hovedmeny',
    menuOpen: 'Meny',
    menuClose: 'Lukk meny',
    languageLabel: 'Språk',
    heroPointsLabel: 'Kort fortalt',
    step: 'Steg',
    quote: (text) => `«${text}»`,
  },
  nav: [
    { href: '#slik-fungerer-det', label: 'Slik fungerer det' },
    { href: '#kvalitet', label: 'Kvalitet' },
    { href: '#pakker', label: 'Pakker' },
    { href: '#matching', label: 'Prøv matching' },
    { href: '#for-studenter', label: 'For studenter' },
  ],
  hero: {
    eyebrow: 'For scale-ups i Norge',
    title:
      'Markedsføring som holder tempoet ditt, levert av håndplukkede studenter og kvalitetssikret av erfarne mentorer.',
    lead:
      'Bond kobler scale-ups med markedsføringsstudenter fra hele landet. De hjelper med sosiale medier, kampanjer, innhold og merkevare, i avgrensede oppdrag med fast pris. En erfaren mentor går gjennom alt før det publiseres.',
    primaryCta: { href: '#matching', label: 'Beskriv oppdraget ditt' },
    secondaryCta: { href: '#for-studenter', label: 'Jeg er student' },
    points: [
      'Fast pris per oppdrag, ikke timepris',
      'Mentor godkjenner alt før publisering',
      'Studenter fra hele Norge, digitalt samarbeid',
    ],
  },
  howItWorks: {
    eyebrow: 'For bedrifter',
    title: 'Slik fungerer det',
    intro: 'Tre steg fra behov til ferdig leveranse. Vi tar oss av matchingen og kvalitetskontrollen.',
    steps: [
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
    ],
  },
  quality: {
    eyebrow: 'Kvalitet',
    title: 'Hvorfor dere kan stole på leveransen',
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
  },
  testimonial: {
    quote:
      'Vi vokste raskere enn markedsavdelingen. At en erfaren mentor godkjente alt før det gikk ut, gjorde at vi turte å slippe til studentene.',
    author: 'Fiktiv markedssjef, Eksempel Tech AS',
    note: 'Illustrerende sitat, ikke fra en ekte kunde.',
  },
  packagesSection: {
    eyebrow: 'Pakker',
    title: 'Faste priser, avtalt på forhånd',
    intro: 'Dere vet hva det koster før arbeidet starter. Ingen timelister og ingen overraskelser.',
    disclaimer: 'Alle priser er eksempler laget for å teste idéen. De er ikke et tilbud.',
    examplePriceSr: 'Eksempelpris.',
    deliveryLabel: 'Leveringstid',
  },
  packages: [
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
  ],
  match: {
    eyebrow: 'Prøv selv',
    title: 'Beskriv oppdraget ditt',
    intro:
      'Velg hva dere trenger, så viser vi hvilke studenter vi kunne foreslått. I en ekte tjeneste gjør vi matchingen manuelt. Dette er bare en illustrasjon.',
    legends: { taskType: 'Type oppdrag', timeframe: 'Tidsramme', budget: 'Budsjett' },
    options: {
      taskType: [
        { value: 'sosiale-medier', label: 'Sosiale medier' },
        { value: 'kampanje', label: 'Kampanje og annonsering' },
        { value: 'innhold', label: 'Innhold (foto, video, tekst)' },
        { value: 'merkevare', label: 'Merkevare og branding' },
      ],
      timeframe: [
        { value: 'kort', label: 'Innen 2 uker' },
        { value: 'middels', label: 'Innen 1 måned' },
        { value: 'fleksibel', label: 'Fleksibelt' },
      ],
      budget: [
        { value: 'lav', label: 'Under kr 20 000' },
        { value: 'middels', label: 'kr 20 000–50 000' },
        { value: 'hoy', label: 'Over kr 50 000' },
      ],
    },
    descriptionLabel: 'Kort beskrivelse',
    optional: '(valgfritt)',
    placeholder: 'F.eks. «Vi lanserer i Sverige i mars og trenger en kampanje på LinkedIn.»',
    error: 'Velg type oppdrag, tidsramme og budsjett for å se forslag.',
    submit: 'Vis forslag',
    reset: 'Nullstill',
    note: 'Ingenting sendes eller lagres. Alle profiler er fiktive.',
    empty: 'Foreslåtte studenter vises her når du har gjort valgene dine.',
    resultsHeading: (n) => `${n} foreslåtte studenter`,
    reasons: {
      taskPrimary: 'Hovedfelt er denne typen oppdrag',
      task: 'Har erfaring med denne typen oppdrag',
      time: 'Har kapasitet innenfor tidsrammen',
      budget: 'Passer budsjettnivået',
    },
    card: {
      fictional: '(fiktiv)',
      location: (city) => `Studerer i ${city}, jobber digitalt`,
      skills: 'Ferdigheter',
      pastCase: 'Tidligere case',
      clientPrefix: 'for',
      mentor: 'Mentor',
      why: 'Hvorfor dette forslaget',
    },
  },
  mentors: withText(mentorBase, {
    m1: { role: 'Fiktiv markedsdirektør, 14 års erfaring' },
    m2: { role: 'Fiktiv performance-markedsfører, 10 års erfaring' },
    m3: { role: 'Fiktiv merkevarestrateg og tekstforfatter' },
  }),
  students: withText(studentBase, {
    s1: {
      study: 'Markedsføring og merkevareledelse', year: '3. år, bachelor', location: 'Oslo',
      skills: ['Instagram', 'TikTok', 'Innholdsplanlegging', 'Community management'],
      pastCase: { title: 'Sosiale medier for en treningsapp', client: 'Eksempel Fitness AS (fiktiv)', summary: 'Ny innholdsplan og ukentlige reels. Engasjementet ble tredoblet på tre måneder.' },
    },
    s2: {
      study: 'Digital markedsføring', year: '2. år, master', location: 'Bergen',
      skills: ['Meta Ads', 'LinkedIn Ads', 'Google Analytics', 'A/B-testing'],
      pastCase: { title: 'Leadkampanje for B2B-programvare', client: 'Fiktiv SaaS AS', summary: 'LinkedIn-kampanje som ga 140 kvalifiserte leads til 40 % lavere kostnad per lead.' },
    },
    s3: {
      study: 'Kreativ kommunikasjon', year: '3. år, bachelor', location: 'Trondheim',
      skills: ['Videoproduksjon', 'Premiere Pro', 'Foto', 'Storytelling'],
      pastCase: { title: 'Rekrutteringsfilmer', client: 'Demo Energi AS (fiktiv)', summary: 'Tre korte filmer om arbeidshverdagen, brukt i en rekrutteringskampanje.' },
    },
    s4: {
      study: 'Merkevarebygging og design', year: '2. år, master', location: 'Oslo',
      skills: ['Merkevarestrategi', 'Visuell identitet', 'Figma', 'Tone of voice'],
      pastCase: { title: 'Ny merkevareplattform', client: 'Eksempel Mat AS (fiktiv)', summary: 'Posisjonering, tone of voice og visuell retning før en internasjonal lansering.' },
    },
    s5: {
      study: 'Økonomi og administrasjon, markedsføring', year: '2. år, bachelor', location: 'Kristiansand',
      skills: ['Canva', 'LinkedIn', 'Copywriting', 'Nyhetsbrev'],
      pastCase: { title: 'LinkedIn for gründerteam', client: 'Fiktiv Klimatech AS', summary: 'Ukentlige innlegg for daglig leder og selskapsside. Antall følgere doblet seg på et halvår.' },
    },
    s6: {
      study: 'Markedsføring og analyse', year: '1. år, master', location: 'Bergen',
      skills: ['Google Ads', 'SEO', 'Looker Studio', 'Konverteringsoptimalisering'],
      pastCase: { title: 'Søkemotorkampanje for nettbutikk', client: 'Eksempel Interiør AS (fiktiv)', summary: 'Ny kontostruktur og landingssider. Salget fra søk økte med 35 %.' },
    },
    s7: {
      study: 'Kommunikasjon og PR', year: '3. år, bachelor', location: 'Trondheim',
      skills: ['PR', 'Pressemeldinger', 'Influencer-samarbeid', 'Lanseringsplaner'],
      pastCase: { title: 'Lansering av ny tjeneste', client: 'Kafé Fiktiva Gruppen (fiktiv)', summary: 'Lanseringsplan med pressemelding og tre influencer-samarbeid som ga omtale i lokalpressen.' },
    },
  }),
  forStudents: {
    eyebrow: 'For studenter',
    title: 'Betalt, ekte erfaring med mentor',
    intro:
      'Vi ser etter markedsføringsstudenter i hele Norge som vil ha ekte, betalt erfaring, og som vil lære av folk som har gjort det i mange år. Alt arbeid kan gjøres digitalt, uansett hvor du studerer.',
    benefitsTitle: 'Dette får du',
    benefits: [
      { title: 'Betalt arbeid', text: 'Fast honorar per oppdrag, avtalt før du starter.' },
      { title: 'Ekte scale-ups', text: 'Avgrensede oppdrag for selskaper i vekst, med reelle mål, budsjetter og frister.' },
      { title: 'Mentorveiledning', text: 'En erfaren markedsfører følger deg og gir tilbakemelding før noe publiseres.' },
      { title: 'Portefølje og referanse', text: 'Du får case med resultater til porteføljen og en referanse du kan bruke videre.' },
    ],
    admissionTitle: 'Slik fungerer opptaket',
    admission: [
      { title: 'Kort søknad', text: 'Fortell hva du studerer, hva du er god på og hvor mye tid du har.' },
      { title: 'Praktisk case-test', text: 'En tidsavgrenset markedsbrief (ca. 4 timer) som ligner et ekte kundeoppdrag.' },
      { title: 'Samtale', text: 'Vi går gjennom løsningen din digitalt og snakker om hvordan du jobber.' },
      { title: 'Første oppdrag med tett oppfølging', text: 'Du starter med et lite oppdrag og ekstra mentorstøtte.' },
    ],
    cta: 'Vil du være med i pilotfasen? Send oss en e-post.',
    ctaButton: 'Send e-post',
    emailSubject: 'Student – pilot',
  },
  footer: {
    aboutTitle: 'Om prosjektet',
    about:
      'Bond er et studentprosjekt i emnet Entreprenørskap i praksis ved NTNU. Nettsiden er en prototype som skal teste idéen. Den er ikke en aktiv tjeneste, og vi har ingen avtale om samarbeid med NTNU, andre utdanningsinstitusjoner eller bedriftene som nevnes.',
    contactTitle: 'Kontakt',
    bottom: 'Prototype. Ikke en aktiv tjeneste. Alt innhold er fiktivt.',
  },
}

const en = {
  meta: {
    title: 'Bond – demo',
    description:
      'Bond (demo): hand-picked marketing students from across Norway for scale-ups – social media, campaigns, content and branding. Student project – prototype.',
  },
  site: {
    name: 'Bond',
    contactEmail,
    demoNotice:
      'Demo/prototype from a student project. All people, companies, quotes and prices are fictional examples.',
  },
  ui: {
    skipLink: 'Skip to main content',
    demoLabel: 'Prototype:',
    demoBadge: 'demo',
    noticeLabel: 'Demo notice',
    navLabel: 'Main menu',
    menuOpen: 'Menu',
    menuClose: 'Close menu',
    languageLabel: 'Language',
    heroPointsLabel: 'In short',
    step: 'Step',
    quote: (text) => `“${text}”`,
  },
  nav: [
    { href: '#slik-fungerer-det', label: 'How it works' },
    { href: '#kvalitet', label: 'Quality' },
    { href: '#pakker', label: 'Packages' },
    { href: '#matching', label: 'Try matching' },
    { href: '#for-studenter', label: 'For students' },
  ],
  hero: {
    eyebrow: 'For scale-ups in Norway',
    title:
      'Marketing that keeps up with your pace, delivered by hand-picked students and quality-checked by experienced mentors.',
    lead:
      'Bond connects scale-ups with marketing students from across Norway. They help with social media, campaigns, content and branding, in well-defined projects at a fixed price. An experienced mentor reviews everything before it goes live.',
    primaryCta: { href: '#matching', label: 'Describe your project' },
    secondaryCta: { href: '#for-studenter', label: "I'm a student" },
    points: [
      'Fixed price per project, not hourly rates',
      'A mentor approves everything before publishing',
      'Students from all over Norway, working remotely',
    ],
  },
  howItWorks: {
    eyebrow: 'For companies',
    title: 'How it works',
    intro: 'Three steps from need to finished delivery. We handle the matching and the quality control.',
    steps: [
      {
        title: 'Describe your need',
        text: 'Tell us briefly what you want to achieve, such as more leads, a launch or a clearer brand. Add a timeframe and budget. A rough brief is perfectly fine.',
      },
      {
        title: 'We match',
        text: 'We hand-pick the right student based on field, previous cases and capacity, wherever in the country they study. You get a fixed price and a clear scope before work begins.',
      },
      {
        title: 'A mentor reviews and delivers',
        text: 'The student works remotely with regular check-ins. An experienced marketer approves content and campaigns before anything is published, and you get a short report on the results.',
      },
    ],
  },
  quality: {
    eyebrow: 'Quality',
    title: 'Why you can trust the delivery',
    intro:
      'Your brand is too important for trial and error. That is why quality is built into three stages, not just a single conversation.',
    pillars: [
      {
        title: 'Admission through a practical case test',
        text: 'Students are selected through a time-boxed marketing brief that resembles a real client project, not just their CV and grades. We look at the idea, audience understanding, execution and how they justify their choices.',
      },
      {
        title: 'Mentor review before publishing',
        text: 'Everything that goes out is reviewed by an experienced marketer against a fixed checklist: tone of voice and brand, target audience, ad disclosure and Norwegian marketing law, accessibility and KPIs.',
      },
      {
        title: 'Nothing depends on a single student',
        text: 'Accounts, brand assets, content libraries and campaign setups are always owned by the company. With an ongoing plan, another student or the mentor takes over if the original student becomes unavailable.',
      },
    ],
    guarantee: {
      title: 'If something falls short',
      items: [
        'The mentor stops the content and asks for corrections before the company sees it.',
        'Deviations from what was agreed are fixed at no extra cost.',
        'If the project still is not delivered as agreed, we bring in a new student, or refund the part that was not delivered.',
      ],
      note: 'These terms are a proposal we are testing in the project, not a binding agreement.',
    },
  },
  testimonial: {
    quote:
      'We were growing faster than our marketing team. Knowing an experienced mentor approved everything before it went out gave us the confidence to let the students in.',
    author: 'Fictional head of marketing, Eksempel Tech AS',
    note: 'Illustrative quote, not from a real client.',
  },
  packagesSection: {
    eyebrow: 'Packages',
    title: 'Fixed prices, agreed up front',
    intro: 'You know the cost before work starts. No timesheets and no surprises.',
    disclaimer: 'All prices are examples made to test the idea. They are not an offer.',
    examplePriceSr: 'Example price.',
    deliveryLabel: 'Delivery time',
  },
  packages: [
    {
      id: 'innhold',
      name: 'Content month',
      price: 'NOK 14,000',
      priceNote: 'fixed price, excl. VAT',
      idealFor: 'Scale-ups that want to be visible on social media but lack capacity.',
      includes: [
        'One-month content plan for two channels',
        '12 posts and 4 short videos',
        'Copy, photo and editing in your tone of voice',
        'Publishing and basic comment follow-up',
        'Mentor approval before publishing',
      ],
      deliveryTime: '1 month',
    },
    {
      id: 'kampanje',
      name: 'Campaign sprint',
      price: 'NOK 24,000',
      priceNote: 'fixed price, excl. VAT and ad spend',
      idealFor: 'Launches, recruitment or a specific growth target.',
      includes: [
        'Campaign concept with messaging and audiences',
        'Ad creatives for Meta and LinkedIn',
        'Setup, A/B testing and ongoing optimisation',
        'Final report with results and recommendations',
        'Mentor review of concept and ads',
      ],
      deliveryTime: 'approx. 4 weeks',
      highlighted: true,
    },
    {
      id: 'lopende',
      name: 'Ongoing marketing team',
      price: 'NOK 9,900',
      priceNote: 'per month, excl. VAT',
      idealFor: 'Anyone who wants continuity after the first project.',
      includes: [
        'A dedicated student for up to 15 hours a month',
        'Monthly report and priorities meeting',
        'Mentor oversight in the background',
        'Handover if the student leaves',
        'No lock-in period',
      ],
      deliveryTime: 'ongoing',
    },
  ],
  match: {
    eyebrow: 'Try it',
    title: 'Describe your project',
    intro:
      'Choose what you need and we will show which students we might suggest. In the real service we do the matching by hand. This is only an illustration.',
    legends: { taskType: 'Type of project', timeframe: 'Timeframe', budget: 'Budget' },
    options: {
      taskType: [
        { value: 'sosiale-medier', label: 'Social media' },
        { value: 'kampanje', label: 'Campaigns and advertising' },
        { value: 'innhold', label: 'Content (photo, video, copy)' },
        { value: 'merkevare', label: 'Brand and identity' },
      ],
      timeframe: [
        { value: 'kort', label: 'Within 2 weeks' },
        { value: 'middels', label: 'Within 1 month' },
        { value: 'fleksibel', label: 'Flexible' },
      ],
      budget: [
        { value: 'lav', label: 'Under NOK 20,000' },
        { value: 'middels', label: 'NOK 20,000–50,000' },
        { value: 'hoy', label: 'Over NOK 50,000' },
      ],
    },
    descriptionLabel: 'Short description',
    optional: '(optional)',
    placeholder: 'E.g. "We are launching in Sweden in March and need a LinkedIn campaign."',
    error: 'Choose a project type, timeframe and budget to see suggestions.',
    submit: 'Show suggestions',
    reset: 'Reset',
    note: 'Nothing is sent or stored. All profiles are fictional.',
    empty: 'Suggested students will appear here once you have made your choices.',
    resultsHeading: (n) => `${n} suggested students`,
    reasons: {
      taskPrimary: 'This type of project is their main field',
      task: 'Has experience with this type of project',
      time: 'Has capacity within the timeframe',
      budget: 'Fits the budget level',
    },
    card: {
      fictional: '(fictional)',
      location: (city) => `Studies in ${city}, works remotely`,
      skills: 'Skills',
      pastCase: 'Previous case',
      clientPrefix: 'for',
      mentor: 'Mentor',
      why: 'Why this suggestion',
    },
  },
  mentors: withText(mentorBase, {
    m1: { role: 'Fictional marketing director, 14 years of experience' },
    m2: { role: 'Fictional performance marketer, 10 years of experience' },
    m3: { role: 'Fictional brand strategist and copywriter' },
  }),
  students: withText(studentBase, {
    s1: {
      study: 'Marketing and brand management', year: '3rd year, bachelor', location: 'Oslo',
      skills: ['Instagram', 'TikTok', 'Content planning', 'Community management'],
      pastCase: { title: 'Social media for a fitness app', client: 'Eksempel Fitness AS (fictional)', summary: 'New content plan and weekly reels. Engagement tripled in three months.' },
    },
    s2: {
      study: 'Digital marketing', year: '2nd year, master', location: 'Bergen',
      skills: ['Meta Ads', 'LinkedIn Ads', 'Google Analytics', 'A/B testing'],
      pastCase: { title: 'Lead campaign for B2B software', client: 'Fiktiv SaaS AS (fictional)', summary: 'LinkedIn campaign that generated 140 qualified leads at a 40% lower cost per lead.' },
    },
    s3: {
      study: 'Creative communication', year: '3rd year, bachelor', location: 'Trondheim',
      skills: ['Video production', 'Premiere Pro', 'Photography', 'Storytelling'],
      pastCase: { title: 'Recruitment films', client: 'Demo Energi AS (fictional)', summary: 'Three short films about everyday work, used in a recruitment campaign.' },
    },
    s4: {
      study: 'Brand building and design', year: '2nd year, master', location: 'Oslo',
      skills: ['Brand strategy', 'Visual identity', 'Figma', 'Tone of voice'],
      pastCase: { title: 'New brand platform', client: 'Eksempel Mat AS (fictional)', summary: 'Positioning, tone of voice and visual direction ahead of an international launch.' },
    },
    s5: {
      study: 'Business administration, marketing', year: '2nd year, bachelor', location: 'Kristiansand',
      skills: ['Canva', 'LinkedIn', 'Copywriting', 'Newsletters'],
      pastCase: { title: 'LinkedIn for a founding team', client: 'Fiktiv Klimatech AS (fictional)', summary: 'Weekly posts for the CEO and company page. Followers doubled in six months.' },
    },
    s6: {
      study: 'Marketing and analytics', year: '1st year, master', location: 'Bergen',
      skills: ['Google Ads', 'SEO', 'Looker Studio', 'Conversion optimisation'],
      pastCase: { title: 'Search campaign for an online store', client: 'Eksempel Interiør AS (fictional)', summary: 'New account structure and landing pages. Revenue from search grew by 35%.' },
    },
    s7: {
      study: 'Communication and PR', year: '3rd year, bachelor', location: 'Trondheim',
      skills: ['PR', 'Press releases', 'Influencer partnerships', 'Launch planning'],
      pastCase: { title: 'Launch of a new service', client: 'Kafé Fiktiva Gruppen (fictional)', summary: 'Launch plan with a press release and three influencer partnerships that earned local press coverage.' },
    },
  }),
  forStudents: {
    eyebrow: 'For students',
    title: 'Paid, real-world experience with a mentor',
    intro:
      'We are looking for marketing students across Norway who want real, paid experience and want to learn from people who have done it for years. All work can be done remotely, wherever you study.',
    benefitsTitle: 'What you get',
    benefits: [
      { title: 'Paid work', text: 'A fixed fee per project, agreed before you start.' },
      { title: 'Real scale-ups', text: 'Well-defined projects for growing companies, with real goals, budgets and deadlines.' },
      { title: 'Mentoring', text: 'An experienced marketer guides you and gives feedback before anything is published.' },
      { title: 'Portfolio and reference', text: 'You get cases with results for your portfolio and a reference you can use later.' },
    ],
    admissionTitle: 'How admission works',
    admission: [
      { title: 'Short application', text: 'Tell us what you study, what you are good at and how much time you have.' },
      { title: 'Practical case test', text: 'A time-boxed marketing brief (about 4 hours) that resembles a real client project.' },
      { title: 'Interview', text: 'We go through your solution with you online and talk about how you work.' },
      { title: 'First project with close follow-up', text: 'You start with a small project and extra mentor support.' },
    ],
    cta: 'Want to join the pilot phase? Send us an email.',
    ctaButton: 'Send email',
    emailSubject: 'Student – pilot',
  },
  footer: {
    aboutTitle: 'About the project',
    about:
      'Bond is a student project in the course Entreprenørskap i praksis (Entrepreneurship in Practice) at NTNU. This website is a prototype for testing the idea. It is not a live service, and we have no partnership agreement with NTNU, other educational institutions or the companies mentioned.',
    contactTitle: 'Contact',
    bottom: 'Prototype. Not a live service. All content is fictional.',
  },
}

export const content = { nb, en }
