import { site } from '../data/content.js'

export default function DemoBanner() {
  return (
    <div role="note" aria-label="Demo-merking" className="bg-notice text-notice-ink">
      <p className="mx-auto max-w-5xl px-4 py-2 text-center text-sm sm:px-6">
        <strong className="font-semibold">Prototype:</strong> {site.demoNotice}
      </p>
    </div>
  )
}
