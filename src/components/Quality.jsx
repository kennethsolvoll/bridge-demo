import { useLanguage } from '../i18n.jsx'
import Section from './Section.jsx'

export default function Quality() {
  const { t } = useLanguage()
  const { quality, testimonial } = t
  const { guarantee } = quality
  return (
    <Section id="kvalitet" eyebrow={quality.eyebrow} title={quality.title} intro={quality.intro}>
      <ul className="grid gap-6 md:grid-cols-3">
        {quality.pillars.map((p) => (
          <li key={p.title} className="border-l-4 border-accent bg-surface p-6">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <div className="rounded-lg border border-line bg-surface p-6 lg:col-span-3">
          <h3 className="text-lg font-semibold">{guarantee.title}</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            {guarantee.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted">{guarantee.note}</p>
        </div>

        <figure className="rounded-lg bg-accent-soft p-6 lg:col-span-2">
          <blockquote className="text-lg leading-snug">{t.ui.quote(testimonial.quote)}</blockquote>
          <figcaption className="mt-4 text-sm">
            <span className="font-semibold">{testimonial.author}</span>
            <span className="mt-1 block text-muted">{testimonial.note}</span>
          </figcaption>
        </figure>
      </div>
    </Section>
  )
}
