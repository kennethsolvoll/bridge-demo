import { footer, site } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-semibold">Om prosjektet</h2>
          <p className="mt-2 text-sm text-white/85">{footer.about}</p>
        </div>
        <div>
          <h2 className="font-semibold">Kontakt</h2>
          <p className="mt-2 text-sm">
            <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-4 hover:no-underline">
              {site.contactEmail}
            </a>
          </p>
        </div>
      </div>
      <p className="border-t border-white/15 px-4 py-4 text-center text-xs text-white/75">
        Prototype. Ikke en aktiv tjeneste. Alt innhold er fiktivt.
      </p>
    </footer>
  )
}
