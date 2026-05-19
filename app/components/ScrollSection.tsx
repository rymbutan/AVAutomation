'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const WORDS = ['automating', 'systems', 'that', 'never', 'stop']

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function lerpColor(from: string, to: string, t: number) {
  const a = hexToRgb(from)
  const b = hexToRgb(to)
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)))
  return `rgb(${clamp(a.r + (b.r - a.r) * t)},${clamp(a.g + (b.g - a.g) * t)},${clamp(a.b + (b.b - a.b) * t)})`
}

export default function ScrollSection() {
  const outerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const pillLgRef = useRef<HTMLDivElement>(null)
  const circle1Ref = useRef<HTMLDivElement>(null)
  const circle2Ref = useRef<HTMLDivElement>(null)
  const hexRef = useRef<HTMLDivElement>(null)
  const squareRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = {
        trigger: outerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      }

      // Geometric shape parallax
      gsap.to(pillLgRef.current, { y: '-12vw', rotation: 8, scrollTrigger: trigger })
      gsap.to(circle1Ref.current, { y: '-8vw', x: '-3vw', scrollTrigger: trigger })
      gsap.to(circle2Ref.current, { y: '6vw', x: '4vw', scrollTrigger: trigger })
      gsap.to(hexRef.current, { y: '-10vw', rotation: -12, scrollTrigger: trigger })
      gsap.to(squareRef.current, { y: '14vw', rotation: -20, scrollTrigger: trigger })

      // ── Word-by-word colour scroll ──────────────────────────
      // Colour each word from grey → peach as that word enters
      // the active scroll window (spread across 70% of scroll distance)
      const total = WORDS.length
      ScrollTrigger.create({
        trigger: outerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress              // 0 → 1 total scroll progress
          const window = 0.72 / total          // each word's colour window
          wordRefs.current.forEach((el, i) => {
            if (!el) return
            // word i is fully lit when progress reaches (i+1)/total * 0.72
            const wordProgress = Math.max(0, Math.min(1, (p - i * window) / window))
            el.style.color = lerpColor('#96908c', '#ffbc95', wordProgress)
          })
        },
      })
    }, outerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={outerRef} className="scroll-section-outer" data-nav="grey">
      <div className="scroll-section-inner">
        {/* Main text — word-by-word colour */}
        <p
          className="scroll-section-text"
          aria-label="automating systems that never stop"
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              ref={(el) => { wordRefs.current[i] = el }}
              className="scroll-word"
            >
              {word}
              {i < WORDS.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>

        {/* Geometric shapes */}
        <div className="scroll-shapes-wrap" aria-hidden="true">
          <div ref={pillLgRef}   className="shape shape-pill-lg"    />
          <div ref={circle1Ref}  className="shape shape-circle-1"   />
          <div ref={circle2Ref}  className="shape shape-circle-2"   />
          <div ref={hexRef}      className="shape shape-hex"        />
          <div ref={squareRef}   className="shape shape-square"     />
          <div                   className="shape shape-blue-circle"/>
          <div                   className="shape shape-blue-pill"  />
          <div                   className="shape shape-blue-hex"   />
        </div>

      </div>
    </div>
  )
}
