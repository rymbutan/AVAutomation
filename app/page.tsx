import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ScrollSection from './components/ScrollSection'
import Services from './components/Services'
import FeaturedWork from './components/FeaturedWork'
import BeforeAfter from './components/BeforeAfter'
import WorkCTA from './components/WorkCTA'
import Process from './components/Process'
import About from './components/About'
import Benefits from './components/Benefits'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <ScrollSection />
      <Marquee reverse />
      <Services />
      <FeaturedWork />
      <BeforeAfter />
      <WorkCTA />
      <Process />
      <About />
      <Benefits />
      <CTASection />
      <Footer />
    </main>
  )
}
