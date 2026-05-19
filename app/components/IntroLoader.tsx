'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function IntroLoader() {
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = loaderRef.current
    if (!loader) return

    // Prevent scroll during intro
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        // Remove from DOM and restore scroll
        loader.remove()
        document.body.style.overflow = ''
      },
    })

    tl.to(loader, {
      yPercent: -100,
      duration: 0.8,
      ease: 'osmo',
      delay: 0.4,
    })

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div ref={loaderRef} className="intro-loader" aria-hidden="true">
      <span className="intro-loader-name">Arym · Vendiola</span>
    </div>
  )
}
