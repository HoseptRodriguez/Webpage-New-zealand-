import Reveal from './Reveal.jsx'
import SectionTag from './SectionTag.jsx'
import StatCard from './StatCard.jsx'

export default function SectionHealth() {
  return (
    <section id="health" className="relative bg-moss text-parchment py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]">
        <img
          src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=40"
          alt="Calm clinical therapy room setting"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-moss via-moss/95 to-moss" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionTag index="04" label="Health & Medicine" tone="parchment" />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-balance">
                A cautious breakthrough: medical MDMA for severe PTSD
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-6 space-y-5 text-parchment/80 leading-relaxed text-[1.05rem]">
              <p>
                New Zealand has become the{' '}
                <strong className="text-parchment font-semibold">second country in the world</strong>,
                after Australia, to authorize the therapeutic use of MDMA
                (Ecstasy) for the treatment of severe post-traumatic stress
                disorder.
              </p>
              <p>
                Access remains extremely limited: only a small number of
                specially licensed psychiatrists hold permits to prescribe it,
                and only to carefully selected adult patients. Every session is
                administered entirely within a clinical setting, under strict
                control, and is always accompanied by structured psychological
                therapy — never used as a standalone treatment.
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              <StatCard figure="#2" label="country worldwide to approve medical MDMA" tone="parchment" />
              <StatCard figure="0" label="unsupervised use — clinic-only, therapy-paired" tone="parchment" />
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex items-center">
            <Reveal delay={0.2} className="w-full">
              <div className="border border-parchment/25 p-8 backdrop-blur-sm bg-parchment/5">
                <p className="font-serif italic text-xl leading-relaxed text-balance">
                  "Strict control. In-clinic administration. Therapy, always."
                </p>
                <p className="mt-4 text-sm text-parchment/60 uppercase tracking-widest">
                  The framework governing New Zealand's medical MDMA program
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
