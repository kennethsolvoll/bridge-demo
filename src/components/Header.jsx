import { useState } from 'react'
import { site, nav } from '../data/content.js'
import Logo from './Logo.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <Logo />
          <span className="text-lg">{site.name}</span>
          <span className="rounded border border-line px-1.5 py-0.5 text-xs font-medium text-muted">demo</span>
        </a>

        <nav aria-label="Hovedmeny" className="hidden md:block">
          <ul className="flex gap-6 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted hover:text-ink hover:underline underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-2 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Lukk meny' : 'Meny'}
        </button>
      </div>

      {open && (
        <nav id="mobilmeny" aria-label="Hovedmeny" className="border-t border-line md:hidden">
          <ul className="mx-auto max-w-5xl px-4 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-base"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
