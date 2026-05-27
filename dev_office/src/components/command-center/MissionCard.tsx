type MissionCardProps = {
  imageUrl: string
  imageAlt: string
  tags: { label: string; className: string }[]
  title: string
  description: string
  xpReward: string
  deployButtonClass: string
  hoverBorderClass: string
}

const MissionCard = ({
  imageUrl,
  imageAlt,
  tags,
  title,
  description,
  xpReward,
  deployButtonClass,
  hoverBorderClass,
}: MissionCardProps) => {
  return (
    <div className={`glass-card group flex flex-col gap-6 rounded-xl p-6 md:flex-row ${hoverBorderClass}`}>
      <div className="h-32 w-full shrink-0 overflow-hidden rounded-lg bg-[#1f1f28] md:w-32">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={imageUrl}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-2 flex gap-2">
            {tags.map((tag) => (
              <span key={tag.label} className={`rounded px-2 py-1 text-[10px] font-bold uppercase ${tag.className}`}>
                {tag.label}
              </span>
            ))}
          </div>
          <h3 className="font-space mb-1 text-[20px] font-bold">{title}</h3>
          <p className="line-clamp-2 text-[14px] text-[#c7c4d8]">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#c4c0ff]">stars</span>
            <span className="text-[14px] font-bold text-[#c4c0ff]">{xpReward}</span>
          </div>
          <button
            className={`rounded-lg border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${deployButtonClass}`}
            type="button"
          >
            Implantar
          </button>
        </div>
      </div>
    </div>
  )
}

export default MissionCard
