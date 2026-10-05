import { DemoBanner } from './components/DemoBanner'
import { Footer } from './components/Footer'
import { ForStudents } from './components/ForStudents'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { MatchingDemo } from './components/MatchingDemo'
import { Packages } from './components/Packages'
import { Quality } from './components/Quality'

export default function App() {
  return (
    <>
      <a
        href="#innhold"
        className="sr-only z-50 rounded-md bg-ink px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Hopp til innhold
      </a>
      <DemoBanner />
      <Header />
      <main id="innhold" tabIndex={-1}>
        <Hero />
        <HowItWorks />
        <Quality />
        <Packages />
        <MatchingDemo />
        <ForStudents />
      </main>
      <Footer />
    </>
  )
}
