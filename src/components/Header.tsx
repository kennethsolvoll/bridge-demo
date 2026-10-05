import { useEffect, useRef, useState } from 'react'
import { navItems, site, ui } from '../data/content'
import { useLocale } from '../i18n/context'
import { LanguageSwitcher } from './LanguageSwitcher'
import { BridgeMark, Container } from './ui'

export function Header() {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="flex h-16 items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2.5 text-accent" aria-label={t(ui.homeLink)}>
          <BridgeMark />
          <span className="text-xl font-semibold tracking-tight text-ink">{site.name}</span>
          <span className="hidden rounded border border-line px-1.5 py-0.5 text-xs font-medium text-muted sm:inline">
            {t(ui.prototypeBadge)}
          </span>
        </a>

        <div className="flex items-center gap-2 lg:gap-4">
          <nav aria-label={t(ui.mainNav)} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-paper hover:text-ink"
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher />

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-line px-3 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls="mobilmeny"
            onClick={() => setOpen((value) => !value)}
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
            {t(ui.menu)}
          </button>
        </div>
      </Container>

      <nav id="mobilmeny" aria-label={t(ui.mainNav)} hidden={!open} className="border-t border-line lg:hidden">
        <Container>
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-3 text-base font-medium hover:bg-paper"
                  onClick={() => setOpen(false)}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  )
}
