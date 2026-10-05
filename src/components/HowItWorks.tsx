import { howItWorks } from '../data/content'
import { fill, useLocale } from '../i18n/context'
import { Section } from './ui'

export function HowItWorks() {
  const { t } = useLocale()
  return (
    <Section
      id="slik-fungerer-det"
      tone="white"
      eyebrow={t(howItWorks.eyebrow)}
      title={t(howItWorks.title)}
      intro={t(howItWorks.intro)}
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {howItWorks.steps.map((step, index) => (
          <li key={step.title.nb} className="rounded-lg border border-line bg-paper p-6">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-white"
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold">
                <span className="sr-only">{fill(t(howItWorks.stepLabel), { n: index + 1 })}</span>
                {t(step.title)}
              </h3>
            </div>
            <p className="mt-4 leading-relaxed text-muted">{t(step.description)}</p>
            <p className="mt-4 text-sm font-medium text-accent-strong">{t(step.detail)}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
