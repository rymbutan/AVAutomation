'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const serviceGradients = [
  [
    'linear-gradient(135deg, #ffbc95 0%, #f99e76 100%)',
    'linear-gradient(135deg, #e8e9ef 0%, #d8d9e5 100%)',
    'linear-gradient(135deg, #faf6ef 0%, #f0e8d8 100%)',
    'linear-gradient(135deg, #f4f4f4 0%, #e0e0e0 100%)',
  ],
  [
    'linear-gradient(135deg, #2e54fe20 0%, #2e54fe40 100%)',
    'linear-gradient(135deg, #ffbc95 0%, #ffe0cc 100%)',
    'linear-gradient(135deg, #e8e9ef 0%, #c8c9cf 100%)',
    'linear-gradient(135deg, #f99e76 0%, #f4d0b8 100%)',
  ],
  [
    'linear-gradient(135deg, #f4f4f4 0%, #e8e8e8 100%)',
    'linear-gradient(135deg, #ffbc95 0%, #f99e76 100%)',
    'linear-gradient(135deg, #e8e9ef 0%, #d4d5dd 100%)',
    'linear-gradient(135deg, #faf6ef 0%, #f5e8d0 100%)',
  ],
  [
    'linear-gradient(135deg, #2e54fe15 0%, #2e54fe30 100%)',
    'linear-gradient(135deg, #f99e76 0%, #ffbc95 100%)',
    'linear-gradient(135deg, #e8e9ef 0%, #dde0f0 100%)',
    'linear-gradient(135deg, #f4f4f4 0%, #e5e5e5 100%)',
  ],
]

// ── Tool logo SVGs ───────────────────────────────────────────
function ZapierLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Zapier" role="img">
      <rect width="256" height="256" rx="48" fill="#FF4A00"/>
      <path d="M155 74H101l42 54H101M155 182H101l42-54H101" stroke="#fff" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MakeLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Make.com" role="img">
      <rect width="256" height="256" rx="48" fill="#6D00CC"/>
      <circle cx="52"  cy="128" r="28" fill="#fff"/>
      <circle cx="128" cy="128" r="28" fill="#fff"/>
      <circle cx="204" cy="128" r="28" fill="#fff"/>
      <line x1="80"  y1="128" x2="100" y2="128" stroke="#fff" strokeWidth="12" strokeLinecap="round"/>
      <line x1="156" y1="128" x2="176" y2="128" stroke="#fff" strokeWidth="12" strokeLinecap="round"/>
    </svg>
  )
}

function N8nLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="n8n" role="img">
      <rect width="256" height="256" rx="48" fill="#EA4B71"/>
      <path fillRule="evenodd" clipRule="evenodd" fill="#fff"
        d="M213 96c-9.4 0-17.4-6-19.8-14.4H172c-5.2 0-9.5 3.7-10.3 8.8l-.9 5.5c-.8 5-3.2 9.5-6.7 13 3.5 3.4 5.9 7.9 6.7 12.9l.9 5.5c.8 5.1 5.1 8.8 10.3 8.8h2.9c2.4-8.4 10.4-14.4 19.8-14.4 11.5 0 20.8 9.3 20.8 20.8s-9.3 20.8-20.8 20.8c-9.4 0-17.4-6-19.8-14.4H172c-10.1 0-18.7-7.2-20.4-17.2l-.9-5.9c-.8-5.1-5.1-8.8-10.3-8.8h-8.1c-2.4 8.4-10.4 14.4-19.8 14.4s-17.4-6-19.8-14.4H81c-2.4 8.4-10.4 14.4-19.8 14.4C50.3 131.3 41 122 41 110.5s9.3-20.8 20.8-20.8c9.4 0 17.4 6 19.8 14.4h11.6c2.4-8.4 10.4-14.4 19.8-14.4s17.4 6 19.8 14.4h8.1c5.2 0 9.5-3.7 10.3-8.8l.9-5.5c1.7-10 10.3-17.2 20.4-17.2l22.2-.1c2.4-8.4 10.4-14.4 19.8-14.4 11.5 0 20.8 9.3 20.8 20.8S224.5 96 213 96z"
      />
    </svg>
  )
}

function GHLLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="GoHighLevel" role="img">
      <rect width="256" height="256" rx="48" fill="#0062FF"/>
      <text x="128" y="148" textAnchor="middle" fontFamily="Arial Black, sans-serif"
        fontWeight="900" fontSize="88" fill="#fff" letterSpacing="-4">GHL</text>
    </svg>
  )
}

function HubSpotLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="HubSpot" role="img">
      <rect width="256" height="256" rx="48" fill="#FF7A59"/>
      <circle cx="128" cy="108" r="34" fill="none" stroke="#fff" strokeWidth="18"/>
      <circle cx="128" cy="56"  r="13" fill="#fff"/>
      <circle cx="184" cy="108" r="13" fill="#fff"/>
      <circle cx="72"  cy="108" r="13" fill="#fff"/>
      <rect x="119" y="142" width="18" height="58" rx="9" fill="#fff"/>
    </svg>
  )
}

function AirtableLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Airtable" role="img">
      <rect width="256" height="256" rx="48" fill="#FCB400"/>
      <path d="M32 80 L128 48 L224 80 L128 112 Z" fill="#fff"/>
      <path d="M136 120 L136 210 L218 178 L218 88 Z" fill="rgba(255,255,255,0.85)"/>
      <path d="M120 120 L120 210 L38 178 L38 88 Z" fill="rgba(255,255,255,0.65)"/>
    </svg>
  )
}

function MailchimpLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Mailchimp" role="img">
      <rect width="256" height="256" rx="48" fill="#FFE01B"/>
      <ellipse cx="128" cy="122" rx="62" ry="72" fill="#221F20"/>
      <ellipse cx="128" cy="108" rx="46" ry="50" fill="#FFE01B"/>
      <circle cx="110" cy="108" r="8" fill="#221F20"/>
      <circle cx="146" cy="108" r="8" fill="#221F20"/>
      <path d="M112 128 Q128 142 144 128" fill="none" stroke="#221F20" strokeWidth="6" strokeLinecap="round"/>
      <ellipse cx="128" cy="180" rx="22" ry="12" fill="#221F20"/>
    </svg>
  )
}

function NotionLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Notion" role="img">
      <rect width="256" height="256" rx="48" fill="#fff"/>
      <path d="M60 44 L168 44 C188 44 196 54 196 70 L196 186 C196 202 188 212 168 212 L88 212 L60 186 L60 44Z" fill="#fff" stroke="#e5e5e5" strokeWidth="4"/>
      <path d="M60 186 L88 186 L88 212 Z" fill="#ccc"/>
      <text x="128" y="158" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="110" fill="#191919">N</text>
    </svg>
  )
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Slack" role="img">
      <rect width="256" height="256" rx="48" fill="#fff"/>
      {/* Red */}
      <rect x="56" y="96" width="40" height="40" rx="20" fill="#E01E5A"/>
      <rect x="56" y="56" width="40" height="40" rx="20" fill="#E01E5A"/>
      {/* Yellow */}
      <rect x="96" y="56" width="40" height="40" rx="20" fill="#ECB22E"/>
      <rect x="136" y="56" width="40" height="40" rx="20" fill="#ECB22E"/>
      {/* Green */}
      <rect x="160" y="96" width="40" height="40" rx="20" fill="#2EB67D"/>
      <rect x="160" y="136" width="40" height="40" rx="20" fill="#2EB67D"/>
      {/* Blue */}
      <rect x="96" y="160" width="40" height="40" rx="20" fill="#36C5F0"/>
      <rect x="56" y="160" width="40" height="40" rx="20" fill="#36C5F0"/>
    </svg>
  )
}

function NextjsLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Next.js" role="img">
      <circle cx="128" cy="128" r="128" fill="#000"/>
      <path d="M212 220 L100 72 L84 72 L84 184 L100 184 L100 95 L196 228 Z" fill="#fff"/>
      <rect x="84" y="72" width="16" height="112" fill="#fff"/>
    </svg>
  )
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="React" role="img">
      <rect width="256" height="256" rx="48" fill="#20232A"/>
      <ellipse cx="128" cy="128" rx="90" ry="34" fill="none" stroke="#61DAFB" strokeWidth="10"/>
      <ellipse cx="128" cy="128" rx="90" ry="34" fill="none" stroke="#61DAFB" strokeWidth="10" transform="rotate(60 128 128)"/>
      <ellipse cx="128" cy="128" rx="90" ry="34" fill="none" stroke="#61DAFB" strokeWidth="10" transform="rotate(120 128 128)"/>
      <circle cx="128" cy="128" r="14" fill="#61DAFB"/>
    </svg>
  )
}

function SupabaseLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Supabase" role="img">
      <rect width="256" height="256" rx="48" fill="#1C1C1C"/>
      <path d="M142 32 L68 148 L120 148 L114 224 L188 108 L136 108 Z" fill="#3ECF8E"/>
    </svg>
  )
}

function GoogleWorkspaceLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="Google Workspace" role="img">
      <rect width="256" height="256" rx="48" fill="#fff"/>
      <path d="M228 128 C228 82 194 44 148 36 L148 92 C168 98 182 112 182 128 Z" fill="#4285F4"/>
      <path d="M148 220 C194 212 228 174 228 128 L182 128 C182 152 168 168 148 174 Z" fill="#34A853"/>
      <path d="M74 174 C54 160 42 146 38 128 L74 128 L74 174Z" fill="#FBBC05"/>
      <path d="M128 32 C108 32 90 38 76 50 L114 88 C118 86 122 86 128 86 C148 86 164 98 170 114 L214 76 C196 50 164 32 128 32Z" fill="#EA4335"/>
      <path d="M38 128 C38 82 74 44 128 44 L128 86 C98 86 74 104 74 128 Z" fill="#FBBC05"/>
      <circle cx="128" cy="128" r="42" fill="#fff"/>
      <path d="M128 86 L214 86 L214 128 L128 128 Z" fill="#4285F4"/>
    </svg>
  )
}

function AsanaLogo() {
  return (
    <svg viewBox="0 0 251 232" aria-label="Asana" role="img">
      <rect x="-12" y="-12" width="275" height="256" rx="48" fill="#F06A6A"/>
      <circle cx="125" cy="60"  r="42" fill="#fff"/>
      <circle cx="54"  cy="176" r="42" fill="#fff"/>
      <circle cx="196" cy="176" r="42" fill="#fff"/>
    </svg>
  )
}

function TypeScriptLogo() {
  return (
    <svg viewBox="0 0 256 256" aria-label="TypeScript" role="img">
      <rect width="256" height="256" rx="48" fill="#3178C6"/>
      <path d="M150 200 L150 227 C154 229 159 231 165 232 C171 233 177 234 184 234 C190 234 196 233 202 232 C208 231 213 228 217 225 C221 222 225 218 227 213 C230 208 231 202 231 195 C231 190 230 186 229 182 C227 178 225 175 222 172 C219 169 215 166 211 164 C207 162 202 160 197 158 C193 156 190 155 187 153 C184 152 182 150 180 149 C178 147 177 146 176 144 C175 143 174 141 174 139 C174 137 174 135 175 134 C176 132 177 131 179 130 C180 129 182 128 185 127 C187 127 190 126 193 126 C195 126 197 126 199 127 C202 127 204 128 207 129 C209 130 211 131 214 132 C216 134 218 135 220 137 L220 112 C216 111 212 110 207 109 C202 108 196 108 189 108 C183 108 177 109 171 110 C165 111 160 113 155 116 C151 119 147 123 144 128 C141 132 140 138 140 145 C140 153 142 160 147 165 C152 171 159 176 169 180 C173 181 176 183 179 184 C182 186 184 188 186 190 C188 191 189 193 190 195 C191 197 191 199 191 201 C191 203 190 205 189 207 C188 208 187 210 185 211 C183 212 181 213 178 213 C173 213 168 212 162 210 C157 207 152 204 148 200 Z" fill="#fff"/>
      <path d="M104 131 L140 131 L140 109 L41 109 L41 131 L77 131 L77 233 L104 233 Z" fill="#fff"/>
    </svg>
  )
}

