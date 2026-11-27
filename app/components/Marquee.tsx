'use client'

const TOOLS = ['Zapier', 'Make.com', 'OpenAI', 'HubSpot', 'Asana', 'Google Drive', 'Xero', 'Gmail']

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const tripled = [...TOOLS, ...TOOLS, ...TOOLS]

  return (
    <div className="marquee-wrap" aria-hidden="true" data-nav="grey">
      <div
        className="marquee-track"
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {tripled.map((tool, i) => (
          <span key={i} className="marquee-item">
            {tool}
            <span className="marquee-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
