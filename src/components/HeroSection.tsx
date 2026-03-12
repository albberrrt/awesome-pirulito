import heroFallback from '../assets/7belo-nobg.png'

interface HeroSectionProps {
  imageSrc?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageSrc }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050014] via-[#110022] to-[#020617] text-white">
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute -left-24 top-40 h-64 w-64 rounded-full bg-sky-400/25 blur-3xl" />

      <div className="hero-glow relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-20 pt-24 md:flex-row md:pb-28 md:pt-32">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-100 backdrop-blur">
            Novo • Limitado • 18+
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            7Belo com muito mais alegria!
          </h1>
          <p className="mt-4 text-balance text-sm text-pink-100 sm:text-base md:text-lg">
            Conheça o{' '}
            <span className="font-semibold text-yellow-200">7Belo Alcólico</span>, o pirulito que mistura a
            nostalgia do clássico doce brasileiro com um toque ousado de vodka. Doce, vibrante e feito para
            quem leva a vida como uma festa.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <button className="pill-glow group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-sky-300 px-9 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(0,0,0,0.9)]">
              <span>Experimente o sabor!</span>
              <span className="ml-2 text-lg transition-transform group-hover:translate-x-1">✨</span>
            </button>
            <p className="text-xs text-pink-100/80">
              Consumo exclusivo para maiores de <span className="font-semibold">18 anos</span>.
            </p>
          </div>
        </div>

        <div className="relative flex w-full justify-center md:justify-end">
          <div className="float-soft relative h-80 w-80 max-w-xs rotate-3 rounded-[2.2rem] bg-gradient-to-tr from-pink-400 via-rose-500 to-sky-400 p-[3px] shadow-[0_26px_80px_rgba(0,0,0,0.85)] sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[2.1rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950/80 backdrop-blur-xl">
              <img
                src={imageSrc || heroFallback}
                alt="Pirulito 7Belo Alcólico"
                className="h-full w-auto max-w-none object-contain drop-shadow-[0_22px_60px_rgba(0,0,0,0.9)]"
              />
            </div>
            <div className="absolute -right-3 -top-3 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-200 backdrop-blur">
              12% vol.
            </div>
            <div className="absolute -left-4 bottom-6 rotate-[-8deg] rounded-full bg-pink-400 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-pink-950 shadow-lg">
              edição festa
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

