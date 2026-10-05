import { footer, site } from '../data/content'
import { BridgeMark, Container } from './ui'

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5 text-lg font-semibold">
            <BridgeMark className="size-6 text-accent" />
            {site.name}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-white/85">{footer.about}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">{footer.disclaimer}</p>
        </div>
        <div>
          <h2 className="font-semibold">Kontakt</h2>
          <p className="mt-3 text-white/85">
            Spørsmål, innspill eller lyst til å teste idéen med oss?
          </p>
          <p className="mt-2">
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-semibold break-all text-white underline underline-offset-4 hover:no-underline focus-visible:outline-white"
            >
              {site.contactEmail}
            </a>
          </p>
        </div>
      </Container>
      <Container className="mt-10 border-t border-white/20 pt-6 text-sm text-white/75">
        Prototype · Studentprosjekt i {site.course}
      </Container>
    </footer>
  )
}
