import { steps } from '../data/content.js'
import Section from './Section.jsx'

export default function HowItWorks() {
  return (
    <Section
      id="slik-fungerer-det"
      eyebrow="For bedrifter"
      title="Slik fungerer det"
      intro="Tre steg fra behov til ferdig leveranse. Vi tar oss av matchingen og kvalitetskontrollen."
      tone="surface"
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="rounded-lg border border-line bg-paper p-6">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-semibold text-white"
            >
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold">
              <span className="sr-only">Steg {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
