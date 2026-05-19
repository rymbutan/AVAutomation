'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger, SplitText)

// ─────────────────────────────────────────────────────────────────
//  PROJECTS  —  fill in each field when ready
//  Duplicate a block to add more projects
// ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'project-01',
    num: '01',
    title: 'Asana CRM Pipeline & Lead Engagement System',
    year: '2025',
    status: 'Live',
    challenge: 'The client needed to eliminate manual administrative bottlenecks in their Asana-based CRM and ensure intelligent, consistent follow-up communication across five distinct stages of the lead lifecycle.',
    tools: ['Zapier', 'Asana', 'Google Drive', 'Gmail', 'AI by Zapier', 'Zapier Paths & Delays'],
    outcome: 'Engineered a multi-path workflow triggered by Asana task changes that dynamically generates client Drive folders, triggers timed follow-up sequences, builds service proposal packets, and deploys AI-personalized service recommendations upon deal closure.',
    link: '',
  },
  {
    id: 'project-02',
    num: '02',
    title: 'Real-Time Lead Enrichment & AI Scoring Matrix',
    year: '2025',
    status: 'Live',
    challenge: 'Sales teams were losing efficiency by manually researching, qualifying, and drafting emails for incoming raw leads from various marketing channels.',
    tools: ['Zapier', 'Webhooks', 'Apollo API', 'Google Sheets', 'AI by Zapier', 'Gmail'],
    outcome: 'Built an automated pipeline that intercepts raw lead data via webhooks, enriches profiles using external APIs, dynamically routes leads based on company size/priority, and uses AI to generate personalized outreach drafts before notifying the sales team.',
    link: '',
  },
  {
    id: 'project-03',
    num: '03',
    title: 'AI-Driven Content Repurposing & Social Distribution Engine',
    year: '2025',
    status: 'Live',
    challenge: 'The client required a scalable marketing engine to automatically transform raw audio/video files into comprehensive, multi-channel written content with minimal human input.',
    tools: ['Zapier', 'Google Drive', 'AI by Zapier', 'Formatter', 'Facebook Pages', 'Google Sheets'],
    outcome: 'Designed an automation that detects new media uploads, generates a transcript, uses AI to author two distinct blog articles, crafts tailored social media copy, publishes content to Facebook, and logs all generated assets in a database.',
    link: '',
  },
  {
    id: 'project-04',
    num: '04',
    title: 'Automated Xero Financial Reporting & Asana Sync',
    year: '2024',
    status: 'Live',
    challenge: 'The client needed to automate the extraction of Xero Account Transactions to replace a tedious manual CSV download process required every time a project task was completed.',
    tools: ['Make.com', 'Asana', 'Xero API', 'Google Sheets', 'Make Iterators', 'Text Aggregators'],
    outcome: 'Developed a Make scenario that detects completed Asana tasks, queries the Xero API for annual ledger data, formats raw data into a structured CSV, and automatically attaches the final financial report back to the Asana task.',
    link: '',
  },
  {
    id: 'project-05',
    num: '05',
    title: 'Intelligent Attachment Sorting & AI Renaming System',
    year: '2024',
    status: 'Live',
    challenge: 'The client was overwhelmed by disorganized inbound email attachments and needed an intelligent system to autonomously review, rename, and archive files based on their actual content.',
    tools: ['Make.com', 'Gmail', 'OpenAI API', 'Google Drive', 'Google Sheets', 'PDF Iterators'],
    outcome: 'Created a Make workflow that intercepts incoming emails, iterates through attachments, leverages AI to read document content for context-aware renaming, routes renamed files to specific Google Drive folders, and logs metadata for auditability.',
    link: '',
  },
]

const CROPS: Record<string, { src: string; maxWidth?: string }> = {
  'project-01': { src: '/project-01.png' },
  'project-02': { src: '/project-02.png' },
  'project-03': { src: '/project-03.png', maxWidth: '415px' }, // native res — prevent upscale pixelation
  'project-04': { src: '/project-04.png' },
  'project-05': { src: '/project-05.png' },
}

