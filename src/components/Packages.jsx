import { packages, packagesDisclaimer } from '../data/content.js'
import Section from './Section.jsx'
import { CheckIcon } from './Hero.jsx'

export default function Packages() {
  return (
    <Section
      id="pakker"
      eyebrow="Pakker"
      title="Faste priser, avtalt på forhånd"
      intro="Dere vet hva det koster før arbeidet starter. Ingen timelister og ingen overraskelser."
      tone="surface"
    >
      <p className="mb-8 inline-block rounded-md bg-notice px-4 py-2 text-sm font-medium text-notice-ink">
        {packagesDisclaimer}
      </p>

      <ul className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <li
            key={pkg.id}
            className={`flex flex-col rounded-lg border bg-paper p-6 ${
              pkg.highlighted ? 'border-accent ring-1 ring-accent' : 'border-line'
            }`}
          >
            <h3 className="text-lg font-semibold">{pkg.name}</h3>
            <p className="mt-1 text-sm text-muted">{pkg.idealFor}</p>
            <p className="mt-5">
              <span className="text-3xl font-semibold tracking-tight">{pkg.price}</span>{' '}
              <span className="text-sm text-muted">{pkg.priceNote}</span>
            </p>
            <p className="mt-1 text-sm text-muted">
              <span className="sr-only">Eksempelpris. </span>Leveringstid: {pkg.deliveryTime}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {pkg.includes.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
