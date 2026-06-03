import StatCard from '../../components/command-center/StatCard'

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon="bolt"
        label="XP Total"
        value="42.8k"
        valueClassName="text-[#c4c0ff]"
        extra={<span className="text-[12px] font-bold text-[#a2e7ff]">+1.2k hoje</span>}
      />
      <StatCard icon="task_alt" label="Missões Concluídas" value="128" />
      <StatCard icon="rocket_launch" label="Projetos Ativos" value="3" valueClassName="text-[#a2e7ff]" />
      <StatCard icon="vpn_key" label="Habilidades Desbloqueadas" value="15" valueClassName="text-[#d0bcff]" />
    </div>
  )
}

export default StatsGrid
