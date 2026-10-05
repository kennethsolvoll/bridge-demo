import { hero } from '../data/content'
import { CheckIcon, Container, buttonPrimary, buttonSecondary } from './ui'

export function Hero() {
  return (
    <section aria-labelledby="hero-tittel" className="bg-paper py-14 sm:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">{hero.eyebrow}</p>
          <h1
            id="hero-tittel"
            className="mt-3 text-[2.125rem] leading-tight font-semibold tracking-tight text-balance sm:text-5xl"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{hero.lead}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={hero.primaryCta.href} className={buttonPrimary}>
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className={buttonSecondary}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-8 grid gap-2 text-sm text-ink sm:grid-cols-3 sm:gap-4">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckIcon className="mt-0.5 size-4 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside aria-labelledby="eksempel-tittel" className="rounded-xl border border-line bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 id="eksempel-tittel" className="text-lg font-semibold">
              {hero.example.title}
            </h2>
            <span className="rounded bg-paper px-2 py-0.5 text-xs font-medium text-muted">{hero.example.note}</span>
          </div>
          <dl className="mt-4 divide-y divide-line">
            {hero.example.rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[6rem_1fr] gap-3 py-3 text-sm">
                <dt className="font-medium text-muted">{row.label}</dt>
                <dd className="text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </section>
  )
}
