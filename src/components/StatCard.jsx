import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function StatCard({ figure, label, delay = 0, tone = 'ink' }) {
  const toneMap = {
    ink: 'text-ink border-ink/15',
    clay: 'text-clay border-clay/25',
    moss: 'text-moss border-moss/25',
    indigo: 'text-indigo border-indigo/25',
    parchment: 'text-parchment border-parchment/25',
  }
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`border-t-2 pt-4 pr-4 ${toneMap[tone]}`}
      >
        <p className="font-serif text-4xl sm:text-5xl font-bold leading-none">{figure}</p>
        <p className="mt-3 text-sm sm:text-base opacity-80 leading-snug max-w-[22ch]">{label}</p>
      </motion.div>
    </Reveal>
  )
}
