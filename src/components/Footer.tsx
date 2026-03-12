const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-100">
            7<span className="text-pink-400">Belo</span> Alcólico
          </p>
          <p className="mt-1 text-[0.7rem] text-slate-500">
            Inspirado no clássico doce brasileiro. Produto fictício, criado para fins de demonstração.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <nav className="flex gap-4 text-[0.7rem] uppercase tracking-[0.18em]">
            <a href="#" className="transition hover:text-pink-300">
              Termos
            </a>
            <a href="#" className="transition hover:text-pink-300">
              Privacidade
            </a>
            <a href="#" className="transition hover:text-pink-300">
              Contato
            </a>
          </nav>
          <div className="flex gap-3 text-sm text-slate-300">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-[0.7rem] transition hover:border-pink-400 hover:text-pink-300"
            >
              IG
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-[0.7rem] transition hover:border-pink-400 hover:text-pink-300"
            >
              TT
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-[0.7rem] transition hover:border-pink-400 hover:text-pink-300"
            >
              WA
            </a>
            <a
              href="https://github.com/albberrrt/awesome-pirulito"
              aria-label="Github"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-[0.7rem] transition hover:border-pink-400 hover:text-pink-300"
            >
              GH
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-5xl text-[0.65rem] text-slate-600">
        Esta landing page foi criada como demonstração de front-end. Não é uma marca, produto real ou oferta
        de venda de bebida alcoólica.
      </p>
    </footer>
  )
}

export default Footer

