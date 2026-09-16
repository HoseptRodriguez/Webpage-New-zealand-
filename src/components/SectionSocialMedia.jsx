import Reveal from './Reveal.jsx'
import SectionTag from './SectionTag.jsx'
import StatCard from './StatCard.jsx'

export default function SectionSocialMedia() {
  return (
    <section id="policy" className="bg-parchment py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1400&q=80"
                  alt="Abstract composition of a smartphone showing social media apps"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-ink/50">
                Bill introduced to Parliament &middot; August 24, 2026
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 grid grid-cols-2 gap-6">
              <StatCard figure="1 in 3" label="teens (13–17) spend 5+ hrs/day on social media" tone="clay" />
              <StatCard figure="<16" label="proposed minimum age to hold an account" tone="moss" />
            </Reveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <SectionTag index="03" label="Social Policy" tone="moss" />
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-balance">
                A proposed ban on social media for under-16s
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 space-y-5 text-ink/80 leading-relaxed text-[1.05rem]">
              <p>
                On <strong className="text-ink font-semibold">August 24, 2026</strong>, the New
                Zealand government introduced a bill that would ban platforms
                including <strong className="text-ink font-semibold">Instagram, TikTok, Snapchat, and Facebook</strong>{' '}
                for users under 16, pending approval by Parliament.
              </p>
              <p>
                Prime Minister <strong className="text-ink font-semibold">Christopher Luxon</strong> points
                to research showing that one in three teens aged 13 to 17 spend
                five or more hours a day on social media, exposed to addictive
                design, harmful content, and measurable damage to mental health,
                sleep, and educational outcomes.
              </p>
              <blockquote className="border-l-2 border-moss pl-5 italic text-ink/90 text-lg font-serif">
                "We cannot accept the harm being done to a whole generation."
                <footer className="mt-2 text-sm not-italic font-sans text-ink/60">
                  — Christopher Luxon, Prime Minister of New Zealand
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
