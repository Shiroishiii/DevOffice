import CodeTerminal from '../../components/mission-log/CodeTerminal'

const MissionDetailSection = () => {
  return (
    <div className="glass-panel relative hidden flex-1 flex-col overflow-hidden rounded-2xl shadow-2xl lg:flex">
      <div className="scanline absolute inset-0 opacity-10" />
      <div className="z-10 border-b border-white/10 p-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-space text-[32px] font-black tracking-tight text-[#c4c0ff] uppercase">
              Refatoração Legada Apex
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              className="material-symbols-outlined rounded border border-white/10 bg-white/5 p-2 hover:bg-white/10"
              type="button"
            >
              share
            </button>
            <button
              className="material-symbols-outlined rounded border border-white/10 bg-white/5 p-2 text-[#ffb4ab] hover:bg-white/10"
              type="button"
            >
              close
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8]">
              Objetivo
            </label>
            <p className="text-[14px]">
              Refatorar o loop central de autenticação para suportar cabeçalhos de criptografia resistentes a quântica.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 min-w-0 overflow-hidden">
        <CodeTerminal />
      </div>
    </div>
  )
}

export default MissionDetailSection
