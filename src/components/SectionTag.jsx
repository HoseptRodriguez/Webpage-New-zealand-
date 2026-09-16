export default function SectionTag({ index, label, tone = 'clay' }) {
  const toneMap = {
    clay: 'text-clay',
    moss: 'text-moss',
    indigo: 'text-indigo',
    parchment: 'text-parchment',
  }
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className={`font-serif italic text-sm ${toneMap[tone]}`}>{index}</span>
      <span className={`h-px w-10 ${tone === 'parchment' ? 'bg-parchment/50' : 'bg-current opacity-40'} ${toneMap[tone]}`} />
      <span className={`uppercase tracking-[0.2em] text-xs font-semibold ${toneMap[tone]}`}>{label}</span>
    </div>
  )
}
