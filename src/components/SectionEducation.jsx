import Reveal from './Reveal.jsx'
import SectionTag from './SectionTag.jsx'
import StatCard from './StatCard.jsx'

export default function SectionEducation() {
  return (
    <section id="education" className="bg-parchment py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionTag index="01" label="Educational Inequality" tone="clay" />
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-balance">
                A progressive nation with a hidden classroom divide
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 space-y-5 text-ink/80 leading-relaxed text-[1.05rem]">
              <p>
                New Zealand markets itself as one of the world's most progressive
                societies. Yet beneath that reputation lies a deep and persistent
                educational inequality that disproportionately affects{' '}
                <strong className="text-ink font-semibold">Māori and Pasifika</strong> communities —
                populations rooted in a colonial past that actively erased their
                language and culture from public life.
              </p>
              <p>
                Māori and Pasifika peoples represent{' '}
                <strong className="text-clay font-semibold">26.7%</strong> of New
                Zealand's population, and demographers project they will make up the{' '}
                <strong className="text-ink font-semibold">majority of primary school classrooms by 2040</strong>.
                Despite this, poverty and systemic barriers continue to shut them
                out of consistent, quality schooling.
              </p>
              <p>
                In 2023, only <strong className="text-clay font-semibold">one in three</strong> Māori
                and Pasifika students attended classes regularly, and{' '}
                <strong className="text-clay font-semibold">78%</strong> left their studies before
                ever reaching university. UNICEF's landmark 2018 report called this
                gap <em>"one of the worst in the developed world."</em>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-6">
              <StatCard figure="26.7%" label="of the population is Māori & Pasifika" tone="clay" />
              <StatCard figure="1/3" label="attended classes regularly in 2023" tone="indigo" />
              <StatCard figure="78%" label="left studies before university" tone="moss" />
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:sticky lg:top-28 space-y-4">
            <Reveal delay={0.15}>
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80"
                  alt="Empty classroom highlighting gaps in school attendance"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-ink/50">
                Source: UNICEF Report, 2018 &middot; Ministry of Education, 2023
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
