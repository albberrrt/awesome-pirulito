const CTASection: React.FC = () => {
  return (
    <section className="bg-slate-950 px-6 pb-16 pt-4 text-slate-50">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-8 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Bring the party to your pocket
        </h2>
        <p className="mt-3 text-sm text-pink-50/90 sm:text-base">
          Perfeito para festivais, afters, pré com os amigos ou aquele rolê intimista em casa. Escolha seus
          sabores preferidos, encha os bolsos e deixe a noite cuidar do resto.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <button className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-pink-700 shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:bg-pink-50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.9)]">
            <span>Experimente o sabor!</span>
            <span className="ml-2 text-lg transition-transform group-hover:translate-x-1 group-hover:rotate-3">
              ➜
            </span>
          </button>
          <span className="text-[0.7rem] uppercase tracking-[0.22em] text-pink-100/80">
            Lançamento exclusivo • Lote limitado
          </span>
        </div>
      </div>
    </section>
  )
}

export default CTASection

