import { hero } from '../data/content.js'
import { ButtonLink } from './Button.jsx'

export default function Hero() {
  return (
    <section aria-labelledby="hero-tittel" className="bg-paper pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{hero.eyebrow}</p>
        <h1 id="hero-tittel" className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{hero.lead}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-3 text-sm sm:grid-cols-3" aria-label="Kort fortalt">
          {hero.points.map((p) => (
            <li key={p} className="flex items-start gap-2 rounded-md border border-line bg-surface px-4 py-3">
              <CheckIcon />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none text-accent">
      <path d="M5 10.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
