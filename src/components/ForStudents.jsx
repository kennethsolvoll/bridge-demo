import { useLanguage } from '../i18n.jsx'
import Section from './Section.jsx'
import { ButtonLink } from './Button.jsx'

export default function ForStudents() {
  const { t } = useLanguage()
  const s = t.forStudents
  const mailto = `mailto:${t.site.contactEmail}?subject=${encodeURIComponent(s.emailSubject)}`
  return (
    <Section id="for-studenter" eyebrow={s.eyebrow} title={s.title} intro={s.intro} tone="surface">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">{s.benefitsTitle}</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {s.benefits.map((b) => (
              <li key={b.title} className="rounded-lg border border-line bg-paper p-5">
                <p className="font-semibold">{b.title}</p>
                <p className="mt-1 text-sm text-muted">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">{s.admissionTitle}</h3>
          <ol className="mt-4 space-y-4">
            {s.admission.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 flex-none place-items-center rounded-full border-2 border-accent text-sm font-semibold text-accent"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">
                    <span className="sr-only">{t.ui.step} {i + 1}: </span>
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
        <p className="font-medium">{s.cta}</p>
        <ButtonLink href={mailto}>{s.ctaButton}</ButtonLink>
      </div>
    </Section>
  )
}
