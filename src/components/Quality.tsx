import { quality } from '../data/content'
import { useLocale } from '../i18n/context'
import { QuoteBlock, Section } from './ui'

export function Quality() {
  const { t } = useLocale()
  return (
    <Section id="kvalitet" eyebrow={t(quality.eyebrow)} title={t(quality.title)} intro={t(quality.intro)}>
      <div className="grid gap-6 md:grid-cols-3">
        {quality.pillars.map((pillar) => (
          <article key={pillar.title.nb} className="rounded-lg border border-line bg-white p-6">
            <h3 className="text-lg font-semibold">{t(pillar.title)}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t(pillar.description)}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-lg border-l-4 border-accent bg-accent-soft p-6">
          <h3 className="text-lg font-semibold">{t(quality.safeguardsTitle)}</h3>
          <ol className="mt-4 space-y-3">
            {quality.safeguards.map((item, index) => (
              <li key={item.nb} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="font-semibold text-accent-strong">
                  {index + 1}.
                </span>
                <span>{t(item)}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted italic">{t(quality.safeguardsNote)}</p>
        </div>
        <div className="self-start">
          <QuoteBlock quote={quality.quote} />
        </div>
      </div>
    </Section>
  )
}
