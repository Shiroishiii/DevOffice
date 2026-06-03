import type { Company } from '../../data/companies'

type CompanySelectCardProps = {
  company: Company
  selected: boolean
  onSelect: () => void
}

const CompanySelectCard = ({ company, selected, onSelect }: CompanySelectCardProps) => {
  return (
    <button
      className={`glass-panel w-full overflow-hidden rounded-xl text-left transition-all duration-300 ${
        selected ? 'company-card-selected border-2' : 'border border-white/10'
      }`}
      onClick={onSelect}
      type="button"
    >
      <div className={`h-24 ${company.gradientClass} opacity-60`}>
        <img alt={company.name} className="h-full w-full object-cover" src={company.imageUrl} />
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <span className={`material-symbols-outlined text-2xl ${company.iconColorClass}`}>{company.icon}</span>
          </div>
          <h3 className="font-space text-lg font-bold text-white">{company.name}</h3>
        </div>
        <p className="mb-3 text-sm text-[#c7c4d8]">{company.description}</p>
        <div className="flex flex-wrap gap-2">
          {company.techs.map((tech) => (
            <span key={tech} className="rounded bg-white/5 px-2 py-1 text-[10px] text-[#c7c4d8]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

export default CompanySelectCard
