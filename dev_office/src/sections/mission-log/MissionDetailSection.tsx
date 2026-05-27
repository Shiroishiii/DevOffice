import TacticalChecklist from '../../components/mission-log/TacticalChecklist'
import CodeTerminal from '../../components/mission-log/CodeTerminal'

const MissionDetailSection = () => {
  return (
    <div className="glass-panel relative hidden flex-1 flex-col overflow-hidden rounded-2xl shadow-2xl lg:flex">
      <div className="scanline absolute inset-0 opacity-10" />
      <div className="z-10 border-b border-white/10 p-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="font-space text-[32px] font-black tracking-tight text-[#c4c0ff] uppercase">
              Detalhe da Missão
            </h2>
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#a2e7ff]">
              Refatoração Legada Apex #4299
            </p>
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
          <div>
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8]">
              Squad
            </label>
            <div className="flex -space-x-3">
              <img
                alt="Membro do squad"
                className="h-8 w-8 rounded-full border-2 border-[#13121b]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlNzoJdokh7TGOGF6KmcwER2Hh42G1Rj5z3UzSxe5y3nFPnFV4X8KMIax6aCEawQEerqHwGp7Mw4DN86HbOpV5-KJTiRRLRC5mq0jCODaJ1-OTEtlNJ66xVzZRVmjhIeBGFfjy5TXQWkzeeoq-X5PTCOFebkuf9hO2-n-uyQ44RIUFvDvfa4hC0LmnMJkEf_yoNesVzeJYNGiKtM9J92VttVM7WH6kUqJKmhXQi8RANJGLapB_CdKf5aiunbVc_haAcz1DBPlpgmG-"
              />
              <img
                alt="Membro do squad"
                className="h-8 w-8 rounded-full border-2 border-[#13121b]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3sF31JH_Y3QXH3xV-hRcnh5UPrF5PEegmTxHp3ti6GGBLidh2oYYBy_omSln1hOeWlL0HoBhRxeSibJODl-lmvmhVtDy-6M_nkPnyDx633_9_Zn_1fapV62El9jBUyPvEpuBoJ0Sjcj68qtl7JXBlBQRaPAWGZHkf9csy4SY5LfJk-U6ZnE0jExKUUWvRf7pj4ND0RwQhng7W4szyHiex46vtHP0ikw4u_QiEnoiGOq7y0EGml6M5NKakHzJtKjj4_0DI9Whod7XJ"
              />
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#13121b] bg-[#8781ff] text-[10px] font-bold text-[#1b0091]">
                +3
              </div>
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8]">
              Status da Missão
            </label>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[65%] animate-pulse bg-[#c4c0ff]" />
            </div>
            <p className="mt-1 text-right text-[10px] font-bold uppercase tracking-widest text-[#c4c0ff]">
              65% Sincronizado
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <TacticalChecklist />
        <CodeTerminal />
      </div>
    </div>
  )
}

export default MissionDetailSection
