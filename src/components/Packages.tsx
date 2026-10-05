import { packages, packagesNote } from '../data/content'
import { CheckIcon, Section } from './ui'

const formatPrice = (value: number) => new Intl.NumberFormat('nb-NO').format(value)

export function Packages() {
  return (
    <Section
      id="pakker"
      tone="white"
      eyebrow="Pakker"
      title="Faste priser, avtalt på forhånd"
      intro="Dere betaler for en avgrenset leveranse, ikke for timer. Det gjør det enkelt å budsjettere."
    >
      <p className="mb-8 flex gap-3 rounded-md border border-warn/30 bg-warn-soft p-4 text-sm text-warn">
        <strong className="shrink-0 font-semibold">Merk:</strong>
        <span>{packagesNote}</span>
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
                  {pkg.name}
                </h3>
                <span className="rounded border border-line bg-white px-2 py-0.5 text-xs font-medium whitespace-nowrap text-muted">
                  Eksempelpris
                </span>
              </div>
              <p className="mt-4">
                <span className="text-3xl font-semibold tracking-tight">{formatPrice(pkg.price)}</span>{' '}
                <span className="font-medium">{pkg.priceUnit}</span>
                <span className="block text-sm text-muted">{pkg.priceNote}, eks. mva</span>
              </p>
              <p className="mt-4 leading-relaxed text-muted">{pkg.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 size-4 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-sm font-medium text-accent-strong">{pkg.delivery}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
