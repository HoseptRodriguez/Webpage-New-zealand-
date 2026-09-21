import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionTag from './SectionTag.jsx'

const QUESTIONS = [
  {
    emoji: '🎓',
    prompt: 'What share of Māori & Pasifika students left their studies before reaching university (2023)?',
    options: ['26.7%', '1 in 3', '78%', '50%'],
    correct: 2,
  },
  {
    emoji: '💼',
    prompt: 'Roughly how many young New Zealanders (15–24) are unemployed or underemployed?',
    options: ['18,000', '80,000', '180,000', '1.8 million'],
    correct: 2,
  },
  {
    emoji: '📱',
    prompt: "The proposed bill would ban social media platforms for New Zealanders under what age?",
    options: ['13', '16', '18', '21'],
    correct: 1,
  },
  {
    emoji: '🧠',
    prompt: 'New Zealand became which country in the world to approve medical MDMA for severe PTSD?',
    options: ['1st', '2nd', '5th', '10th'],
    correct: 1,
  },
  {
    emoji: '🏔️',
    prompt: "How tall is Aoraki / Mount Cook, New Zealand's highest peak?",
    options: ['2,724 m', '3,724 m', '4,724 m', '5,724 m'],
    correct: 1,
  },
  {
    emoji: '🗺️',
    prompt: "Which region does the report call \"the forgotten north\"?",
    options: ['Northland', 'Auckland', 'Wellington', 'Otago & Southland'],
    correct: 0,
  },
]

const RESULTS = [
  { min: 6, emoji: '🥇', title: "Perfect score!", body: "You really read the fine print — every fact, every stat." },
  { min: 4, emoji: '🌿', title: "Nicely done!", body: "You caught the big picture of the report." },
  { min: 2, emoji: '📖', title: "Not bad!", body: "Might be worth a scroll back up for the details you missed." },
  { min: 0, emoji: '🥝', title: "Worth a re-read!", body: "Head back to the top and give the report another look." },
]

const CONFETTI = ['🥝', '🌿', '✨', '🍃', '🎉']

function ConfettiBurst() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2
        const distance = 90 + Math.random() * 60
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 text-xl"
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.6, rotate: 0 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance - 20,
              opacity: 0,
              scale: 1.1,
              rotate: Math.random() > 0.5 ? 160 : -160,
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {CONFETTI[i % CONFETTI.length]}
          </motion.span>
        )
      })}
    </div>
  )
}

export default function SectionQuiz() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = QUESTIONS[step]
  const isLast = step === QUESTIONS.length - 1

  function pick(i) {
    if (selected !== null) return
    setSelected(i)
    if (i === question.correct) setScore((s) => s + 1)
  }

  function next() {
    if (isLast) {
      setFinished(true)
      return
    }
    setStep((s) => s + 1)
    setSelected(null)
  }

  function restart() {
    setStep(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  const result = RESULTS.find((r) => score >= r.min)

  return (
    <section id="quiz" className="relative bg-sand py-24 sm:py-32 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionTag index="07" label="Test Yourself" tone="clay" />
          </div>
          <motion.span
            animate={{ rotate: [0, -8, 8, -6, 0], y: [0, -4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-5xl"
          >
            🥝
          </motion.span>
          <h2 className="mt-4 font-serif font-bold text-3xl sm:text-4xl leading-tight text-balance">
            How closely were you reading?
          </h2>
          <p className="mt-4 text-ink/70 max-w-md mx-auto">
            A quick, friendly quiz on the report you just scrolled through — one round, six questions.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="relative bg-parchment rounded-[2rem] shadow-xl shadow-ink/5 border border-ink/10 p-8 sm:p-10 overflow-hidden">
            {!finished && (
              <>
                {/* progress */}
                <div className="flex items-center gap-2 mb-8">
                  {QUESTIONS.map((_, i) => (
                    <div key={i} className="h-1.5 flex-1 rounded-full bg-ink/10 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-clay"
                        initial={{ width: 0 }}
                        animate={{ width: i < step ? '100%' : i === step ? '100%' : '0%' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-clay font-semibold mb-3">
                      Question {step + 1} of {QUESTIONS.length}
                    </p>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl leading-snug text-balance">
                      <span className="mr-2">{question.emoji}</span>
                      {question.prompt}
                    </h3>

                    <div className="mt-8 grid sm:grid-cols-2 gap-3">
                      {question.options.map((opt, i) => {
                        const isCorrect = i === question.correct
                        const isPicked = i === selected
                        const revealed = selected !== null

                        let tone = 'border-ink/15 hover:border-ink/40 bg-white/40'
                        if (revealed && isCorrect) tone = 'border-moss bg-moss/10 text-moss'
                        else if (revealed && isPicked && !isCorrect) tone = 'border-clay bg-clay/10 text-clay'
                        else if (revealed) tone = 'border-ink/10 bg-white/20 opacity-60'

                        return (
                          <motion.button
                            key={i}
                            onClick={() => pick(i)}
                            disabled={revealed}
                            whileTap={!revealed ? { scale: 0.97 } : {}}
                            animate={revealed && isPicked && !isCorrect ? { x: [0, -6, 6, -4, 0] } : {}}
                            transition={{ duration: 0.4 }}
                            className={`text-left px-5 py-3.5 rounded-2xl border text-sm sm:text-base font-medium transition-colors duration-200 flex items-center justify-between gap-2 ${tone}`}
                          >
                            <span>{opt}</span>
                            {revealed && isCorrect && <span>✅</span>}
                            {revealed && isPicked && !isCorrect && <span>❌</span>}
                          </motion.button>
                        )
                      })}
                    </div>

                    <AnimatePresence>
                      {selected !== null && (
                        <motion.button
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          onClick={next}
                          className="mt-8 inline-flex items-center gap-2 bg-ink text-parchment px-6 py-3 rounded-full text-sm font-semibold hover:bg-clay transition-colors duration-300"
                        >
                          {isLast ? 'See my score' : 'Next question'}
                          <span>→</span>
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>
              </>
            )}

            {finished && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center py-6"
              >
                <ConfettiBurst />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
                  className="inline-block text-6xl"
                >
                  {result.emoji}
                </motion.span>
                <p className="mt-5 font-serif font-bold text-2xl sm:text-3xl">
                  {score} / {QUESTIONS.length} — {result.title}
                </p>
                <p className="mt-3 text-ink/70 max-w-sm mx-auto">{result.body}</p>
                <button
                  onClick={restart}
                  className="mt-8 inline-flex items-center gap-2 border border-ink/20 px-6 py-3 rounded-full text-sm font-semibold hover:bg-ink hover:text-parchment transition-colors duration-300"
                >
                  Play again
                  <span>↺</span>
                </button>
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
