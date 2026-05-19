'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const BEFORE = [
  { icon: '📧', num: '01', label: 'Lead fills out form' },
  { icon: '⏳', num: '02', label: 'Wait for manual review' },
  { icon: '🔍', num: '03', label: 'Manually research company' },
  { icon: '📝', num: '04', label: 'Copy data into spreadsheet' },
  { icon: '✉️', num: '05', label: 'Write personalised email' },
  { icon: '📤', num: '06', label: 'Send email manually' },
  { icon: '🗓️', num: '07', label: 'Hope to remember follow-up' },
]

const AFTER = [
  { icon: '📧', num: '01', label: 'Lead fills out form',           auto: false },
  { icon: '⚡', num: '02', label: 'Webhook triggers instantly',    auto: true  },
  { icon: '🤖', num: '03', label: 'Apollo enriches profile',       auto: true  },
  { icon: '📊', num: '04', label: 'Scored & routed by AI',         auto: true  },
  { icon: '✨', num: '05', label: 'Personalised email drafted',    auto: true  },
  { icon: '📤', num: '06', label: 'Sent + logged automatically',   auto: true  },
  { icon: '🔁', num: '07', label: 'Follow-up sequence starts',     auto: true  },
]

export default function BeforeAfter() {
  const [active, setActive]   = useState<'before' | 'after'>('before')
  const [animating, setAnim]  = useState(false)
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const listRef     = useRef<HTMLUListElement>(null)
  const lineRef     = useRef<HTMLDivElement>(null)
  const blob1Ref    = useRef<HTMLDivElement>(null)
  const blob2Ref    = useRef<HTMLDivElement>(null)
  const summaryRef  = useRef<HTMLParagraphElement>(null)

  // ── Scroll entrance ───────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading chars
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: 'chars,words' })
        gsap.fromTo(split.chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.018, ease: 'osmo',
            scrollTrigger: { trigger: headingRef.current, start: 'top bottom+=350', once: true },
          }
        )
      }

      // Steps entrance — each slides up with stagger
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('.ba-step')
        gsap.fromTo(items,
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'osmo',
            scrollTrigger: { trigger: listRef.current, start: 'top bottom+=300', once: true },
          }
        )
      }

      // Connecting line draws down
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: listRef.current, start: 'top bottom+=300', once: true },
          }
        )
      }

      // Parallax blobs
      if (blob1Ref.current) {
        gsap.to(blob1Ref.current, {
          y: -80,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
        })
      }
      if (blob2Ref.current) {
        gsap.to(blob2Ref.current, {
          y: 60,
          ease: 'none',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // ── Toggle with exit/enter animation ─────────────────────────
  const handleToggle = useCallback((next: 'before' | 'after') => {
    if (next === active || animating) return
    setAnim(true)

    const items = listRef.current?.querySelectorAll('.ba-step')
    const summary = summaryRef.current
    const line = lineRef.current

    // Exit current
    gsap.to(items ?? [], {
      opacity: 0, y: next === 'after' ? -16 : 16,
      duration: 0.28, stagger: 0.04, ease: 'power2.in',
      onComplete: () => {
        setActive(next)
        setAnim(false)
      },
    })
    if (summary) gsap.to(summary, { opacity: 0, y: -8, duration: 0.2 })
    if (line)    gsap.to(line,    { scaleY: 0, duration: 0.3, ease: 'power2.in' })
  }, [active, animating])

  // Enter new items after state change
  useEffect(() => {
    if (animating) return
    const items   = listRef.current?.querySelectorAll('.ba-step')
    const summary = summaryRef.current
    const line    = lineRef.current
    if (!items?.length) return

    gsap.fromTo(items,
      { opacity: 0, y: active === 'after' ? 20 : -20 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'osmo' }
    )
    if (summary) gsap.fromTo(summary, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.35 })
    if (line)    gsap.to(line, { scaleY: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 })
  }, [active, animating])

  const steps = (active === 'before' ? BEFORE : AFTER) as { icon: string; num: string; label: string; auto?: boolean }[]

  return (
    <section
      ref={sectionRef}
      className="ba-section"
      data-nav="grey"
      aria-label="Before and after automation"
    >
      {/* ── Parallax background blobs ── */}
      <div ref={blob1Ref} className="ba-blob ba-blob--1" aria-hidden="true" />
      <div ref={blob2Ref} className="ba-blob ba-blob--2" aria-hidden="true" />

      <div className="ba-inner">
        {/* Header */}
        <div className="ba-header">
          <span className="ba-eyebrow">The difference I make</span>
          <div className="section-heading-overflow">
            <h2 ref={headingRef} className="ba-heading">
              From <span className="ba-word-manual">manual</span> to{' '}
              <span className="ba-word-auto">automated</span>
            </h2>
          </div>
        </div>

        {/* Toggle */}
        <div className="ba-toggle" role="tablist" aria-label="Switch view">
          <button
            role="tab" aria-selected={active === 'before'}
            className={`ba-tab${active === 'before' ? ' ba-tab--active' : ''}`}
            onClick={() => handleToggle('before')}
          >Without me</button>
          <button
            role="tab" aria-selected={active === 'after'}
            className={`ba-tab${active === 'after' ? ' ba-tab--active' : ''}`}
            onClick={() => handleToggle('after')}
          >With me</button>
          <div className={`ba-toggle-pill${active === 'after' ? ' ba-toggle-pill--right' : ''}`} aria-hidden="true" />
        </div>

        {/* Steps with vertical connecting line */}
        <div className="ba-steps-wrap">
          <div
            ref={lineRef}
            className={`ba-connector${active === 'after' ? ' ba-connector--after' : ''}`}
            aria-hidden="true"
            style={{ transformOrigin: 'top' }}
          />

          <ul ref={listRef} className="ba-steps" role="list">
            {steps.map((step, i) => (
              <li
                key={`${active}-${i}`}
                className={`ba-step${active === 'after' ? ' ba-step--after' : ''}${
                  'auto' in step && step.auto ? ' ba-step--auto' : ''
                }`}
              >
                <span className={`ba-step-num${active === 'after' && 'auto' in step && step.auto ? ' ba-step-num--auto' : ''}`} aria-hidden="true">
                  {step.num}
                </span>
                <span className="ba-step-icon" aria-hidden="true">{step.icon}</span>
                <span className="ba-step-label">{step.label}</span>
                {'auto' in step && step.auto && (
                  <span className="ba-step-auto-badge" aria-hidden="true">auto</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p
          ref={summaryRef}
          className={`ba-summary${active === 'after' ? ' ba-summary--after' : ' ba-summary--before'}`}
        >
          {active === 'before'
            ? 'Every step is manual. Hours lost. Leads go cold.'
            : 'One trigger. Everything else runs itself — 24/7.'}
        </p>
      </div>
    </section>
  )
}
