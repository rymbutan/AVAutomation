'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const cursor = cursorRef.current
    if (!cursor) return

    // Lag-follow state — Juan Mora's deltaRatio formula
    const pos = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }
    let visible = false
    let tickerAdded = false

    function tick() {
      const dt = 1.0 - Math.pow(1.0 - 0.09, gsap.ticker.deltaRatio())
      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      gsap.set(cursor, { x: pos.x, y: pos.y })
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY

      if (!visible) {
        visible = true
        gsap.to(cursor, { opacity: 1, duration: 0.6, ease: 'power2.out' })
      }

      if (!tickerAdded) {
        tickerAdded = true
        gsap.ticker.add(tick)
      }
    }

    function onMouseLeave() {
      gsap.to(cursor, { opacity: 0, duration: 0.4 })
      visible = false
    }

    function onMouseEnter() {
      if (visible) {
        gsap.to(cursor, { opacity: 1, duration: 0.3 })
      }
    }

    // Email copy cursor state
    function bindEmailCta() {
      if (!cursor) return
      document.querySelectorAll('[data-cursor="copy"]').forEach((el) => {
        el.addEventListener('mouseenter', () => cursor!.classList.add('is-copy'))
        el.addEventListener('mouseleave', () => cursor!.classList.remove('is-copy'))
      })
    }

    // Magnetic pull — buttons/links with data-magnetic attract the cursor
    function bindMagnetic() {
      document.querySelectorAll('[data-magnetic]').forEach((el) => {
        const element = el as HTMLElement
        const strength = parseFloat(element.dataset.magnetic || '0.35')

        element.addEventListener('mousemove', (e: Event) => {
          const me = e as MouseEvent
          const rect = element.getBoundingClientRect()
          const cx = rect.left + rect.width  / 2
          const cy = rect.top  + rect.height / 2
          gsap.to(element, {
            x: (me.clientX - cx) * strength,
            y: (me.clientY - cy) * strength,
            duration: 0.4,
            ease: 'power2.out',
          })
        })
        element.addEventListener('mouseleave', () => {
          gsap.to(element, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
        })
      })
    }

    // Grow cursor on hoverable elements
    function bindHover() {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => cursor!.classList.add('is-hover'))
        el.addEventListener('mouseleave', () => cursor!.classList.remove('is-hover'))
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    const timer = setTimeout(() => {
      bindEmailCta()
      bindMagnetic()
      bindHover()
    }, 800)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      clearTimeout(timer)
      if (tickerAdded) gsap.ticker.remove(tick)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={cursorRef}
      className="cursor-jm"
      aria-hidden="true"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <div className="cursor-jm-icon">
        {/* Arrow SVG */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
      <div className="text-jm-cursor">Copy email</div>
    </div>
  )
}
