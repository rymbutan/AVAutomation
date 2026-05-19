'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const FEATURED = [
  {
    num: '01',
    title: 'Asana CRM Pipeline & Lead Engagement',
    desc: 'Multi-path workflow that dynamically generates client folders, triggers timed follow-up sequences, and deploys AI-personalized recommendations upon deal closure.',
    tools: ['Zapier', 'Asana', 'AI by Zapier', 'Gmail'],
    img: '/project-01.png',
    year: '2025',
  },
  {
    num: '02',
    title: 'Real-Time Lead Enrichment & AI Scoring',
    desc: 'Automated pipeline that intercepts raw leads via webhooks, enriches profiles using Apollo API, routes by company size, and generates personalized outreach drafts.',
    tools: ['Zapier', 'Apollo API', 'Google Sheets', 'AI by Zapier'],
    img: '/project-02.png',
    year: '2025',
  },
]

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.featured-card').forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'osmo',
            scrollTrigger: { trigger: card, start: 'top bottom+=350', once: true },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="featured"
      data-nav="grey"
      className="featured-section"
      aria-label="Featured projects"
    >
      <div className="featured-header">
        <span className="featured-eyebrow">Selected Work</span>
        <Link href="/work" className="featured-view-all" aria-label="View all projects">
          View all
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
          </svg>
        </Link>
      </div>

      <div className="featured-grid">
        {FEATURED.map((p) => (
          <article key={p.num} className="featured-card" aria-label={p.title}>
            <div className="featured-img-wrap">
              <img src={p.img} alt={`${p.title} workflow screenshot`} />
            </div>
            <div className="featured-info">
              <div className="featured-meta">
                <span className="featured-num">{p.num}</span>
                <span className="featured-year">{p.year}</span>
              </div>
              <h3 className="featured-title">{p.title}</h3>
              <p className="featured-desc">{p.desc}</p>
              <div className="featured-tools">
                {p.tools.map((t) => (
                  <span key={t} className="featured-tool-tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
