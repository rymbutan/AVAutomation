'use client'

import { useState, useEffect } from 'react'

const roles = [
  'AI Automation Engineer',
  'Technical Virtual Assistant',
  'Workflow Architect',
  'QA Specialist',
]

const floatingIcons = [
  { icon: '⚡', top: '20%', left: '8%', delay: '0s' },
  { icon: '🤖', top: '60%', left: '6%', delay: '1.5s' },
  { icon: '🔗', top: '15%', right: '10%', delay: '0.8s' },
  { icon: '📊', top: '70%', right: '8%', delay: '2s' },
  { icon: '🛠️', top: '40%', left: '4%', delay: '1s' },
  { icon: '✨', top: '50%', right: '5%', delay: '0.3s' },
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting ? prev.slice(0, -1) : role.slice(0, prev.length + 1)
          )
        },
        isDeleting ? 40 : 90
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-900/20 rounded-full blur-[120px]" />

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xl animate-float backdrop-blur-sm"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 mb-10 animate-fade-in">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          <span className="text-teal-400 text-sm font-medium">
            Open to Part-time Remote Opportunities
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] animate-slide-up">
          I Build Systems That
          <br />
          <span className="gradient-text">Work While You Sleep.</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-lg sm:text-xl text-slate-400">
            I&apos;m Arym &mdash;{' '}
            <span className="text-teal-400 font-semibold">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in">
          A Technical VA and IT professional who architects AI-powered automation workflows,
          orchestrates CRM pipelines, and builds systems that eliminate manual bottlenecks
          — so your team can focus on what actually matters.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up">
          <a href="#projects" className="btn-primary">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Let&apos;s Collaborate
          </a>
        </div>

        {/* Tool badges */}
        <div className="flex flex-wrap gap-2 justify-center animate-fade-in">
          {['Zapier', 'AI Integration', 'HubSpot', 'GoHighLevel', 'Google Workspace', 'Asana', 'CRM Automation'].map(
            (tool) => (
              <span key={tool} className="tech-pill">
                {tool}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="text-xs">scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
