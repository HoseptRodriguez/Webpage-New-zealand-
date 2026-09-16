export default function Footer() {
  return (
    <footer className="bg-ink text-parchment/70 py-14">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="font-serif text-lg text-parchment font-semibold">
            Aotearoa <span className="italic text-clay">Undercurrents</span>
          </p>
          <p className="mt-2 text-sm max-w-sm">
            An independent editorial report examining educational inequality,
            youth unemployment, social policy, and public health in New Zealand.
          </p>
        </div>
        <div className="text-sm space-y-1">
          <p className="text-parchment/50 uppercase tracking-widest text-xs mb-2">Sources</p>
          <p>UNICEF Report, 2018</p>
          <p>The Guardian, September 12, 2026</p>
          <p>New Zealand Parliament, Bill introduced August 24, 2026</p>
          <p>Ministry of Health, New Zealand</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-10 pt-6 border-t border-parchment/10 text-xs text-parchment/40">
        &copy; {new Date().getFullYear()} Aotearoa Undercurrents. For editorial and educational purposes.
      </div>
    </footer>
  )
}
