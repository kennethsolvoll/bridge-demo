import type { ReactNode } from 'react'

export const buttonPrimary =
  'inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 py-3 text-base font-semibold text-white hover:bg-accent-strong'

export const buttonSecondary =
  'inline-flex min-h-12 items-center justify-center rounded-md border border-ink/25 bg-white px-5 py-3 text-base font-semibold text-ink hover:border-ink/50 hover:bg-paper'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  intro?: ReactNode
  tone?: 'paper' | 'white'
  children: ReactNode
}

export function Section({ id, eyebrow, title, intro, tone = 'paper', children }: SectionProps) {
  const headingId = `${id}-tittel`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-line py-16 sm:py-20 ${tone === 'white' ? 'bg-white' : 'bg-paper'}`}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">{eyebrow}</p>
          <h2 id={headingId} className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}

export function CheckIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={`shrink-0 ${className}`}>
      <path
        d="M4.5 10.5l3.5 3.5 7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BridgeMark({ className = 'size-7' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={`shrink-0 ${className}`}>
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <path
        d="M6 22h20M9 22v-6M23 22v-6M9 16c4-6.5 10-6.5 14 0"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function QuoteBlock({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <figure className="rounded-lg border border-line bg-white p-6">
      <blockquote className="text-lg leading-relaxed text-ink">«{text}»</blockquote>
      <figcaption className="mt-4 text-sm text-muted">
        <span className="font-semibold text-ink">{name}</span>
        <span className="mt-0.5 block italic">{role}</span>
      </figcaption>
    </figure>
  )
}
