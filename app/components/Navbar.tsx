'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { gsap } from 'gsap'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const navRef        = useRef<HTMLElement>(null)
  const menuRef       = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const pathname      = usePathname()
  const isWork        = pathname === '/work'

  // Helpers: resolve home-page anchors vs full paths
  const homeHref  = (anchor: string) => isWork ? `/${anchor}` : anchor
  const workHref  = '/work'

  // Navbar blur — add .is-scrolled once user leaves hero
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Nav colour theme — IntersectionObserver on [data-nav] sections
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = (entry.target as HTMLElement).dataset.nav
            theme === 'peach'
              ? nav.classList.add('is-peach')
              : nav.classList.remove('is-peach')
          }
        })
      },
      { rootMargin: '-50px 0px -90% 0px' }
    )

    document.querySelectorAll('[data-nav]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Animate mobile menu open/close
  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    if (open) {
      gsap.set(menu, { display: 'flex' })
      gsap.fromTo(menu,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      )
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(menu, {
        opacity: 0, y: -8, duration: 0.22, ease: 'power2.in',
        onComplete: () => gsap.set(menu, { display: 'none' }),
      })
      document.body.style.overflow = ''
    }
  }, [open])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLink = () => setOpen(false)

  return (
    <>
      <header ref={navRef} className="navbar" aria-label="Main navigation">
        {/* Left — Name logo */}
        <Link href="/" className="nav-logo" aria-label="Arym Vendiola — home">
          Arym · Vendiola
        </Link>

        {/* Center — desktop nav links */}
        <nav className="nav-center" aria-label="Primary">
          <a href={homeHref('#services')} className="nav-link">About</a>
          {/*
            ── LOGO MARK ──────────────────────────────────────────────
            Replace the SVG below with your own logo, Lottie animation,
            or any mark. Keep the <Link> wrapper and .nav-logo-mark class.
            Reference: juanmora.co uses a 38px Lottie initials animation.
            ─────────────────────────────────────────────────────────── */}
          <Link href="/" aria-label="Home" className="nav-logo-mark">
            <svg
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              aria-hidden="true"
            >
              {/* ↓ Your logo goes here — currently an "AV" monogram */}
              <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="var(--font-jakarta), system-ui, sans-serif"
                fontWeight="800"
                fontSize="15"
                letterSpacing="-0.5"
                fill="currentColor"
              >
                AV
              </text>
            </svg>
          </Link>
          <Link
            href={workHref}
            className={`nav-link${isWork ? ' nav-link--active' : ''}`}
          >
            Work
          </Link>
        </nav>

        {/* Right — social links + mobile hamburger */}
        <div className="nav-right">
          <a href="mailto:arymsrv@gmail.com" className="nav-social" aria-label="Email">Email</a>
          <a href="https://linkedin.com/in/arym-vendiola" className="nav-social"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`ham-line${open ? ' open' : ''}`} />
            <span className={`ham-line${open ? ' open' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div ref={menuRef} className="mobile-menu" aria-hidden={!open} style={{ display: 'none' }}>
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          <Link href="/"        className="mobile-menu-link" onClick={handleLink}>Home</Link>
          <a href={homeHref('#services')} className="mobile-menu-link" onClick={handleLink}>About</a>
          <Link href="/work"    className="mobile-menu-link" onClick={handleLink}>Work</Link>
          <a href="mailto:arymsrv@gmail.com" className="mobile-menu-link" onClick={handleLink}>Email</a>
          <a href="https://linkedin.com/in/arym-vendiola" className="mobile-menu-link"
            target="_blank" rel="noopener noreferrer" onClick={handleLink}>LinkedIn</a>
        </nav>
      </div>
    </>
  )
}
