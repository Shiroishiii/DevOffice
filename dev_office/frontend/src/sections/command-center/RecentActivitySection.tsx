const activities = [
  {
    icon: 'military_tech',
    iconClass: 'border-[#c4c0ff] bg-[#c4c0ff]/20 text-[#c4c0ff]',
    title: 'Rank atualizado: Diamante I',
    description: "Conquistado ao completar a saga 'Fortaleza Cloud'.",
    time: 'há 2h',
    border: true,
  },
  {
    icon: 'add_task',
    iconClass: 'border-[#a2e7ff] bg-[#a2e7ff]/20 text-[#a2e7ff]',
    title: 'Missão concluída: Edge Compute',
    description: 'Latência otimizada para a rede descentralizada do squad.',
    time: 'há 5h',
    xp: '+450 XP',
    border: true,
  },
  {
    icon: 'emoji_events',
    iconClass: 'border-[#d0bcff] bg-[#d0bcff]/20 text-[#d0bcff]',
    title: 'Emblema conquistado: Arquiteto de Código',
    description: 'Desbloqueado após 50 commits consecutivos sem falha de build.',
    time: 'Ontem',
    border: false,
  },
]

const RecentActivitySection = () => {
  return (
    <section className="space-y-6">
      <h2 className="font-space text-[24px] font-bold">Atividade Recente</h2>
      <div className="glass-card relative overflow-hidden rounded-xl p-6">
        <div className="absolute top-6 bottom-6 left-[39px] w-[2px] bg-gradient-to-b from-[#c4c0ff] to-transparent opacity-20" />
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.title} className="relative flex gap-6">
              <div
                className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${activity.iconClass}`}
              >
                <span className="material-symbols-outlined text-[20px]">{activity.icon}</span>
              </div>
              <div className={`flex-1 ${activity.border ? 'border-b border-white/5 pb-4' : ''}`}>
                <div className="flex items-start justify-between">
                  <div>
                    {activity.xp ? (
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-white">{activity.title}</p>
                        <span className="text-[12px] font-bold text-[#a2e7ff]">{activity.xp}</span>
                      </div>
                    ) : (
                      <p className="font-bold text-white">{activity.title}</p>
                    )}
                    <p className="text-[14px] text-[#c7c4d8]">{activity.description}</p>
                  </div>
                  <span className="text-[12px] text-[#c7c4d8]">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentActivitySection
