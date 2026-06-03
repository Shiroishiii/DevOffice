import { useEffect, useState } from 'react'
import AppTopBar from '../../components/layout/AppTopBar'
import MissionListSection from '../../sections/mission-log/MissionListSection'
import MissionDetailSection from '../../sections/mission-log/MissionDetailSection'
import { AppPageShell } from '../../layouts/AppLayout'
import './mission-log.css'

export type Tarefa = {
  id: number
  titulo: string
  descricao: string
  funcaoEsperada: string
  codigoBase: string
  ponto: number
  dataVencimento: string
  status: 'PENDENTE' | 'CONCLUIDO'
}

const MissionLog = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [selectedTask, setSelectedTask] = useState<Tarefa | null>(null)

  useEffect(() => {
    async function loadTarefas() {
      const response = await fetch('http://localhost:3000/tarefas')
      const data = await response.json()

      setTarefas(data)

      if (data.length > 0) {
        setSelectedTask(data[0])
      }
    }

    loadTarefas()
  }, [])

  return (
    <AppPageShell
      header={<AppTopBar showAppNav title="Centro de Operações" />}
      scrollable={false}
      showFooter
    >
      <div className="mission-log-page flex flex-1 gap-6 overflow-hidden p-6">
        <MissionListSection
          tarefas={tarefas}
          selectedId={selectedTask?.id ?? null}
          onSelectMission={(id) => {
            const tarefa = tarefas.find((t) => t.id === id)

            if (tarefa) {
              setSelectedTask(tarefa)
            }
          }}
        />

        <MissionDetailSection tarefa={selectedTask} />
      </div>
    </AppPageShell>
  )
}

export default MissionLog