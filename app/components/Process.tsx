// Static section: no scroll animation, so content can never get stuck hidden.

const STEPS = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'A short call to understand the process you want gone, the tools involved and what “done” looks like.',
  },
  {
    num: '02',
    title: 'Map & scope',
    desc: 'I map the current workflow, flag risks, and send a clear scope: what gets built, what it connects to and how we will know it works.',
  },
  {
    num: '03',
    title: 'Build & test',
    desc: 'I build inside your accounts and test against real edge cases, with async updates so you always know where things stand.',
  },
  {
    num: '04',
    title: 'Handoff',
    desc: 'Written documentation and a walkthrough, so your team can run it, change it and own it.',
  },
]

export default function Process() {
  return (
    <section id="process" data-nav="grey" className="process-section" aria-label="How we work together">
      <span className="featured-eyebrow">How we work together</span>
      <h2 className="process-heading">Four steps from “this is painful” to “it just runs”.</h2>
      <ol className="process-list">
        {STEPS.map((s) => (
          <li key={s.num} className="process-step">
            <span className="process-num" aria-hidden="true">{s.num}</span>
            <h3 className="process-title">{s.title}</h3>
            <p className="process-desc">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
