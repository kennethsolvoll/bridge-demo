# Bond – demo

Demo-nettside for et studentprosjekt i emnet **Entreprenørskap i praksis** ved NTNU. Bond kobler håndplukkede markedsføringsstudenter fra hele Norge med scale-ups som trenger hjelp med sosiale medier, kampanjer, innhold og merkevare. Siden viser idéen til medstudenter, foreleser og potensielle samarbeidspartnere.

> Siden er en prototype og skal ikke i produksjon. Alle personer, bedrifter, sitater og priser er fiktive, og vi har ingen avtale om samarbeid med NTNU, andre utdanningsinstitusjoner eller noen bedrift.

**Stack:** Vite + React + Tailwind CSS v4. Det er ingen backend.

## Kjøre lokalt

Krever Node 20 eller nyere.

```bash
npm install
npm run dev      # utviklingsserver på http://localhost:5173
npm run build    # produksjonsbygg til dist/
npm run preview  # forhåndsvis bygget
```

## Endre innhold

All tekst og data ligger i **`src/data/content.js`**: navn, kontakt-e-post, pakker og priser, fiktive studenter og mentorer, og tekstene i hver seksjon. Kontakt-e-posten er en plassholder (`kontakt@example.no`) som må byttes.

Matching-logikken ligger i `src/lib/match.js`. Den gir hver student poeng for oppdragstype, tidsramme og budsjett, og viser de tre beste.

## Deploy

### Vercel (enklest)

1. Push repoet til GitHub.
2. Velg «Add New → Project» på vercel.com og importer repoet.
3. Vercel oppdager Vite automatisk (build: `npm run build`, output: `dist`). Trykk Deploy.

Det trengs ingen ekstra konfigurasjon.

### GitHub Pages

Workflowen ligger i `.github/workflows/deploy-pages.yml` og kjører ved push til `main`.

1. Push repoet til GitHub.
2. Gå til **Settings → Pages → Build and deployment → Source** og velg **GitHub Actions**.
3. Push til `main`, eller kjør workflowen manuelt under **Actions**.

Siden havner på `https://<bruker>.github.io/<repo>/`. Workflowen setter `BASE_PATH=/<repo>/` automatisk, så stiene blir riktige. For å teste Pages-bygget lokalt:

```bash
BASE_PATH=/<repo-navn>/ npm run build
```

## Struktur

```
src/
  data/content.js          all hardkodet data
  lib/match.js             matching-logikk for demoen
  components/              én komponent per seksjon (Logo.jsx = Bond-logoen som SVG)
  App.jsx                  setter sammen siden
```

## Universell utforming

Siden har:

- semantiske landemerker
- «hopp til hovedinnhold»-lenke
- synlig fokusmarkering
- skjema med `fieldset`/`legend`
- fokus som flyttes til resultatene etter matching
- kontrast på minst WCAG AA

Den respekterer også `prefers-reduced-motion` og fungerer fullt ut med tastatur.
