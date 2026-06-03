import { useEffect, useState } from 'react'
import AppTopBar from '../../components/layout/AppTopBar'
import { AppPageShell } from '../../layouts/AppLayout'

type Usuario = {
  id: number
  nome: string
  ponto: number
}

const CareerPath = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch('http://localhost:3000/usuarios')
      const data = await response.json()

      if (!response.ok) {
        console.error(data)
        return
      }

      setUsuarios(Array.isArray(data) ? data : [])
    }

    loadUsers()
  }, [])

  const ranking = [...usuarios].sort((a, b) => b.ponto - a.ponto)

  return (
    <AppPageShell header={<AppTopBar title="Trilha de Carreira" />}>
      <div className="mx-auto w-full max-w-7xl space-y-8 p-6 md:p-12">

        <p className="text-[#c7c4d8]">
          Ranking global de desenvolvedores no ecossistema DevOffice.
        </p>

        <div className="glass-panel relative overflow-hidden rounded-2xl p-8">

          <div className="space-y-6">
            {ranking.map((user, index) => {
              const position = index + 1

              return (
                <div key={user.id} className="flex items-center gap-6 border-b border-white/5 pb-6 last:border-0">

                  {/* posição */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full font-bold
                    ${position === 1 ? 'bg-yellow-400 text-black'
                      : position === 2 ? 'bg-gray-300 text-black'
                      : position === 3 ? 'bg-orange-400 text-black'
                      : 'bg-white/10 text-white'
                    }`}
                  >
                    {position}
                  </div>

                  {/* nome */}
                  <div className="flex-1">
                    <h3 className="font-space text-lg font-bold text-white">
                      {user.nome}
                    </h3>
                  </div>

                  {/* pontos */}
                  <div className="text-right font-bold text-[#c4c0ff]">
                    {user.ponto} XP
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </div>
    </AppPageShell>
  )
}

export default CareerPath