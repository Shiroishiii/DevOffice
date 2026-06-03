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
  return (
    <div className="flex h-full w-full flex-col gap-6 lg:w-100">
      <div className="custom-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
        {tarefas.map((tarefa) => (
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