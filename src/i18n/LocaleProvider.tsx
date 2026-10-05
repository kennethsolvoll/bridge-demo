import { useEffect, useState, type ReactNode } from 'react'
import { meta } from '../data/content'
import type { Locale } from '../types'
import { DEFAULT_LOCALE, LocaleContext, STORAGE_KEY, isLocale } from './context'

/** Språk fra ?lang= i URL-en har forrang, deretter forrige valg i nettleseren. */
function initialLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromUrl)) return fromUrl
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // localStorage kan være blokkert (f.eks. privat modus). Da brukes standardspråket.
  }
  return DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = meta.title[locale]
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description[locale])

    // Hold ?lang= i URL-en oppdatert, så lenken kan deles på riktig språk.
    const url = new URL(window.location.href)
    if (locale === DEFAULT_LOCALE) url.searchParams.delete('lang')
    else url.searchParams.set('lang', locale)
    window.history.replaceState(null, '', url)

    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Ikke kritisk om valget ikke kan lagres.
    }
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
