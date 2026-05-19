'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText)

// Register the "osmo" easing — exact copy of Juan Mora's custom ease
CustomEase.create('osmo', '0.625, 0.05, 0, 1')

// Set global GSAP defaults
gsap.defaults({
  overwrite: 'auto',
  ease: 'osmo',
  duration: 0.6,
})

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Initialize Lenis with lerp (not duration-based) — matches Juan Mora
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis
    // Expose globally so any component can pause/resume
    ;(window as Window & { __lenis?: Lenis }).__lenis = lenis

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Pure rAF loop — not GSAP ticker
    function raf(time: number) {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafRef.current)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
