# Bridge – demo-nettside

Prototype for et studentprosjekt i emnet **Entreprenørskap i praksis** ved NTNU.
Bridge kobler kvalitetssikrede studenter med småbedrifter i Trondheim for betalte, avgrensede
oppdrag innen web og digitalisering.

> Siden er kun en demo. Alle personer, bedrifter, sitater og priser er fiktive, og det finnes ingen backend.

**Live demo:** https://kennethsolvoll.github.io/bridge-demo/ (engelsk: https://kennethsolvoll.github.io/bridge-demo/?lang=en)

## Teknologi

- [Vite](https://vite.dev) + React + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Ingen backend. All data ligger i [`src/data/content.ts`](src/data/content.ts)

## Kom i gang

Krever Node.js 20.19+ eller 22+.

```bash
npm install
npm run dev
```

Åpne adressen som vises i terminalen (vanligvis http://localhost:5173).

| Kommando          | Hva den gjør                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Utviklingsserver med automatisk oppdatering |
| `npm run build`   | Typesjekk og produksjonsbygg til `dist/`    |
| `npm run preview` | Kjør det ferdige bygget lokalt              |
| `npm run lint`    | Lint med oxlint                             |

## Endre innhold

Tekster, pakker, priser, studentprofiler og mentorer ligger i `src/data/content.ts`.
Matchelogikken i demoen ligger i `src/lib/matching.ts`: oppdragstype er et krav, og deretter
gir tidsramme og budsjett poeng. Kontakt-e-posten (`site.contactEmail`) er en plassholder,
så bytt den ut med deres egen adresse.

## Språk (norsk/engelsk)

Siden finnes på norsk bokmål og engelsk, og man bytter med **NO/EN**-knappene i toppmenyen.

- Hver tekst skrives med begge språk side om side: `{ nb: '…', en: '…' }`. TypeScript gir feil
  hvis et språk mangler. Tekst som er lik på begge språk (navn, «React») kan være en vanlig streng.
- Maler med `{plassholdere}` fylles ut med `fill()` fra `src/i18n/context.ts`.
- Valgt språk lagres i nettleseren og legges i URL-en som `?lang=en`, så en lenke kan deles
  direkte på engelsk. Norsk er standard.

## Struktur

```
src/
  data/content.ts      All hardkodet data og alle tekster (nb + en)
  i18n/                Språkkontekst, useLocale()-hook og LocaleProvider
  lib/matching.ts      Enkel, språknøytral matchefunksjon for demoen
  components/          Én komponent per seksjon + felles UI (ui.tsx)
  types.ts             Datamodell
```

## Deploy

Bygget er helt statisk (`dist/`) og bruker relative stier (`base: './'` i `vite.config.ts`),
så det fungerer både på rotdomene og under en understi.

### Vercel

1. Push repoet til GitHub.
2. Velg «Add New → Project» i Vercel og importer repoet.
3. Vercel gjenkjenner Vite automatisk (build: `npm run build`, output: `dist`). Trykk «Deploy».

Alternativt fra terminalen: `npx vercel` (og `npx vercel --prod` for produksjons-URL).

### GitHub Pages

Repoet har en ferdig workflow i `.github/workflows/deploy.yml`.

1. Push repoet til GitHub.
2. Gå til **Settings → Pages** og velg **Source: GitHub Actions**.
3. Workflowen kjører ved hver push til `main` (eller manuelt under **Actions**). Siden publiseres på
   `https://<brukernavn>.github.io/<repo-navn>/`.

## Universell utforming

- Semantisk HTML med landemerker, logisk overskriftshierarki og `lang` som følger valgt språk
- «Hopp til innhold»-lenke, synlige fokusmarkeringer og full tastaturnavigasjon
- Skjemaet bruker `fieldset`/`legend`, og resultatene annonseres med `aria-live`
- Tekstfarger med minst 4,5:1 kontrast, og informasjon formidles ikke kun med farge
- Respekterer `prefers-reduced-motion`
