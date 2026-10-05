import { footer, site } from '../data/content'
import { fill, useLocale } from '../i18n/context'
import { BridgeMark, Container } from './ui'

export function Footer() {
  const { t } = useLocale()
  const course = t(site.course)

  return (
    <footer className="bg-ink py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="flex items-center gap-2.5 text-lg font-semibold">
            <BridgeMark className="size-6 text-accent" />
            {site.name}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-white/85">{fill(t(footer.about), { course })}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">{t(footer.disclaimer)}</p>
        </div>
        <div>
          <h2 className="font-semibold">{t(footer.contactTitle)}</h2>
          <p className="mt-3 text-white/85">{t(footer.contactText)}</p>
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
        {fill(t(footer.bottomLine), { course })}
      </Container>
    </footer>
  )
}
