'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)


// ── Images per service ────────────────────────────────────────
const SERVICE_IMAGES: Record<string, { src: string; alt: string; pos?: string }[]> = {
  '01': [
    { src: '/project-01.png', alt: 'Asana CRM multi-path automation workflow', pos: 'center 20%' },
    { src: '/project-02.png', alt: 'Lead enrichment and AI scoring pipeline',  pos: 'center top' },
    { src: '/project-03.png', alt: 'AI content repurposing automation',         pos: 'center top' },
  ],
  '02': [
    { src: '/project-01.png', alt: 'Asana CRM pipeline stages',     pos: 'center 50%' },
    { src: '/project-02.png', alt: 'Lead scoring and routing flow',  pos: 'center 40%' },
  ],
  '03': [
    { src: '/project-03.png', alt: 'Content distribution automation', pos: 'center 30%' },
    { src: '/project-04.png', alt: 'Xero financial reporting sync',   pos: 'center center' },
  ],
  // '04' (Full-Stack) intentionally has no images until dev project screenshots exist
}

// ── Carousel sub-component ────────────────────────────────────
function ServiceCarousel({ serviceNum }: { serviceNum: string }) {
  const images  = SERVICE_IMAGES[serviceNum] ?? []
  const [idx, setIdx]         = useState(0)
  const [fading, setFading]   = useState(false)
  const timerRef              = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX           = useRef(0)

  const goTo = useCallback((next: number) => {
    if (fading || next === idx) return
    setFading(true)
    setTimeout(() => {
      setIdx(next)
      setFading(false)
    }, 280)
  }, [fading, idx])

  // Auto-advance
  useEffect(() => {
    if (images.length <= 1) return
    timerRef.current = setTimeout(() => goTo((idx + 1) % images.length), 3800)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [idx, images.length, goTo])

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) goTo(delta > 0
      ? (idx + 1) % images.length
      : (idx - 1 + images.length) % images.length
    )
  }

  if (!images.length) return null
  const img = images[idx]

  return (
    <div
      className="svc-carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label={`Service ${serviceNum} screenshot carousel`}
    >
      <div className={`svc-carousel-slide${fading ? ' svc-carousel-slide--fading' : ''}`}>
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: img.pos ?? 'center center' }}
        />
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="svc-carousel-dots" role="tablist" aria-label="Slide indicators">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Slide ${i + 1}`}
              className={`svc-carousel-dot${i === idx ? ' svc-carousel-dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            className="svc-carousel-arrow svc-carousel-arrow--prev"
            aria-label="Previous slide"
            onClick={() => goTo((idx - 1 + images.length) % images.length)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            className="svc-carousel-arrow svc-carousel-arrow--next"
            aria-label="Next slide"
            onClick={() => goTo((idx + 1) % images.length)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

const services = [
  {
    num: '01',
    kicker: 'AI Automation Workflows',
    title: 'Repetitive work that runs without you',
    desc: 'Lead intake, follow-ups, reporting and content publishing turned into reliable Zapier, Make and n8n workflows, with AI added only where it earns its place.',
    tags: ['Zapier', 'Make.com', 'n8n', 'GoHighLevel'],
  },
  {
    num: '02',
    kicker: 'CRM & Lead Systems',
    title: 'Leads that never fall through the cracks',
    desc: 'HubSpot and GoHighLevel pipelines with automated routing, scoring and follow-up sequences, so every lead is handled quickly and nothing is lost in a handoff.',
    tags: ['HubSpot', 'GoHighLevel', 'Airtable', 'Mailchimp'],
  },
  {
    num: '03',
    kicker: 'Technical Virtual Assistant',
    title: 'A technical right hand',
    desc: 'Project management, data ops and tool setup handled by someone who can also fix the automation behind it. Documented, async-friendly and easy to hand off.',
    tags: ['Notion', 'Asana', 'Google Workspace', 'Slack'],
  },
  {
    num: '04',
    kicker: 'Full-Stack Development',
    title: 'Custom tools when no-code runs out',
    desc: 'Web apps and internal tools in Next.js, React, Supabase and TypeScript, built when an off-the-shelf tool or a Zap is not enough.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase'],
  },
]

export default function Services() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading SplitText entrance
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: 'chars' })
        gsap.fromTo(split.chars,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0, opacity: 1,
            duration: 0.7, stagger: 0.015, ease: 'osmo',
            scrollTrigger: { trigger: headingRef.current, start: 'top bottom+=350', once: true },
          }
        )
      }

      // Carousel reveal: clip-path wipe per carousel
      document.querySelectorAll('.svc-carousel').forEach((el) => {
        gsap.fromTo(el,
          { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0% 0 0 0)', opacity: 1,
            duration: 0.9, ease: 'osmo',
            scrollTrigger: { trigger: el.closest('.service-item'), start: 'top bottom+=350', once: true },
          }
        )
      })

      // Service text: slide in from left
      document.querySelectorAll('.service-left').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -24 },
          {
            opacity: 1, x: 0, duration: 0.6, ease: 'osmo',
            scrollTrigger: { trigger: el, start: 'top bottom+=350', once: true },
          }
        )
      })

      // Number counter — counts up to the number on scroll-in
      document.querySelectorAll('.service-num').forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.num ?? '0')
        const proxy = { val: 0 }
        gsap.fromTo(proxy,
          { val: 0 },
          {
            val: target,
            duration: 0.8,
            ease: 'power2.out',
            onUpdate: () => {
              ;(el as HTMLElement).textContent = String(Math.round(proxy.val)).padStart(2, '0')
            },
            scrollTrigger: { trigger: el, start: 'top bottom+=350', once: true },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Hover shimmer on service title: brief brightness flash
  const handleTitleHover = useCallback((el: HTMLElement) => {
    gsap.fromTo(el,
      { filter: 'brightness(1)' },
      { filter: 'brightness(1.35)', duration: 0.18, yoyo: true, repeat: 1 }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      data-nav="grey"
      className="services-section"
      aria-label="Services"
    >
      <div className="section-heading-overflow">
        <h2 ref={headingRef} className="services-heading">
          What I can take off your plate
        </h2>
      </div>

      <div className="services-list" role="list">
        {services.map((service) => (
          <div
            key={service.num}
            className={`service-item${SERVICE_IMAGES[service.num] ? '' : ' service-item--text'}`}
            role="listitem"
          >
            {/* Left: text */}
            <div className="service-left">
              <div className="service-label-row">
                <span
                  className="service-num"
                  data-num={parseInt(service.num)}
                >
                  {service.num}
                </span>
                <span className="service-kicker">{service.kicker}</span>
              </div>
              <h3
                className="service-title"
                onMouseEnter={(e) => handleTitleHover(e.currentTarget)}
              >
                {service.title}
              </h3>
              <p className="service-desc">{service.desc}</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: carousel (skipped when a service has no images) */}
            {SERVICE_IMAGES[service.num] && (
              <div className="service-images">
                <ServiceCarousel serviceNum={service.num} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
