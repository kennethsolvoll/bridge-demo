import { ui } from '../data/content'
import { useLocale } from '../i18n/context'
import { Container } from './ui'

export function DemoBanner() {
  const { t } = useLocale()
  return (
    <div className="border-b border-line bg-warn-soft text-warn">
      <Container className="py-2 text-center text-xs sm:text-sm">
        <strong className="font-semibold">{t(ui.demoLabel)}</strong> {t(ui.demoNotice)}
      </Container>
    </div>
  )
}
