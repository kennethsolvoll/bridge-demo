import { site } from '../data/content'
import { Container } from './ui'

export function DemoBanner() {
  return (
    <div className="border-b border-line bg-warn-soft text-warn">
      <Container className="py-2 text-center text-xs sm:text-sm">
        <strong className="font-semibold">Demo/prototype:</strong> {site.demoNotice}
      </Container>
    </div>
  )
}
