const testimonials = [
  {
    name: 'Lívia, 24',
    role: 'Fã de festas tema anos 2000',
    quote:
      'Levei o 7Belo Alcólico para uma festa à fantasia e virou o assunto da noite. Todo mundo queria provar!',
  },
  {
    name: 'Rafa, 27',
    role: 'DJ & host de rolês',
    quote:
      'É o tipo de detalhe que muda o clima do pré. Divertido, diferente e com uma pegada nostálgica muito forte.',
  },
  {
    name: 'Gi, 22',
    role: 'Criadora de conteúdo',
    quote:
      'Gravei um vídeo de unboxing com os amigos e as reações foram perfeitas. Visual lindo, gosto marcante.',
  },
]

const SocialProofSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-950 px-6 pb-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Quem já provou
          </span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Aprovação direto da pista
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
            Festas, pré, pós, after. O <span className="font-semibold text-pink-400">7Belo Alcólico</span> já
            apareceu em vários rolês e deixou muita história boa pra contar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-slate-50 shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-pink-500/70 hover:shadow-[0_26px_60px_rgba(0,0,0,0.9)]"
            >
              <span className="mb-4 text-3xl leading-none text-pink-400">“</span>
              <blockquote className="text-sm text-slate-100">{t.quote}</blockquote>
              <figcaption className="mt-5 text-xs text-slate-300">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="mt-0.5 text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">{t.role}</div>
              </figcaption>
              <div className="pointer-events-none absolute inset-x-4 -bottom-4 h-8 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent blur-xl" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection

