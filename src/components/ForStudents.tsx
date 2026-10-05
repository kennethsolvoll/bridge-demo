import { forStudents, site } from '../data/content'
import { useLocale } from '../i18n/context'
import { QuoteBlock, Section, buttonPrimary } from './ui'

export function ForStudents() {
  const { t } = useLocale()
  const mailto = `mailto:${site.contactEmail}?subject=${encodeURIComponent(t(forStudents.cta.subject))}`

  return (
    <Section
      id="studenter"
      tone="white"
      eyebrow={t(forStudents.eyebrow)}
      title={t(forStudents.title)}
      intro={t(forStudents.intro)}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {forStudents.benefits.map((benefit) => (
          <li key={benefit.title.nb} className="rounded-lg border border-line bg-paper p-6">
            <h3 className="text-lg font-semibold">{t(benefit.title)}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t(benefit.description)}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{t(forStudents.admissionTitle)}</h3>
          <ol className="mt-6 space-y-6 border-l-2 border-line pl-6">
            {forStudents.admissionSteps.map((step, index) => (
              <li key={step.title.nb} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-0 -left-[2.4rem] flex size-7 items-center justify-center rounded-full border-2 border-accent bg-white text-sm font-semibold text-accent-strong"
                >
                  {index + 1}
                </span>
                <h4 className="font-semibold">{t(step.title)}</h4>
                <p className="mt-1 leading-relaxed text-muted">{t(step.description)}</p>
              </li>
            ))}
          </ol>
          <a href={mailto} className={`${buttonPrimary} mt-8`}>
            {t(forStudents.cta.label)}
          </a>
        </div>
        <div className="self-start">
          <QuoteBlock quote={forStudents.quote} />
        </div>
      </div>
    </Section>
  )
}
