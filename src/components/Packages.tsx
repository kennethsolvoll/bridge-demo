import { packages, packagesSection } from '../data/content'
import { useLocale } from '../i18n/context'
import type { Locale } from '../types'
import { CheckIcon, Section } from './ui'

// Gir «18 000 kr» på norsk og «NOK 18,000» på engelsk.
const formatPrice = (value: number, locale: Locale) =>
  new Intl.NumberFormat(locale === 'nb' ? 'nb-NO' : 'en-GB', {
    style: 'currency',
    currency: 'NOK',
    maximumFractionDigits: 0,
  }).format(value)

export function Packages() {
  const { locale, t } = useLocale()
  return (
    <Section
      id="pakker"
      tone="white"
      eyebrow={t(packagesSection.eyebrow)}
      title={t(packagesSection.title)}
      intro={t(packagesSection.intro)}
    >
      <p className="mb-8 flex gap-3 rounded-md border border-warn/30 bg-warn-soft p-4 text-sm text-warn">
        <strong className="shrink-0 font-semibold">{t(packagesSection.noteLabel)}</strong>
        <span>{t(packagesSection.note)}</span>
      </p>

      <ul className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <li key={pkg.id}>
            <article
              aria-labelledby={`pakke-${pkg.id}`}
              className="flex h-full flex-col rounded-lg border border-line bg-paper p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 id={`pakke-${pkg.id}`} className="text-xl font-semibold">
                  {t(pkg.name)}
                </h3>
                <span className="rounded border border-line bg-white px-2 py-0.5 text-xs font-medium whitespace-nowrap text-muted">
                  {t(packagesSection.examplePrice)}
                </span>
              </div>
              <p className="mt-4">
                <span className="text-3xl font-semibold tracking-tight">{formatPrice(pkg.price, locale)}</span>
                {pkg.priceSuffix && <span className="font-medium">{t(pkg.priceSuffix)}</span>}
                <span className="block text-sm text-muted">
                  {t(pkg.priceNote)}, {t(packagesSection.exVat)}
                </span>
              </p>
              <p className="mt-4 leading-relaxed text-muted">{t(pkg.description)}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {pkg.includes.map((item) => (
                  <li key={item.nb} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 size-4 text-accent" />
                    {t(item)}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-sm font-medium text-accent-strong">{t(pkg.delivery)}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
