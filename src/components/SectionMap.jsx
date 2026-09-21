import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal.jsx'
import SectionTag from './SectionTag.jsx'

const REGIONS = [
  {
    id: 'northland',
    name: 'Northland',
    maori: 'Te Tai Tokerau',
    x: 78, y: 42,
    kicker: 'The forgotten north',
    body: "New Zealand's northernmost region carries some of its steepest fault lines — consistently among the country's highest rates of youth unemployment and child poverty, a throughline for the crisis explored in this report's second chapter.",
    linkHref: '#unemployment',
    linkLabel: 'Read: Youth Unemployment Crisis',
    tone: 'indigo',
  },
  {
    id: 'auckland',
    name: 'Auckland',
    maori: 'Tāmaki Makaurau',
    x: 112, y: 92,
    kicker: 'One city, a third of the country',
    body: "Close to a third of all New Zealanders live in and around Auckland — and nowhere is the housing affordability squeeze this report investigates felt more sharply than in its rental market.",
    linkHref: '#policy',
    linkLabel: 'Read: Social Policy',
    tone: 'moss',
  },
  {
    id: 'waikato',
    name: 'Waikato & Bay of Plenty',
    maori: 'Waikato-ā-Tai',
    x: 196, y: 128,
    kicker: 'The rural-urban gap',
    body: "New Zealand's agricultural heartland, home to a large share of the country's Māori population, where distance from major cities still shapes who gets access to what school, and what future.",
    linkHref: '#education',
    linkLabel: 'Read: Educational Inequality',
    tone: 'clay',
  },
  {
    id: 'wellington',
    name: 'Wellington',
    maori: 'Te Whanganui-a-Tara',
    x: 166, y: 208,
    kicker: 'Where the policy is written',
    body: 'The seat of Parliament and the public service — the capital where every reform examined in this report is drafted, debated, and, too often, delayed.',
    linkHref: '#policy',
    linkLabel: 'Read: Social Policy',
    tone: 'moss',
  },
  {
    id: 'canterbury',
    name: 'Canterbury',
    maori: 'Waitaha',
    x: 148, y: 342,
    kicker: 'Rebuilding, still',
    body: "Christchurch's health infrastructure was remade after the 2011 earthquake — a rare case of major public investment landing exactly where this report argues it's needed most.",
    linkHref: '#health',
    linkLabel: 'Read: Health & Medicine',
    tone: 'moss',
  },
  {
    id: 'otago',
    name: 'Otago & Southland',
    maori: 'Ōtākou me Murihiku',
    x: 112, y: 470,
    kicker: 'The postcard economy',
    body: 'Gateway to Fiordland and Milford Sound, where a tourism-driven economy sits in stark contrast with the everyday economics of the region it runs through.',
    linkHref: '#tourism',
    linkLabel: 'Read: Tourism & Landscape',
    tone: 'clay',
  },
]

const NORTH_ISLAND =
  'M95,30 C70,35 55,55 60,80 C63,95 50,105 45,120 C40,140 55,150 70,145 C65,165 80,175 100,172 C95,190 115,200 135,195 C150,210 175,215 190,200 C210,205 235,195 245,175 C265,165 275,145 265,125 C280,115 285,95 270,80 C275,65 260,50 240,55 C235,40 215,30 195,40 C180,25 155,20 140,30 C125,20 105,22 95,30 Z'

const SOUTH_ISLAND =
  'M150,255 C170,258 185,275 180,295 C200,300 210,320 195,340 C210,355 205,380 185,390 C195,410 185,435 165,445 C170,465 155,485 135,490 C130,505 110,520 95,510 C85,500 90,480 80,465 C65,460 60,440 70,425 C55,415 55,395 68,385 C55,370 58,350 72,340 C60,325 65,305 82,298 C78,280 95,265 115,268 C120,255 138,250 150,255 Z'

const toneFill = {
  clay: '#B3472B',
  moss: '#3C5245',
  indigo: '#1C2A39',
}

