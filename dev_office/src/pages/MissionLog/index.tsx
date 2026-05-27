import { useState } from 'react'
import AppTopBar from '../../components/layout/AppTopBar'
import MissionListSection from '../../sections/mission-log/MissionListSection'
import MissionDetailSection from '../../sections/mission-log/MissionDetailSection'
import { AppPageShell } from '../../layouts/AppLayout'
import { missions } from '../../data/missions'
import './mission-log.css'

const MissionLog = () => {
  const [selectedId, setSelectedId] = useState('apex')
  const [activeFilter, setActiveFilter] = useState('Todos')

  return (
    <AppPageShell header={<AppTopBar showAppNav title="Centro de Operações" />} scrollable={false} showFooter>
      <div className="mission-log-page flex flex-1 gap-6 overflow-hidden p-6">
        <MissionListSection
          activeFilter={activeFilter}
          missions={missions}
          onFilterChange={setActiveFilter}
          onSelectMission={setSelectedId}
          selectedId={selectedId}
        />
        <MissionDetailSection />
      </div>
    </AppPageShell>
  )
}

export default MissionLog
