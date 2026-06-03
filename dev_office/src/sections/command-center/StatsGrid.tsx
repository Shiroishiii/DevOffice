import { useEffect, useState } from 'react'
import StatCard from '../../components/command-center/StatCard'
import type { Tarefa } from '../../pages/MissionLog'

const StatsGrid = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])

  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:3000/tarefas')
      const data = await res.json()

      if (!res.ok) {
        console.error(data)
        return
      }

      const list = Array.isArray(data) ? data : []
      setTarefas(list)
    }

    load()
  }, [])

  const pontoTotal = tarefas
    .filter(t => t.status === 'CONCLUIDO')
    .reduce((acc, t) => acc + t.ponto, 0)

  const concluidas = tarefas.filter(
    t => t.status === 'CONCLUIDO'
  ).length

  const pendentes = tarefas.filter(
    t => t.status === 'PENDENTE'
  ).length

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon="bolt"
        label="Pontos Totais"
        value={`${pontoTotal}`}
        valueClassName="text-[#c4c0ff]"
        extra={
          <span className="text-[12px] font-bold text-[#a2e7ff]">
            baseado em tarefas concluídas
          </span>
        }
      />

      <StatCard
        icon="task_alt"
        label="Missões Concluídas"
        value={`${concluidas}`}
      />

      <StatCard
        icon="pending_actions"
        label="Missões Pendentes"
        value={`${pendentes}`}
        valueClassName="text-[#a2e7ff]"
      />

      <StatCard
        icon="vpn_key"
        label="Total de Missões"
        value={`${tarefas.length}`}
        valueClassName="text-[#d0bcff]"
      />
    </div>
  )
}

export default StatsGrid