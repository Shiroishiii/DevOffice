import type { Tarefa } from '../../pages/MissionLog'

type MissionCardProps = {
  mission: Tarefa
  selected?: boolean
  onSelect?: () => void
}

const MissionCard = ({ mission, selected, onSelect }: MissionCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`glass-card ${selected ? 'border-[#c4c0ff]' : ''}`}
    >
      <h3>{mission.titulo}</h3>
      <p>{mission.descricao}</p>
      <span>{mission.ponto} XP</span>
    </div>
  )
}

export default MissionCard