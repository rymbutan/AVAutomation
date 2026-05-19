'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const BEFORE = [
  { icon: '📧', label: 'Lead fills out form' },
  { icon: '⏳', label: 'Wait for manual review' },
  { icon: '🔍', label: 'Manually research company' },
  { icon: '📝', label: 'Copy data into spreadsheet' },
  { icon: '✉️', label: 'Write personalised email' },
  { icon: '📤', label: 'Send email manually' },
  { icon: '🗓️', label: 'Hope to remember follow-up' },
]

const AFTER = [
  { icon: '📧', label: 'Lead fills out form' },
  { icon: '⚡', label: 'Webhook triggers instantly' },
  { icon: '🤖', label: 'Apollo enriches profile auto' },
  { icon: '📊', label: 'Scored & routed by AI' },
  { icon: '✨', label: 'Personalised email drafted' },
  { icon: '📤', label: 'Sent + logged automatically' },
  { icon: '🔁', label: 'Follow-up sequence starts' },
]

export default function BeforeAfter() {
  const [active, setActive] = useState<'before' | 'after'>('before')
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const items = listRef.current?.querySelectorAll('.ba-step')
    if (!items) return
    gsap.fromTo(items,
      { opacity: 0, x: active === 'after' ? 20 : -20 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: 'power3.out' }
    )
  }, [active])

  const steps = active === 'before' ? BEFORE : AFTER

  return (
    <section className="ba-section" data-nav="grey" aria-label="Before and after automation">
      <div className="ba-inner">
        <div className="ba-header">
          <span className="ba-eyebrow">The difference I make</span>
          <h2 className="ba-heading">
            From <span className="ba-word-manual">manual</span> to <span className="ba-word-auto">automated</span>
          </h2>
        </div>

        {/* Toggle */}
        <div className="ba-toggle" role="tablist" aria-label="Switch between before and after">
          <button
            role="tab"
            aria-selected={active === 'before'}
            className={`ba-tab${active === 'before' ? ' ba-tab--active' : ''}`}
            onClick={() => setActive('before')}
          >
            Without me
          </button>
          <button
            role="tab"
            aria-selected={active === 'after'}
            className={`ba-tab${active === 'after' ? ' ba-tab--active' : ''}`}
            onClick={() => setActive('after')}
          >
            With me
          </button>
          <div className={`ba-toggle-pill${active === 'after' ? ' ba-toggle-pill--right' : ''}`} aria-hidden="true" />
        </div>

        {/* Steps */}
        <ul ref={listRef} className="ba-steps" role="list">
          {steps.map((step, i) => (
            <li key={i} className={`ba-step${active === 'after' ? ' ba-step--after' : ''}`}>
              <span className="ba-step-icon" aria-hidden="true">{step.icon}</span>
              <span className="ba-step-line" aria-hidden="true" />
              <span className="ba-step-label">{step.label}</span>
              {active === 'after' && i < steps.length - 1 && (
                <span className="ba-step-auto-badge" aria-hidden="true">auto</span>
              )}
            </li>
          ))}
        </ul>

        {active === 'before' && (
          <p className="ba-summary ba-summary--before">
            Every step is manual. Hours lost. Leads go cold.
          </p>
        )}
        {active === 'after' && (
          <p className="ba-summary ba-summary--after">
            One trigger. Everything else runs itself — 24/7.
          </p>
        )}
      </div>
    </section>
  )
}
