import logoImg from '../assets/7Belo-chamativo.png'

const Navbar: React.FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-sky-400 p-[2px] shadow-[0_10px_25px_rgba(0,0,0,0.7)]">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-slate-950">
              <img
                src={logoImg}
                alt="Logo 7Belo Alcólico"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-white">
              7<span className="text-pink-400">Belo</span> Alcólico
            </p>
            <p className="text-[0.6rem] uppercase tracking-[0.18em] text-pink-200/80">
              Nostalgia • Vodka • Festa
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-[0.7rem] uppercase tracking-[0.16em] text-slate-300 md:flex">
          <a href="#sabores" className="relative pb-0.5 transition hover:text-pink-300">
            Sabores
          </a>
          <a href="#como-funciona" className="relative pb-0.5 transition hover:text-pink-300">
            Como funciona
          </a>
          <a href="#depoimentos" className="relative pb-0.5 transition hover:text-pink-300">
            Depoimentos
          </a>
        </nav>

        <button className="hidden rounded-full border border-pink-400/60 bg-pink-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-pink-100 shadow-[0_10px_22px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:bg-pink-400/20 md:inline-flex">
          18+ somente
        </button>
      </div>
    </header>
  )
}

export default Navbar

