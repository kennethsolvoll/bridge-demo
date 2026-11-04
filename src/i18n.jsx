import { createContext, useContext, useEffect, useState } from 'react'
import { content, languages } from './data/content.js'

const STORAGE_KEY = 'bond-demo-lang'
const supported = languages.map((l) => l.code)

// Prioritet: ?lang= i URL-en → tidligere valg → nettleserens språk → norsk.
function initialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (supported.includes(fromUrl)) return fromUrl
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (supported.includes(stored)) return stored
  } catch {
    // localStorage kan være blokkert (privat modus o.l.) – ignorer.
  }
  const browser = (navigator.language || '').toLowerCase()
  if (/^(nb|nn|no)\b/.test(browser)) return 'nb'
  return browser ? 'en' : 'nb'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignorer – valget huskes bare ikke.
    }
  }, [lang, t])

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
