type Tarefa = {
  id: number
  titulo: string
  descricao: string
  funcaoEsperada: string
  codigoBase: string
  ponto: number
  status: 'PENDENTE' | 'CONCLUIDO'
  dataVencimento: string
}

type MissionListCardProps = {
  tarefa: Tarefa
  selected: boolean
  onSelect: () => void
}

const MissionListCard = ({
  tarefa,
  selected,
  onSelect,
}: MissionListCardProps) => {
  const statusBadgeClass =
    tarefa.status === 'CONCLUIDO'
      ? 'border border-green-500/30 text-green-400'
      : 'border border-[#c4c0ff]/30 text-[#c4c0ff]'

  return (
    <button
      className={`mission-card glass-panel w-full cursor-pointer rounded-xl p-4 text-left transition-all duration-300 ${
        selected ? 'border-l-4 border-l-[#c4c0ff]' : ''
      }`}
      onClick={onSelect}
      style={{ opacity: selected ? 1 : 0.7 }}
      type="button"
    >
      <div className="mb-2 flex items-start justify-between">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest ${statusBadgeClass}`}
        >
          {tarefa.status}
        </span>

        <span className="text-[10px] font-bold uppercase tracking-widest text-[#a2e7ff]">
          {tarefa.ponto} Pontos
        </span>
      </div>

      <h3 className="font-space mb-2 text-[18px] leading-tight font-bold text-white">
        {tarefa.titulo}
      </h3>

      <p className="mb-4 line-clamp-2 text-[13px] text-[#c7c4d8] opacity-80">
        {tarefa.descricao}
      </p>

      <div className="mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-[16px] text-[#8781ff]">
          code
        </span>

        <span className="text-[11px] font-bold uppercase tracking-widest text-[#8781ff]">
          JavaScript
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#c7c4d8] opacity-60">
          {new Date(tarefa.dataVencimento).toLocaleDateString('pt-BR')}
        </span>

        <span className="text-[11px] font-bold uppercase tracking-widest text-[#c4c0ff]">
          Resolver →
        </span>
      </div>
    </button>
  )
}

export default MissionListCard