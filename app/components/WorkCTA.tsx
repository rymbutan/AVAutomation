'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function WorkCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const workTextRef = useRef<HTMLSpanElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const folderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label fades in
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom+=350',
            once: true,
          },
        }
      )

      // "WORK" SplitText char entrance
      if (workTextRef.current) {
        const split = new SplitText(workTextRef.current, { type: 'chars' })
        gsap.fromTo(
          split.chars,
          { yPercent: 60, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.04,
            ease: 'osmo',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom+=350',
              once: true,
            },
          }
        )
      }

      // Folder entrance
      gsap.fromTo(
        folderRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom+=350',
            once: true,
          },
        }
      )

      // Sub text
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom+=350',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work-cta"
      data-nav="grey"
      className="work-cta-section"
      aria-label="Check out my work"
    >
      {/* Label above */}
      <p ref={labelRef} className="work-cta-label">
        Curious?... Check out my
      </p>

      {/* Big WORK text with folder overlaid */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Folder sits in front, between label and WORK text visually */}
        <div ref={folderRef} className="folder-wrap" aria-hidden="true">
          <div className="folder-back" />
          <div className="folder-tab" />
          <div className="folder-front" />
        </div>

        {/* Big WORK */}
        <span
          ref={workTextRef}
          className="work-big"
          aria-label="WORK"
          style={{ display: 'block', textAlign: 'center' }}
        >
          WORK
        </span>
      </div>

      {/* Sub label */}
      <p ref={subRef} className="work-cta-sub">
        Or keep scrolling
      </p>
    </section>
  )
}
