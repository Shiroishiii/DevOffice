import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import MissionCard from '../../components/command-center/MissionCard'
import type { Tarefa } from '../../pages/MissionLog'

const ActiveMissionsSection = () => {
  const [missions, setMissions] = useState<Tarefa[]>([])

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3000/tarefas')
      const data = await res.json()

      if (!res.ok) {
        console.error(data)
        return
      }

      const tarefas = Array.isArray(data) ? data : []

      // 🔥 filtra só pendentes
      setMissions(tarefas.filter(t => t.status === 'PENDENTE'))
    }

    load()
  }, [])

  return (
    <div className="flex flex-col gap-6 lg:col-span-8">
      <div className="flex items-center justify-between">
        <h2 className="font-space text-[24px] font-bold">
          Missões Ativas
        </h2>

        <NavLink
          className="text-xs font-bold uppercase tracking-widest text-[#c4c0ff] hover:underline"
          to="/registro-missoes"
        >
          Ver Todas
        </NavLink>
      </div>

      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
        />
      ))}
    </div>
  )
}

export default ActiveMissionsSection