const AgeDisclaimer: React.FC = () => {
  return (
    <section className="bg-slate-950 px-6 py-8 text-slate-200">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-3xl border border-red-500/50 bg-red-950/40 px-5 py-5 text-center shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">Atenção • 18+</p>
        <p className="text-sm text-slate-100 sm:text-base">
          7Belo Alcólico é um produto alcoólico e seu consumo é{' '}
          <span className="font-semibold text-red-200">estritamente proibido para menores de 18 anos</span>.
          Beba com moderação e nunca dirija após consumir bebidas alcoólicas.
        </p>
      </div>
    </section>
  )
}

export default AgeDisclaimer

