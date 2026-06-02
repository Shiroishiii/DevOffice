import MissionFilters from '../../components/mission-log/MissionFilters'
import MissionListCard from '../../components/mission-log/MissionListCard'
import type { Mission } from '../../data/missions'

type MissionListSectionProps = {
  missions: Mission[]
  selectedId: string
  activeFilter: string
  onFilterChange: (filter: string) => void
  onSelectMission: (id: string) => void
}

const MissionListSection = ({
  missions,
  selectedId,
  activeFilter,
  onFilterChange,
  onSelectMission,
}: MissionListSectionProps) => {
  const filtered =
    activeFilter === 'Todos' ? missions : missions.filter((m) => m.category === activeFilter)

  return (
    <div className="flex h-full w-full flex-col gap-6 lg:w-100">
      <MissionFilters activeFilter={activeFilter} onFilterChange={onFilterChange} />
      <div className="custom-scrollbar flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
        {filtered.map((mission) => (
          <MissionListCard
            key={mission.id}
            mission={mission}
            onSelect={() => onSelectMission(mission.id)}
            selected={selectedId === mission.id}
          />
        ))}
      </div>
    </div>
  )
}

export default MissionListSection
