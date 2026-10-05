import { steps } from '../data/content'
import { Section } from './ui'

export function HowItWorks() {
  return (
    <Section
      id="slik-fungerer-det"
      tone="white"
      eyebrow="Slik fungerer det"
      title="Tre steg fra behov til ferdig leveranse"
      intro="Dere trenger ikke vite hvilken teknologi som passer. Det er vår jobb."
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-full bg-accent font-semibold text-white"
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold">
                <span className="sr-only">Steg {index + 1}: </span>
                {step.title}
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted">{step.description}</p>
            <p className="mt-4 text-sm font-medium text-accent-strong">{step.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
