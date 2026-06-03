import { useEffect, useState } from 'react'

type Usuario = {
  id: number
  nome: string
  ponto: number
}

const RankProgressSection = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3000/usuarios')
      const data = await res.json()

      if (!res.ok) return

      setUsuarios(Array.isArray(data) ? data : [])
    }

    load()
  }, [])

  const ranking = [...usuarios]
    .sort((a, b) => b.ponto - a.ponto)
    .slice(0, 5) // 🔥 só top 5

  return (
    <div className="glass-card flex flex-col rounded-xl p-5">

      {/* header */}
      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">
          Ranking
        </h2>
      </div>

      {/* lista */}
      <div className="space-y-3">
        {ranking.map((user, index) => {
          const pos = index + 1

          return (
            <div
              key={user.id}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2"
            >

              {/* posição */}
              <div
                className={`
                  flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold
                  ${
                    pos === 1
                      ? 'bg-yellow-400 text-black'
                      : pos === 2
                        ? 'bg-gray-300 text-black'
                        : pos === 3
                          ? 'bg-orange-400 text-black'
                          : 'bg-white/10 text-white'
                  }
                `}
              >
                {pos}
              </div>

              {/* nome */}
              <span className="flex-1 px-3 text-sm text-white">
                {user.nome}
              </span>

              {/* pontos */}
              <span className="text-xs font-bold text-[#c4c0ff]">
                {user.ponto} XP
              </span>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RankProgressSection