export default function WorkPage() {
  const [activeId,   setActiveId]   = useState(PROJECTS[0].id)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const headerRef = useRef<HTMLHeadingElement>(null)

  // Pause / resume Lenis when lightbox opens/closes
  useEffect(() => {
    const lenis = (window as Window & { __lenis?: { stop: () => void; start: () => void } }).__lenis
    if (lightboxSrc) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [lightboxSrc])

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxSrc(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ── Active dot: track which project is in view ─────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    PROJECTS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-15% 0px -70% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // ── GSAP entrance animations ───────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header title char stagger
      if (headerRef.current) {
        const split = new SplitText(headerRef.current, { type: 'chars' })
        gsap.fromTo(
          split.chars,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.025, ease: 'osmo', delay: 1.2 }
        )
      }

      // Each project fades up on scroll
      document.querySelectorAll('.work-project').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 48 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'osmo',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        )
      })

      // Project titles: clip reveal
      document.querySelectorAll('.work-project-title').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'osmo',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }
        )
      })

      // Single image block per project: clip reveal
      document.querySelectorAll('.work-project .work-img-block').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.75, ease: 'osmo',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
    {/* ── Lightbox ── */}
    {lightboxSrc && (
      <div
        className="work-lightbox"
        onClick={() => setLightboxSrc(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Project image fullscreen"
      >
        <button className="work-lightbox-close" onClick={() => setLightboxSrc(null)} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <img
          src={lightboxSrc}
          alt="Project workflow fullscreen"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    <main className="work-page">
      {/* ── Page header ─────────────────────────────────────────── */}
      <header className="work-page-header" data-nav="grey">
        <div className="work-header-inner">
          <span className="work-header-tag">Portfolio · {PROJECTS.length} projects</span>
          <div className="section-heading-overflow">
            <h1 ref={headerRef} className="work-header-title" style={{ opacity: 0 }}>
              Work
            </h1>
          </div>
          <p className="work-header-sub">
            Automation systems, CRM pipelines &amp; full-stack builds.
          </p>
        </div>

        <Link href="/" className="work-back-link" aria-label="Back to home">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          Back home
        </Link>
      </header>

      {/* ── Two-column layout ────────────────────────────────────── */}
      <div className="work-layout">

        {/* ── Sticky sidebar nav ─────────────────────────────────── */}
        <aside className="work-sidebar" aria-label="Project navigation">
          <p className="work-sidebar-label">Projects</p>
          <nav className="work-nav-list">
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className={`work-nav-item${activeId === p.id ? ' is-active' : ''}`}
              >
                <div className="work-nav-dot" aria-hidden="true" />
                <a href={`#${p.id}`} className="work-nav-link">
                  <span className="work-nav-num">{p.num}</span>
                  <span className="work-nav-name">{p.title}</span>
                </a>
              </div>
            ))}
          </nav>
        </aside>

        {/* ── Scrollable projects ─────────────────────────────────── */}
        <div className="work-content">
          {PROJECTS.map((project) => {
            const crop = CROPS[project.id]
            return (
              <article
                key={project.id}
                id={project.id}
                className="work-project"
                aria-label={`Project ${project.num}: ${project.title}`}
              >
                {/* ── Meta row ── */}
                <div className="work-project-inner">

                  {/* Col 1 — Title + year + status */}
                  <div className="work-project-col work-project-col--first">
                    {/* ↓ Replace "Project Title" */}
                    <h2 className="work-project-title">{project.title}</h2>
                    <div className="work-project-meta-row">
                      <span className="work-project-year">{project.year}</span>
                      <span
                        className="work-project-status"
                        data-status={project.status.toLowerCase().replace(' ', '-')}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="work-project-dot" aria-hidden="true" />

                    {/* Optional live link — remove if not needed */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-project-link"
                        aria-label={`View ${project.title} live`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          aria-hidden="true">
                          <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                        </svg>
                        See it live
                      </a>
                    )}
                  </div>

                  {/* Col 2 — Challenge */}
                  <div className="work-project-col">
                    <p className="work-meta-label">Challenge:</p>
                    {/* ↓ Replace "—" with the challenge description */}
                    <p className="work-meta-text">{project.challenge}</p>
                  </div>

                  {/* Col 3 — Tools & Services */}
                  <div className="work-project-col">
                    <p className="work-meta-label">Tools &amp; Services:</p>
                    {/* ↓ Replace tags */}
                    <div className="work-tags">
                      {project.tools.map((tag) => (
                        <span key={tag} className="work-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Col 4 — Outcome */}
                  <div className="work-project-col">
                    <p className="work-meta-label">Outcome:</p>
                    {/* ↓ Replace "—" with the result/impact */}
                    <p className="work-meta-text">{project.outcome}</p>
                  </div>
                </div>

                {/* ── Media ─────────────────────────────────────── */}
                <div
                  className="work-img-block work-img-block--cover work-img-clickable"
                  aria-label={`${project.title} workflow — click to enlarge`}
                  onClick={() => setLightboxSrc(crop.src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightboxSrc(crop.src)}
                >
                  <img
                    src={crop.src}
                    alt={`${project.title} workflow screenshot`}
                    style={crop.maxWidth ? { maxWidth: crop.maxWidth, margin: '0 auto' } : undefined}
                  />
                  <div className="work-img-expand-hint" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </main>
    </>
  )
}
