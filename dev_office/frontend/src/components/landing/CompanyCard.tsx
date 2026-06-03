type CompanyCardProps = {
  name: string
  description: string
  missions: string
  icon: string
  iconColorClass: string
  imageUrl: string
  imageAlt: string
  gradientClass: string
  techs: string[]
}

const CompanyCard = ({
  name,
  description,
  missions,
  icon,
  iconColorClass,
  imageUrl,
  imageAlt,
  gradientClass,
  techs,
}: CompanyCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#1A2238] transition-all duration-500 hover:border-[#c4c0ff]/50">
      <div className={`h-32 ${gradientClass} opacity-50`}>
        <img alt={imageAlt} className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0" src={imageUrl} />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="mt-[-3rem] flex h-12 w-12 items-center justify-center rounded-lg border-4 border-[#1A2238] bg-white">
            <span className={`material-symbols-outlined text-3xl ${iconColorClass}`}>{icon}</span>
          </div>
          <span className="rounded bg-[#a2e7ff]/10 px-2 py-1 text-[10px] uppercase tracking-widest text-[#a2e7ff]">{missions}</span>
        </div>
        <h3 className="font-space mb-2 text-xl text-white">{name}</h3>
        <p className="mb-6 text-sm text-[#c7c4d8]">{description}</p>
        <div className="flex items-center gap-2">
          {techs.map((tech) => (
            <div key={tech} className="rounded bg-white/5 px-3 py-1 text-[10px] text-[#c7c4d8]">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
