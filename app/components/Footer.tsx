'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure footer content is visible even if scroll trigger misfires
      gsap.set(['.footer-top', '.footer-bottom', '.footer-statement-text'], { opacity: 1 })

      gsap.fromTo('.footer-top',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'osmo',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        }
      )

      gsap.fromTo('.footer-statement-text',
        { letterSpacing: '-0.5vw', opacity: 0 },
        {
          letterSpacing: '-0.05vw', opacity: 0.35, duration: 1.2, ease: 'osmo',
          scrollTrigger: { trigger: '.footer-statement', start: 'top 95%', once: true },
        }
      )

      gsap.fromTo('.footer-bottom',
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'osmo',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={sectionRef}
      id="footer"
      data-nav="grey"
      className="footer-section"
      aria-label="Footer"
    >
      <div className="footer-gradient-bg" aria-hidden="true" />

      {/* Top row */}
      <div className="footer-top">
        <nav className="footer-links" aria-label="Footer links">
          <a href="mailto:arymsrv@gmail.com" className="footer-link">Email</a>
          <a href="https://linkedin.com/in/arym-vendiola" className="footer-link"
            target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/639910126516" className="footer-link"
            target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
        <div className="footer-stack">
          <span className="footer-stack-label">Built with</span>
          <span className="footer-stack-item">Next.js</span>
          <span className="footer-stack-item">GSAP</span>
          <span className="footer-stack-item">Lenis</span>
          <span className="footer-stack-item">Tailwind CSS</span>
        </div>
      </div>

      {/* Large centered statement */}
      <div className="footer-statement" aria-hidden="true">
        <span className="footer-statement-text">AI Automation Specialist</span>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <span className="footer-copy">AI Automation Specialist 2026</span>
        <span className="footer-remote">Open to Remote Work [Worldwide]</span>
      </div>
    </footer>
  )
}
