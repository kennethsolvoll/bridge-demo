import { forStudents, site } from '../data/content.js'
import Section from './Section.jsx'
import { ButtonLink } from './Button.jsx'

export default function ForStudents() {
  return (
    <Section id="for-studenter" eyebrow="For studenter" title="Betalt, ekte erfaring med mentor" intro={forStudents.intro} tone="surface">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Dette får du</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {forStudents.benefits.map((b) => (
              <li key={b.title} className="rounded-lg border border-line bg-paper p-5">
                <p className="font-semibold">{b.title}</p>
                <p className="mt-1 text-sm text-muted">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Slik fungerer opptaket</h3>
          <ol className="mt-4 space-y-4">
            {forStudents.admission.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 flex-none place-items-center rounded-full border-2 border-accent text-sm font-semibold text-accent"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">
                    <span className="sr-only">Steg {i + 1}: </span>
                    {step.title}
                  </p>
                  <p className="text-sm text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-lg bg-accent-soft p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium">{forStudents.cta}</p>
        <ButtonLink href={`mailto:${site.contactEmail}?subject=Student%20-%20pilot`}>Send e-post</ButtonLink>
      </div>
    </Section>
  )
}
