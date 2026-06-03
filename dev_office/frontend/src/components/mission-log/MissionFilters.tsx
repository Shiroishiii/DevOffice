type MissionFiltersProps = {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters = ['Todos', 'Frontend', 'Backend', 'IA', 'DevOps']

const MissionFilters = ({ activeFilter, onFilterChange }: MissionFiltersProps) => {
  return (
    <div className="flex shrink-0 flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors ${
            activeFilter === filter
              ? 'active-tab-glow bg-[#8781ff] text-[#1b0091]'
              : 'border border-white/10 bg-white/5 text-[#c7c4d8] hover:bg-white/10'
          }`}
          onClick={() => onFilterChange(filter)}
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default MissionFilters
