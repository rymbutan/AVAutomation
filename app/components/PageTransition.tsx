'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const pathname   = usePathname()

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    // Wipe in → hold → wipe out on every route change
    const tl = gsap.timeline()
    tl.set(overlay, { scaleY: 0, transformOrigin: 'bottom' })
    tl.to(overlay,  { scaleY: 1, duration: 0.35, ease: 'power3.inOut' })
    tl.to(overlay,  { scaleY: 0, transformOrigin: 'top', duration: 0.35, ease: 'power3.inOut', delay: 0.05 })
  }, [pathname])

  return (
    <div
      ref={overlayRef}
      className="page-transition-overlay"
      aria-hidden="true"
    />
  )
}
