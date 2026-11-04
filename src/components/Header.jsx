import { useState } from 'react'
import { languages } from '../data/content.js'
import { useLanguage } from '../i18n.jsx'
import Logo from './Logo.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <Logo />
          <span className="text-lg">{t.site.name}</span>
          <span className="rounded border border-line px-1.5 py-0.5 text-xs font-medium text-muted">{t.ui.demoBadge}</span>
        </a>

        <nav aria-label={t.ui.navLabel} className="hidden lg:block">
          <ul className="flex gap-6 text-sm">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-muted hover:text-ink hover:underline underline-offset-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <button
            type="button"
            className="min-h-10 rounded-md border border-line px-3 py-2 text-sm font-medium lg:hidden"
            aria-expanded={open}
            aria-controls="mobilmeny"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t.ui.menuClose : t.ui.menuOpen}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobilmeny" aria-label={t.ui.navLabel} className="border-t border-line lg:hidden">
          <ul className="mx-auto max-w-5xl px-4 py-2">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-3 text-base" onClick={() => setOpen(false)}>
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

// To knapper med aria-pressed. Hver knapp har språkets eget navn og lang-attributt,
// så skjermlesere uttaler «Norsk» og «English» riktig uansett valgt språk.
function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage()
  return (
    <div role="group" aria-label={t.ui.languageLabel} className="flex rounded-md border border-line p-0.5 text-sm">
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          aria-label={l.label}
          aria-pressed={lang === l.code}
          onClick={() => setLang(l.code)}
          className={`min-h-9 min-w-10 rounded px-2 font-semibold ${
            lang === l.code ? 'bg-accent text-white' : 'text-muted hover:text-ink'
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  )
}
