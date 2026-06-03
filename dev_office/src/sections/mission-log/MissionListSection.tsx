import MissionListCard from '../../components/mission-log/MissionListCard'
import type { Tarefa } from '../../pages/MissionLog'

type MissionListSectionProps = {
  tarefas: Tarefa[]
  selectedId: number | null
  onSelectMission: (id: number) => void
}

const MissionListSection = ({
  tarefas,
  selectedId,
  onSelectMission,
}: MissionListSectionProps) => {
  // ordena sem mudar layout visual, só lógica
  const sortedTarefas = [...tarefas].sort((a, b) => {
    if (a.status === b.status) return 0
    if (a.status === 'CONCLUIDO') return 1
    return -1
  })

  return (
    <div className="flex h-full w-full flex-col gap-6 lg:w-100">
      <div className="custom-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
        {sortedTarefas.map((tarefa) => (
          <MissionListCard
            key={tarefa.id}
            tarefa={tarefa}
            selected={selectedId === tarefa.id}
            onSelect={() => onSelectMission(tarefa.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default MissionListSection