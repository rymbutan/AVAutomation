import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import IntroLoader from './components/IntroLoader'
import Hero from './components/Hero'

// Lazy-load everything below the fold — splits the JS bundle
const Marquee       = dynamic(() => import('./components/Marquee'))
const ScrollSection = dynamic(() => import('./components/ScrollSection'))
const Services      = dynamic(() => import('./components/Services'))
const FeaturedWork  = dynamic(() => import('./components/FeaturedWork'))
const BeforeAfter   = dynamic(() => import('./components/BeforeAfter'))
const WorkCTA       = dynamic(() => import('./components/WorkCTA'))
const Benefits      = dynamic(() => import('./components/Benefits'))
const CTASection    = dynamic(() => import('./components/CTASection'))
const Footer        = dynamic(() => import('./components/Footer'))

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <Navbar />
      <Hero />
      <Marquee />
      <ScrollSection />
      <Marquee reverse />
      <Services />
      <FeaturedWork />
      <BeforeAfter />
      <WorkCTA />
      <Benefits />
      <CTASection />
      <Footer />
    </main>
  )
}
