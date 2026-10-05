import { languages, ui } from '../data/content'
import { useLocale } from '../i18n/context'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div role="group" aria-label={t(ui.language)} className="flex rounded-md border border-line p-0.5">
      {languages.map((language) => {
        const active = language.id === locale
        return (
          <button
            key={language.id}
            type="button"
            lang={language.id}
            aria-label={language.name}
            aria-pressed={active}
            onClick={() => setLocale(language.id)}
            className={`min-h-10 min-w-10 rounded px-2 text-sm font-semibold ${
              active ? 'bg-ink text-white' : 'text-muted hover:bg-paper hover:text-ink'
            }`}
          >
            {language.short}
          </button>
        )
      })}
    </div>
  )
}
