import { forStudents, site } from '../data/content'
import { QuoteBlock, Section, buttonPrimary } from './ui'

export function ForStudents() {
  const mailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(forStudents.cta.subject)}`

  return (
    <Section
      id="studenter"
      tone="white"
      eyebrow="For studenter"
      title="Betalt erfaring, med en mentor i ryggen"
      intro={forStudents.intro}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {forStudents.benefits.map((benefit) => (
          <li key={benefit.title} className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-lg font-semibold">{benefit.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{benefit.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Slik fungerer opptaket</h3>
          <ol className="mt-6 space-y-6 border-l-2 border-line pl-6">
            {forStudents.admissionSteps.map((step, index) => (
              <li key={step.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-0 -left-[2.4rem] flex size-7 items-center justify-center rounded-full border-2 border-accent bg-white text-sm font-semibold text-accent-strong"
                >
                  {index + 1}
                </span>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="mt-1 leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <a href={mailto} className={`${buttonPrimary} mt-8`}>
            {forStudents.cta.label}
          </a>
        </div>
        <div className="self-start">
          <QuoteBlock {...forStudents.quote} />
        </div>
      </div>
    </Section>
  )
}
