import DemoBanner from './components/DemoBanner.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Quality from './components/Quality.jsx'
import Packages from './components/Packages.jsx'
import MatchDemo from './components/MatchDemo.jsx'
import ForStudents from './components/ForStudents.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#hovedinnhold"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:shadow"
      >
        Hopp til hovedinnhold
      </a>
      <DemoBanner />
      <Header />
      <main id="hovedinnhold" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <HowItWorks />
        <Quality />
        <Packages />
        <MatchDemo />
        <ForStudents />
      </main>
      <Footer />
    </>
  )
}
