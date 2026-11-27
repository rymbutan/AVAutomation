// Static section: no scroll animation, so content can never get stuck hidden.

const FACTS = [
  { value: '5+', label: 'years working remotely with international teams' },
  { value: '5', label: 'automation systems shipped (Zapier & Make)' },
  { value: '4', label: 'time zones covered: EST, PST, GMT, AEST' },
]

export default function About() {
  return (
    <section id="about" data-nav="grey" className="about-section" aria-label="About Arym">
      <div className="about-copy">
        <span className="featured-eyebrow">About</span>
        <h2 className="about-heading">Operations brain, automation hands.</h2>
        <p>
          I&apos;m Arym, a freelance automation specialist based in Lucban, Philippines. For nearly
          five years I&apos;ve worked remotely with international teams across QA, client
          communication and, most recently at MBG Media, building the Zapier and Make workflows
          that ran their lead handling and content.
        </p>
        <p>
          Years of teaching English taught me to explain complicated things plainly, which is most
          of what good documentation is. I&apos;m also finishing a BS in Information Technology
          (2027), so when a no-code tool hits its limit I can build the custom piece myself.
        </p>
        <p className="about-setup">
          Fiber internet, 3-hour power backup and a dedicated office, so I&apos;m reliably online.
        </p>
      </div>

      <dl className="about-facts">
        {FACTS.map((f) => (
          <div key={f.label} className="about-fact">
            <dt className="about-fact-value">{f.value}</dt>
            <dd className="about-fact-label">{f.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
