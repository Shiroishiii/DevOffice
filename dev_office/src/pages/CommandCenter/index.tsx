import TopAppBar from '../../components/command-center/TopAppBar'
import StatsGrid from '../../sections/command-center/StatsGrid'
import RankProgressSection from '../../sections/command-center/RankProgressSection'
import ActiveMissionsSection from '../../sections/command-center/ActiveMissionsSection'
import RecentActivitySection from '../../sections/command-center/RecentActivitySection'
import { AppPageShell } from '../../layouts/AppLayout'
import './command-center.css'

const CommandCenter = () => {
  return (
    <AppPageShell header={<TopAppBar />}>
      <div className="command-center-page mx-auto w-full max-w-[1280px] space-y-8 p-6 md:p-12">
        <StatsGrid />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <RankProgressSection />
          <ActiveMissionsSection />
        </div>
        <RecentActivitySection />
      </div>
    </AppPageShell>
  )
}

export default CommandCenter