const TOOL_LOGOS: Record<string, React.ReactNode> = {
  'Zapier':           <ZapierLogo />,
  'Make.com':         <MakeLogo />,
  'n8n':              <N8nLogo />,
  'GoHighLevel':      <GHLLogo />,
  'HubSpot':          <HubSpotLogo />,
  'Airtable':         <AirtableLogo />,
  'Mailchimp':        <MailchimpLogo />,
  'Notion':           <NotionLogo />,
  'Slack':            <SlackLogo />,
  'Next.js':          <NextjsLogo />,
  'React':            <ReactLogo />,
  'TypeScript':       <TypeScriptLogo />,
  'Supabase':         <SupabaseLogo />,
  'Google Workspace': <GoogleWorkspaceLogo />,
  'Asana':            <AsanaLogo />,
}

const services = [
  {
    num: '01',
    title: 'AI Automation Workflows',
    desc: 'Build intelligent multi-step automations using Zapier, Make.com, and custom AI pipelines that eliminate repetitive tasks and scale operations.',
    tags: ['Zapier', 'Make.com', 'n8n', 'GoHighLevel'],
  },
  {
    num: '02',
    title: 'CRM & Lead Systems',
    desc: 'Design and implement CRM pipelines in HubSpot and GoHighLevel with automated lead routing, nurture sequences, and reporting dashboards.',
    tags: ['HubSpot', 'GoHighLevel', 'Airtable', 'Mailchimp'],
  },
  {
    num: '03',
    title: 'Technical Virtual Assistant',
    desc: 'Provide high-leverage technical support across project management, data ops, content coordination, and cross-functional communication.',
    tags: ['Notion', 'Asana', 'Google Workspace', 'Slack'],
  },
  {
    num: '04',
    title: 'Full-Stack Development',
    desc: 'Develop custom web applications and internal tools with Next.js, React, Supabase, and TypeScript — from MVP to production.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase'],
  },
]

// ── 3-D tilt helpers ────────────────────────────────────────
function applyTilt(el: HTMLElement, e: React.MouseEvent) {
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width  - 0.5   // –0.5 → 0.5
  const y = (e.clientY - rect.top)  / rect.height - 0.5
  gsap.to(el, {
    rotationY:          x * 14,
    rotationX:         -y * 14,
    transformPerspective: 700,
    ease: 'power2.out',
    duration: 0.35,
  })
}
function resetTilt(el: HTMLElement) {
  gsap.to(el, {
    rotationY: 0,
    rotationX: 0,
    duration: 0.7,
    ease: 'elastic.out(1, 0.45)',
  })
}

export default function Services() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const imgRowRefs  = useRef<(HTMLDivElement | null)[]>([])

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

      // Image blocks: clip-path reveal per row
      const blocks = document.querySelectorAll('.service-img-block')
      blocks.forEach((block, i) => {
        gsap.fromTo(block,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.8, ease: 'osmo',
            delay: (i % 4) * 0.08,
            scrollTrigger: { trigger: block.closest('.service-item'), start: 'top bottom+=350', once: true },
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
          I help companies succeed with:
        </h2>
      </div>

      <div className="services-list" role="list">
        {services.map((service, si) => (
          <div key={service.num} className="service-item" role="listitem">
            {/* Left: text */}
            <div className="service-left">
              <span
                className="service-num"
                data-num={parseInt(service.num)}
              >
                {service.num}
              </span>
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
                    {TOOL_LOGOS[tag] && (
                      <span className="service-tag-logo" aria-hidden="true">
                        {TOOL_LOGOS[tag]}
                      </span>
                    )}
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: 3D-tilt image blocks */}
            <div
              ref={(el) => { imgRowRefs.current[si] = el }}
              className="service-images"
              aria-hidden="true"
              onMouseMove={(e) => {
                if (imgRowRefs.current[si])
                  applyTilt(imgRowRefs.current[si]!, e)
              }}
              onMouseLeave={() => {
                if (imgRowRefs.current[si])
                  resetTilt(imgRowRefs.current[si]!)
              }}
            >
              {serviceGradients[si].map((grad, gi) => (
                <div key={gi} className="service-img-block">
                  <div className="service-img-inner" style={{ background: grad }} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
