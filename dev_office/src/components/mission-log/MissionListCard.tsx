import type { Mission } from '../../data/missions'

type MissionListCardProps = {
  mission: Mission
  selected: boolean
  onSelect: () => void
}

const MissionListCard = ({ mission, selected, onSelect }: MissionListCardProps) => {
  const isLocked = mission.status === 'locked'

  if (isLocked) {
    return (
      <div className="mission-card mission-card--locked glass-panel cursor-not-allowed rounded-xl p-4 opacity-60">
        <div className="mb-2 flex items-start justify-between">
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8]">
            {mission.statusLabel}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffb4ab]">{mission.levelRequired}</span>
        </div>
        <h3 className="font-space mb-1 text-[18px] leading-tight font-bold text-white">{mission.title}</h3>
        <div className="mt-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-[#ffb4ab]">lock</span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#c7c4d8]">Conteúdo Restrito</span>
        </div>
      </div>
    )
  }

  const statusBadgeClass =
    mission.status === 'in-progress'
      ? 'border border-[#c4c0ff]/30 text-[#c4c0ff]'
      : 'border border-white/10 text-[#c7c4d8]'

  return (
    <button
      className={`mission-card glass-panel w-full cursor-pointer rounded-xl p-4 text-left transition-all duration-300 ${
        selected ? 'border-l-4 border-l-[#c4c0ff]' : ''
      }`}
      onClick={onSelect}
      style={{ opacity: selected ? 1 : 0.6 }}
      type="button"
    >
      <div className="mb-2 flex items-start justify-between">
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${statusBadgeClass}`}>
          {mission.statusLabel}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8]">{mission.levelRequired}</span>
      </div>
      <h3 className="font-space mb-1 text-[18px] leading-tight font-bold text-white">{mission.title}</h3>
      {mission.description && (
        <p className="mb-4 text-[13px] text-[#c7c4d8] opacity-80">{mission.description}</p>
      )}
      {mission.difficulty && mission.xp && (
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <span className={`material-symbols-outlined text-[16px] ${mission.difficulty.colorClass}`}>
              {mission.difficulty.icon}
            </span>
            <span className={`text-[11px] font-bold uppercase tracking-widest ${mission.difficulty.colorClass}`}>
              {mission.difficulty.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#a2e7ff]">stars</span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#a2e7ff]">{mission.xp}</span>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        {mission.techStack && (
          <div className="flex -space-x-2">
            {mission.techStack.map((tech, index) => (
              <div
                key={`${tech.value}-${index}`}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-[#35343e]"
              >
                {tech.type === 'text' ? (
                  <span className={`text-[10px] font-bold ${tech.colorClass ?? ''}`}>{tech.value}</span>
                ) : (
                  <span
                    className={`material-symbols-outlined text-[14px] ${tech.value === 'psychology' ? 'text-[#c4c0ff]' : 'text-[#a2e7ff]'}`}
                  >
                    {tech.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
        {mission.footer?.type === 'time' && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#c7c4d8] opacity-60">
            {mission.footer.value}
          </span>
        )}
        {mission.footer?.type === 'accept' && (
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#c4c0ff] transition-all hover:underline">
            {mission.footer.value}
          </span>
        )}
      </div>
    </button>
  )
}

export default MissionListCard
