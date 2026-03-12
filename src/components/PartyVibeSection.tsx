const PartyVibeSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 px-6 py-14 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Mais que um doce, um ritual de rolê
          </h2>
          <p className="mt-3 text-sm text-pink-50/90 sm:text-base">
            7Belo Alcólico nasceu para ser aquele momento da noite em que todo mundo se reúne, ri, grava vídeo,
            faz boomerang e cria memória. É o brinde rápido entre amigos antes da balada, o detalhe que deixa o
            after ainda mais divertido.
          </p>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="font-semibold uppercase tracking-[0.18em] text-yellow-200">Pré</p>
              <p className="mt-2 text-pink-50/90">Comece a noite com clima leve, foto bonita e risada garantida.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="font-semibold uppercase tracking-[0.18em] text-cyan-200">Pista</p>
              <p className="mt-2 text-pink-50/90">
                Compartilhe com o grupo, distribua sabores diferentes e deixe a pista ainda mais colorida.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="font-semibold uppercase tracking-[0.18em] text-emerald-200">After</p>
              <p className="mt-2 text-pink-50/90">
                Quando a festa parece estar acabando, ele entra em cena de novo e renova a energia.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="font-semibold uppercase tracking-[0.18em] text-rose-200">Entre amigos</p>
              <p className="mt-2 text-pink-50/90">
                Um jeito diferente de brindar com a galera, sem pressa, com muito sabor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartyVibeSection

