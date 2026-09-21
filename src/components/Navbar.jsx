import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#education', label: 'Education' },
  { href: '#unemployment', label: 'Employment' },
  { href: '#policy', label: 'Policy' },
  { href: '#health', label: 'Health' },
  { href: '#tourism', label: 'Tourism' },
  { href: '#map', label: 'Map' },
  { href: '#quiz', label: 'Quiz' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-parchment/90 backdrop-blur-md shadow-sm border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <a href="#top" className="font-serif font-bold tracking-tight text-lg">
          Aotearoa <span className="italic text-clay">Undercurrents</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative group py-1">
                {l.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-clay transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="w-6 h-[2px] bg-ink block" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="w-6 h-[2px] bg-ink block" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="w-6 h-[2px] bg-ink block" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-parchment border-b border-ink/10"
          >
            {LINKS.map((l) => (
              <li key={l.href} className="border-t border-ink/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
