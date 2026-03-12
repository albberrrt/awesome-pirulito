import { useState } from 'react'

const allFlavors = [
  {
    name: 'Strawberry Rush',
    color: 'from-pink-400 via-rose-500 to-red-500',
    description: 'Morango vibrante, doce na medida certa, com aquele toque alcoólico que acelera a noite.',
    badge: 'Best seller',
  },
  {
    name: 'Berry Night',
    color: 'from-purple-500 via-indigo-500 to-blue-600',
    description: 'Frutas vermelhas intensas, perfeitas para quem gosta de um sabor marcante e misterioso.',
    badge: 'Night mode',
  },
  {
    name: 'Electric Pink',
    color: 'from-fuchsia-500 via-pink-500 to-amber-400',
    description: 'Notas cítricas e adocicadas com um final elétrico que combina com pistas de dança.',
    badge: 'Limited',
  },
]

const FlavorsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos')

  const filters = ['Todos', 'Strawberry Rush', 'Berry Night', 'Electric Pink']
  const filteredFlavors =
    activeFilter === 'Todos'
      ? allFlavors
      : allFlavors.filter((f) => f.name === activeFilter)

  return (
    <section className="bg-slate-950 px-6 pb-20 pt-4 text-slate-50">
      <div className="mx-auto max-w-5xl section-fade">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-purple-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-purple-300">
            Sabores
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Escolha seu mood da noite</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
            Cada sabor do <span className="font-semibold text-pink-400">7Belo Alcólico</span> foi criado para
            combinar com um tipo de rolê diferente. Qual combina mais com você hoje?
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2 text-xs">
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-1.5 font-semibold uppercase tracking-[0.2em] transition ${
                  isActive
                    ? 'border-pink-400 bg-gradient-to-r from-pink-500/70 via-rose-500/70 to-sky-400/70 text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.7)]'
                    : 'border-slate-700 bg-slate-900/60 text-slate-200 hover:border-pink-400/60 hover:text-pink-100'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {filteredFlavors.map((flavor) => (
            <div
              key={flavor.name}
              className="group flex flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition hover:-translate-y-1.5 hover:border-pink-500/70 hover:shadow-[0_26px_60px_rgba(0,0,0,0.9)]"
            >
              <div
                className={`relative mb-4 h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-tr ${flavor.color} p-[1px]`}
              >
                <div className="flex h-full items-center justify-center rounded-2xl bg-slate-950/60 backdrop-blur">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-tr ${flavor.color} text-center text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition-transform group-hover:-translate-y-1 group-hover:rotate-3`}
                  >
                    7Belo {flavor.name}
                  </div>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white">
                  {flavor.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-pink-200">
                {flavor.name}
              </h3>
              <p className="mt-2 text-sm text-slate-200">{flavor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlavorsSection

