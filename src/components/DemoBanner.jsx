import { useLanguage } from '../i18n.jsx'

export default function DemoBanner() {
  const { t } = useLanguage()
  return (
    <div role="note" aria-label={t.ui.noticeLabel} className="bg-notice text-notice-ink">
      <p className="mx-auto max-w-5xl px-4 py-2 text-center text-sm sm:px-6">
        <strong className="font-semibold">{t.ui.demoLabel}</strong> {t.site.demoNotice}
      </p>
    </div>
  )
}
