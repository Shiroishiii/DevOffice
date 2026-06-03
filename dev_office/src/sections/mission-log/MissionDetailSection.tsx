import CodeTerminal from '../../components/mission-log/CodeTerminal'
import type { Tarefa } from '../../pages/MissionLog'

type Props = {
  tarefa: Tarefa | null
}

const MissionDetailSection = ({ tarefa }: Props) => {
  if (!tarefa) {
    return (
      <div className="glass-panel hidden flex-1 items-center justify-center rounded-2xl lg:flex">
        <p>Selecione uma tarefa</p>
      </div>
    )
  }

  return (
    <div className="glass-panel relative hidden flex-1 flex-col overflow-hidden rounded-2xl shadow-2xl lg:flex">
      <div className="scanline absolute inset-0 opacity-10" />

      <div className="z-10 border-b border-white/10 p-8">
        <h2 className="font-space text-[32px] font-black tracking-tight text-[#c4c0ff] uppercase">
          {tarefa.titulo}
        </h2>

        <p className="mt-4 text-[14px]">
          {tarefa.descricao}
        </p>

        <div className="mt-4 flex gap-4">
          <span className="rounded-full border border-[#c4c0ff]/30 px-3 py-1 text-xs text-[#c4c0ff]">
            {tarefa.ponto} Pontos
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
            {tarefa.status}
          </span>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 overflow-hidden">
        <CodeTerminal
          codigoInicial={tarefa.codigoBase}
          funcaoEsperada={tarefa.funcaoEsperada}
          tarefaId={tarefa.id}
        />
      </div>
    </div>
  )
}

export default MissionDetailSection