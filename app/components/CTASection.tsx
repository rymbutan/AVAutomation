'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)


const EMAIL = 'arymsrv@gmail.com'
const CHARS  = '!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

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
      iterRef.current += 0.5
      if (iterRef.current < original.length) frameRef.current = requestAnimationFrame(run)
      else setText(original)
    }
    frameRef.current = requestAnimationFrame(run)
  }, [original])

  useEffect(() => () => cancelAnimationFrame(frameRef.current!), [])
  return { text, trigger }
}

export default function CTASection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const [copied, setCopied] = useState(false)

  const { text: talkText, trigger: scrambleTalk } = useScramble("Let's talk")

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Container entrance — fires 400px before section enters viewport
      gsap.fromTo('.cta-container',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'osmo',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom+=400', once: true },
        }
      )

      // Heading SplitText entrance — fires slightly after container fade
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: 'chars' })
        gsap.fromTo(split.chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.01, ease: 'osmo',
            scrollTrigger: { trigger: sectionRef.current, start: 'top bottom+=350', once: true },
          }
        )
      }

      // Arrow hover: rotate ↗ on mouseenter, reset on mouseleave
      const arrow = document.querySelector('.cta-arrow-wrap')
      if (arrow) {
        arrow.addEventListener('mouseenter', () =>
          gsap.to(arrow.querySelector('svg'), { rotation: 45, duration: 0.3, ease: 'power2.out' })
        )
        arrow.addEventListener('mouseleave', () =>
          gsap.to(arrow.querySelector('svg'), { rotation: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' })
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      document.querySelector('.cursor-jm')?.classList.add('is-copy')
      setTimeout(() => {
        setCopied(false)
        document.querySelector('.cursor-jm')?.classList.remove('is-copy')
      }, 2400)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <>
    {/* Toast notification */}
    <div className={`copy-toast${copied ? ' copy-toast--visible' : ''}`} role="status" aria-live="polite">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 13l4 4L19 7"/>
      </svg>
      Email copied to clipboard
    </div>
    <section
      ref={sectionRef}
      id="cta"
      data-nav="peach"
      className="cta-section"
      aria-label="Contact CTA"
    >
      <div className="cta-container">
        {/* Top */}
        <div className="cta-top">
          <div className="section-heading-overflow">
            <h2 ref={headingRef} className="cta-heading">
              Let&apos;s build something that works while you sleep
            </h2>
          </div>
          <p className="cta-tagline">from early-stage startups to growing businesses.</p>
        </div>

        {/* Bottom row */}
        <div className="cta-bottom">
          {/* Arrow link */}
          <a href={`mailto:${EMAIL}`} className="cta-arrow-wrap" aria-label="Send email" data-magnetic="0.4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>

          {/* "Let's talk" — scrambles on hover */}
          <span
            className="cta-lets-talk"
            onMouseEnter={scrambleTalk}
            style={{ userSelect: 'none' }}
            aria-hidden="true"
          >
            {talkText}
          </span>

          {/* Email copy button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            data-cursor="copy"
            className={`cta-email-btn${copied ? ' copied' : ''}`}
            aria-label={`Copy email address: ${EMAIL}`}
          >
            <span>{EMAIL}</span>
            <span className="cta-copied-feedback" aria-live="polite">
              {copied ? '✓ Great! Email copied' : 'Click to copy'}
            </span>
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