export default function SectionMap() {
  const [activeId, setActiveId] = useState(REGIONS[0].id)
  const active = REGIONS.find((r) => r.id === activeId)

  return (
    <section id="map" className="relative bg-ink text-parchment py-24 sm:py-32 overflow-hidden">
      {/* decorative graticule */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 63px, #F7F4EE 64px), repeating-linear-gradient(90deg, transparent, transparent 63px, #F7F4EE 64px)',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <SectionTag index="06" label="The Country, Mapped" tone="parchment" />
        </Reveal>

        <Reveal delay={0.05} className="max-w-2xl">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-balance">
            Six regions, one report
          </h2>
          <p className="mt-6 text-parchment/75 leading-relaxed text-[1.05rem]">
            Every chapter above lives somewhere. Select a region to see how it connects —
            click a marker, or explore Aotearoa New Zealand region by region.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* MAP */}
          <Reveal delay={0.1} className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm">
              <svg viewBox="0 0 340 540" className="w-full h-auto select-none" aria-hidden="true">
                <text
                  x="170" y="18" textAnchor="middle"
                  className="fill-parchment/40"
                  style={{ font: 'italic 600 11px "Playfair Display", serif', letterSpacing: '0.25em' }}
                >
                  AOTEAROA
                </text>

                <path d={NORTH_ISLAND} fill="#F7F4EE" fillOpacity="0.08" stroke="#F7F4EE" strokeOpacity="0.35" strokeWidth="1.5" />
                <path d={SOUTH_ISLAND} fill="#F7F4EE" fillOpacity="0.08" stroke="#F7F4EE" strokeOpacity="0.35" strokeWidth="1.5" />

                <text x="205" y="245" className="fill-parchment/30" style={{ font: 'italic 9px Inter, sans-serif' }}>
                  Cook Strait
                </text>

                {REGIONS.map((r) => {
                  const isActive = r.id === activeId
                  return (
                    <g
                      key={r.id}
                      transform={`translate(${r.x}, ${r.y})`}
                      onClick={() => setActiveId(r.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Show ${r.name}`}
                      aria-pressed={isActive}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveId(r.id) }}
                      style={{ cursor: 'pointer' }}
                    >
                      {isActive && (
                        <motion.circle
                          r="7"
                          fill="none"
                          stroke={toneFill[r.tone]}
                          strokeWidth="1.5"
                          initial={{ r: 7, opacity: 0.8 }}
                          animate={{ r: 16, opacity: 0 }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                        />
                      )}
                      <circle
                        r={isActive ? 7 : 5.5}
                        fill={isActive ? toneFill[r.tone] : '#F7F4EE'}
                        fillOpacity={isActive ? 1 : 0.55}
                        stroke="#F7F4EE"
                        strokeWidth={isActive ? 2 : 0}
                        style={{ transition: 'r 0.2s ease, fill-opacity 0.2s ease' }}
                      />
                      <text
                        x={0} y={-13} textAnchor="middle"
                        className={isActive ? 'fill-parchment' : 'fill-parchment/50'}
                        style={{ font: `${isActive ? 700 : 500} 9px Inter, sans-serif`, transition: 'fill 0.2s ease' }}
                      >
                        {r.name}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </Reveal>

          {/* PANEL */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="border-l-2 pl-8"
                style={{ borderColor: toneFill[active.tone] }}
              >
                <p className="uppercase tracking-[0.2em] text-xs font-semibold" style={{ color: toneFill[active.tone] }}>
                  {active.kicker}
                </p>
                <h3 className="mt-3 font-serif font-bold text-2xl sm:text-3xl text-balance">
                  {active.name}
                  <span className="block text-base font-normal italic text-parchment/50 mt-1">{active.maori}</span>
                </h3>
                <p className="mt-5 text-parchment/75 leading-relaxed">{active.body}</p>
                <a
                  href={active.linkHref}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group"
                  style={{ color: toneFill[active.tone] }}
                >
                  {active.linkLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex flex-wrap gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveId(r.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium border transition-colors duration-200 ${
                    r.id === activeId
                      ? 'bg-parchment text-ink border-parchment'
                      : 'border-parchment/25 text-parchment/60 hover:border-parchment/60 hover:text-parchment'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
