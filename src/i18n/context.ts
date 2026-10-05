import { createContext, useContext } from 'react'
import type { Locale, Localizable } from '../types'

export const LOCALES: Locale[] = ['nb', 'en']
export const DEFAULT_LOCALE: Locale = 'nb'
export const STORAGE_KEY = 'bridge-demo-lang'

export const isLocale = (value: unknown): value is Locale => LOCALES.includes(value as Locale)

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
})

/** Fyller inn {plassholdere} i en mal. */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match))
}

export function useLocale() {
  const { locale, setLocale } = useContext(LocaleContext)
  const t = (text: Localizable) => (typeof text === 'string' ? text : text[locale])
  return { locale, setLocale, t }
}
