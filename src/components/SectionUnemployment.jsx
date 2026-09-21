import Reveal from './Reveal.jsx'
import SectionTag from './SectionTag.jsx'
import StatCard from './StatCard.jsx'

export default function SectionUnemployment() {
  return (
    <section id="unemployment" className="relative bg-indigo text-parchment py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1400&q=45"
          alt="Crowd of young people at a public demonstration"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo via-indigo/95 to-indigo" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionTag index="02" label="Youth Unemployment Crisis" tone="parchment" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-balance">
                "The future scares me": a generation locked out of work
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-6 space-y-5 text-parchment/80 leading-relaxed text-[1.05rem]">
              <p>
                As <em>The Guardian</em> reported on September 12, 2026, youth
                unemployment has become the single biggest election issue for young
                New Zealand voters — a defining anxiety shaping how an entire
                generation views its future.
              </p>
              <p>
                Roughly <strong className="text-clay font-semibold">180,000 young people</strong> aged
                15 to 24 are currently unemployed or underemployed. Around{' '}
                <strong className="text-clay font-semibold">37%</strong> of this age group face
                this reality, driven by lingering post-pandemic economic struggles
                that have blocked financial independence and stable income for a
                generation entering adulthood.
              </p>
              <p className="border-l-2 border-clay pl-5 italic text-parchment/90">
                "The future scares me." — a sentiment echoed by young voters across
                the country heading into the election.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center gap-8 mt-4 lg:mt-0">
            <StatCard figure="180K" label="young people (15–24) unemployed or underemployed" tone="parchment" delay={0.1} />
            <StatCard figure="37%" label="of NZ youth affected by the crisis" tone="parchment" delay={0.2} />
          </div>
        </div>
      </div>
    </section>
  )
}
