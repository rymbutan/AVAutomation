'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null)
  const arRef       = useRef<HTMLSpanElement>(null)
  const ymRef       = useRef<HTMLSpanElement>(null)
  const venRef      = useRef<HTMLSpanElement>(null)
  const diolaRef    = useRef<HTMLSpanElement>(null)
  const subLeftRef  = useRef<HTMLParagraphElement>(null)
  const subRightRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitAr    = new SplitText(arRef.current!,    { type: 'chars' })
      const splitYm    = new SplitText(ymRef.current!,    { type: 'chars' })
      const splitVen   = new SplitText(venRef.current!,   { type: 'chars' })
      const splitDiola = new SplitText(diolaRef.current!, { type: 'chars' })

      const tl = gsap.timeline({ delay: 1.2, defaults: { ease: 'osmo' } })

      tl.fromTo([...splitAr.chars, ...splitYm.chars],
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.03 }
      )
      tl.fromTo([...splitVen.chars, ...splitDiola.chars],
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.025 },
        '-=0.65'
      )
      tl.fromTo([subLeftRef.current, subRightRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      )

      // Subtle video parallax on mouse move
      const section = sectionRef.current
      if (!section) return
      function onMove(e: MouseEvent) {
        const nx = (e.clientX / window.innerWidth  - 0.5) * 2
        const ny = (e.clientY / window.innerHeight - 0.5) * 2
        gsap.to('.hero-video', {
          x: Math.max(-12, Math.min(12, nx * 12)),
          y: Math.max(-8,  Math.min(8,  ny * 8)),
          duration: 2, ease: 'power2.out',
        })
      }
      section.addEventListener('mousemove', onMove)
      return () => {
        section.removeEventListener('mousemove', onMove)
        splitAr.revert()
        splitYm.revert()
        splitVen.revert()
        splitDiola.revert()
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-nav="peach"
      className="hero-section"
      aria-label="Hero"
    >
      {/* ── Full-coverage video ── */}
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src="/me.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay-top"    aria-hidden="true" />
      <div className="hero-overlay-bottom" aria-hidden="true" />

      {/* ── Name row: "Ar/ym" left edge, "Ven/diola" right edge ── */}
      <div className="hero-name-row" aria-label="Arym Vendiola">

        <div className="hero-name-block">
          <div className="hero-name-overflow">
            <span ref={arRef} className="hero-name-word">Ar</span>
          </div>
          <div className="hero-name-overflow">
            <span ref={ymRef} className="hero-name-word">ym</span>
          </div>
          <p ref={subLeftRef} className="hero-sub-label" style={{ opacity: 0 }}>
            AI Automation Specialist&nbsp;<span>2026</span>
          </p>
        </div>

        <div className="hero-name-block hero-name-block--right">
          <div className="hero-name-overflow">
            <span ref={venRef} className="hero-name-word">Ven</span>
          </div>
          <div className="hero-name-overflow">
            <span ref={diolaRef} className="hero-name-word">diola</span>
          </div>
          <p ref={subRightRef} className="hero-sub-label hero-sub-label--right" style={{ opacity: 0 }}>
            Open to Part-time&nbsp;<span>[Remote]</span>
          </p>
        </div>

      </div>
    </section>
  )
}
