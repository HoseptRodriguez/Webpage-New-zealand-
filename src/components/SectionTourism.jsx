import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionTag from './SectionTag.jsx'

export default function SectionTourism() {
  return (
    <section id="tourism" className="relative h-[90vh] min-h-[560px] overflow-hidden flex items-center">
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?auto=format&fit=crop&w=2000&q=80"
          alt="Aoraki Mount Cook, New Zealand's highest peak, at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/40" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8">
        <Reveal>
          <SectionTag index="05" label="Tourism & Landscape" tone="parchment" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif font-bold text-parchment text-3xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl text-balance">
            Beyond the headlines: the majesty of Aoraki / Mount Cook
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-parchment/85 text-lg leading-relaxed font-light">
            Standing at 3,724 metres, Aoraki / Mount Cook is New Zealand's
            highest peak — a place of glacial valleys, alpine lakes, and star-filled
            skies that continues to draw travellers from across the globe. It is a
            reminder of why this country's beauty and its struggles both deserve
            to be seen clearly, side by side.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="#top"
            className="mt-10 inline-flex items-center gap-3 border border-parchment/60 text-parchment px-7 py-3 text-sm uppercase tracking-widest hover:bg-parchment hover:text-ink transition-colors duration-300"
          >
            Back to the top
          </a>
        </Reveal>
      </div>
    </section>
  )
}
