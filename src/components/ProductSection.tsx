const ProductSection: React.FC = () => {
  return (
    <section className="bg-slate-950 px-6 py-16 text-slate-50">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            O pirulito que virou balada
          </h2>
          <p className="mt-3 text-center text-sm text-slate-300 sm:text-base">
            O <span className="font-semibold text-pink-400">7Belo Alcólico</span> é um pirulito inspirado no
            clássico 7Belo que marcou a infância de muita gente – agora com um toque alcoólico para as noites
            de festa.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-purple-600/20 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.8)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-300">
              Doce & alcoólico
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Um pirulito com sabor intenso de frutas e aquele kick de vodka que transforma qualquer gole em
              motivo pra brindar.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-purple-600/20 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.8)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Pura nostalgia
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              A mesma energia do 7Belo que você conhece desde criança, mas agora pensada para a vida adulta e
              para noites inesquecíveis.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-yellow-400/10 via-pink-500/10 to-purple-600/20 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.8)]">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300">
              Cabe no bolso
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Compacto, prático e pronto para ser levado na bolsa ou no bolso — a festa vai com você para onde
              quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection

