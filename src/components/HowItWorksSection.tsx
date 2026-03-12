const steps = [
  {
    number: '01',
    title: 'Desembrulhe',
    description: 'Abra o pirulito, sinta o cheiro doce no ar e prepare-se para a nostalgia instantânea.',
  },
  {
    number: '02',
    title: 'Prove o doce',
    description:
      'Curta o sabor inspirado no clássico 7Belo enquanto a textura e o aroma te levam de volta à infância.',
  },
  {
    number: '03',
    title: 'Sinta o kick',
    description:
      'Depois de alguns minutos, o toque de vodka aparece, deixando tudo mais leve, divertido e animado.',
  },
]

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-slate-950 px-6 pb-16 pt-6 text-slate-50">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <span className="inline-flex rounded-full bg-pink-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-pink-300">
            Como funciona
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Três passos para a sua festa</h2>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Uma experiência simples, divertida e cheia de personalidade. Do primeiro gosto até o último gole,
            tudo foi pensado para acompanhar seu ritmo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-pink-500/60 hover:shadow-[0_26px_60px_rgba(0,0,0,0.9)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-xs font-black tracking-[0.2em] text-white shadow-lg">
                {step.number}
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-pink-300">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-200">{step.description}</p>
              <div className="mt-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-300 opacity-60 transition group-hover:w-16 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

