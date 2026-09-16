import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=2000&q=80"
          alt="Dramatic New Zealand alpine landscape at Milford Sound"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-8 pb-20 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.35em] text-xs sm:text-sm text-sand/90 font-medium mb-6"
        >
          An Investigative Report &middot; 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif font-bold text-parchment text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl text-balance"
        >
          The Other Side of <span className="italic text-clay">New Zealand</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-6 text-lg sm:text-xl text-parchment/85 max-w-2xl font-light leading-relaxed"
        >
          Educational Inequality and Social Challenges — behind the postcard scenery, a
          closer look at the fractures in classrooms, the labour market, public policy,
          and mental health that define a generation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-12 flex items-center gap-3 text-parchment/70 text-sm"
        >
          <span className="w-8 h-px bg-parchment/50" />
          <span>Scroll to investigate</span>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-8 z-10 hidden sm:block text-parchment/70"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  )
}
