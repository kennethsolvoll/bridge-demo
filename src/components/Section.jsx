// Felles seksjonsramme: semantisk <section> koblet til overskriften via aria-labelledby.
export default function Section({ id, eyebrow, title, intro, tone = 'paper', children }) {
  const headingId = `${id}-tittel`
  const bg = tone === 'surface' ? 'bg-surface border-y border-line' : 'bg-paper'
  return (
    <section id={id} aria-labelledby={headingId} className={`${bg} py-16 sm:py-20`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p>
          )}
          <h2 id={headingId} className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
