'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const CHARS = '!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

function useScramble(original: string) {
  const [text, setText] = useState(original)
  const frameRef = useRef<number>()
  const iterRef  = useRef(0)

  const trigger = useCallback(() => {
    cancelAnimationFrame(frameRef.current!)
    iterRef.current = 0

    const run = () => {
      const floor = Math.floor(iterRef.current)
      setText(
        original.split('').map((ch, i) => {
          if (ch === ' ') return ' '
          if (i < floor)  return original[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')
      )
      iterRef.current += 0.45
      if (iterRef.current < original.length) {
        frameRef.current = requestAnimationFrame(run)
      } else {
        setText(original)
      }
    }
    frameRef.current = requestAnimationFrame(run)
  }, [original])

  useEffect(() => () => cancelAnimationFrame(frameRef.current!), [])
  return { text, trigger }
}

const benefitItems = [
  'Clear communication — async-first, no surprises',
  'Shipped on time, documented for handoff',
  'Automation thinking built into every solution',
  'Remote-native, globally available',
]

export default function Benefits() {
  const sectionRef       = useRef<HTMLElement>(null)
  const bigGoodRef       = useRef<HTMLSpanElement>(null)
  const bigAutoRef       = useRef<HTMLSpanElement>(null)
  const bigLeftRef       = useRef<HTMLSpanElement>(null) // kept for overflow wrapper
  const bigRightRef      = useRef<HTMLSpanElement>(null)
  const subRef           = useRef<HTMLParagraphElement>(null)
  const partnerHeadRef   = useRef<HTMLHeadingElement>(null)
  const checkRefs        = useRef<(HTMLDivElement | null)[]>([])
  const lineRefs         = useRef<(HTMLDivElement | null)[]>([])

  const { text: partnerText, trigger: scramblePartner } = useScramble('perspective + sharp instincts')

  useEffect(() => {
    const ctx = gsap.context(() => {
      // "Good" — SplitText chars
      if (bigGoodRef.current) {
        const split = new SplitText(bigGoodRef.current, { type: 'chars' })
        gsap.fromTo(split.chars,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.8, stagger: 0.015, ease: 'osmo',
            scrollTrigger: { trigger: bigGoodRef.current, start: 'top bottom+=350', once: true } }
        )
      }
      // "Automation" — animate as a whole word to preserve gradient
      if (bigAutoRef.current) {
        gsap.fromTo(bigAutoRef.current,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.8, ease: 'osmo',
            scrollTrigger: { trigger: bigAutoRef.current, start: 'top bottom+=350', once: true } }
        )
      }
      // "takes time"
      if (bigRightRef.current) {
        const split = new SplitText(bigRightRef.current, { type: 'chars' })
        gsap.fromTo(split.chars,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.8, stagger: 0.015, ease: 'osmo',
            scrollTrigger: { trigger: bigRightRef.current, start: 'top bottom+=350', once: true } }
        )
      }

      // Sub line
      gsap.fromTo(subRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'osmo',
          scrollTrigger: { trigger: subRef.current, start: 'top bottom+=350', once: true },
        }
      )

      // Partner heading entrance (SplitText)
      if (partnerHeadRef.current) {
        const split = new SplitText(partnerHeadRef.current, { type: 'chars' })
        gsap.fromTo(split.chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.012, ease: 'osmo',
            scrollTrigger: { trigger: partnerHeadRef.current, start: 'top bottom+=350', once: true },
          }
        )
      }

      // Benefit items — line expands + check bounces in
      benefitItems.forEach((_, i) => {
        const line  = lineRefs.current[i]
        const check = checkRefs.current[i]
        if (!line || !check) return

        const tl = gsap.timeline({
          scrollTrigger: { trigger: line.closest('.benefit-item'), start: 'top bottom+=350', once: true },
        })
        tl.fromTo(line,  { width: '0%' }, { width: '100%', duration: 0.7, ease: 'osmo' })
        tl.fromTo(check, { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }, '-=0.4')
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="benefits"
      data-nav="grey"
      className="benefits-section"
      aria-label="Why work with me"
    >
      {/* 14vw big text — two separate full-width rows */}
      <div className="benefits-big-line benefits-big-line--left" aria-hidden="true">
        <div className="section-heading-overflow">
          <span className="benefits-big-left">
            <span ref={bigGoodRef}>Good </span><span ref={bigAutoRef} className="benefits-accent">Automation</span>
          </span>
        </div>
      </div>
      <div className="benefits-big-line benefits-big-line--right" aria-hidden="true">
        <div className="section-heading-overflow">
          <span ref={bigRightRef} className="benefits-big-right">takes time</span>
        </div>
      </div>

      {/* Sub */}
      <div className="section-heading-overflow">
        <p ref={subRef} className="benefits-sub">and working with me saves it</p>
      </div>

      {/* ── Sub-paragraph describing services ── */}
      <div className="benefits-desc-row">
        <p className="benefits-desc">
          From building zero-to-one automation systems to optimizing existing CRM pipelines,
          I partner with growth-stage teams to design reliable, scalable workflows that replace
          manual effort with intelligent automation — delivered on time, fully documented.
        </p>
        <div className="benefits-desc-tags">
          <span className="benefits-desc-tag">Zapier · Make.com</span>
          <span className="benefits-desc-tag">CRM Automation</span>
          <span className="benefits-desc-tag">AI Integration</span>
          <span className="benefits-desc-tag">Technical VA</span>
        </div>
      </div>

      {/* Partner heading — scrambles on hover */}
      <div className="benefits-partner-row">
        <span className="benefits-partner-label">Companies partner with me because of my</span>
        <div className="section-heading-overflow">
          <h2
            ref={partnerHeadRef}
            className="benefits-partner-heading"
            onMouseEnter={scramblePartner}
            style={{ cursor: 'default', userSelect: 'none' }}
          >
            {partnerText}
          </h2>
        </div>
      </div>

      {/* Benefit checklist */}
      <ul className="benefits-list" role="list">
        {benefitItems.map((item, i) => (
          <li key={item} className="benefit-item" role="listitem">
            <div
              ref={(el) => { checkRefs.current[i] = el }}
              className="benefit-check"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="benefit-line-wrap">
              <div ref={(el) => { lineRefs.current[i] = el }} className="benefit-line">
                {item}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
