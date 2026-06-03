import AppTopBar from '../../components/layout/AppTopBar'
import { AppPageShell } from '../../layouts/AppLayout'

const TerminalPage = () => {
  return (
    <AppPageShell header={<AppTopBar title="Terminal" />} scrollable={false} showFooter={false}>
      <div className="flex flex-1 flex-col overflow-hidden p-6">
        <div className="glass-panel flex flex-1 flex-col overflow-hidden rounded-2xl">
          <div className="flex h-8 items-center gap-2 border-b border-white/10 px-4" style={{ background: 'linear-gradient(90deg, #1f1f28 0%, #2a2933 100%)' }}>
            <div className="h-2.5 w-2.5 rounded-full bg-[#ffb4ab] opacity-70" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#00d2fd] opacity-70" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#c4c0ff] opacity-70" />
            <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8] opacity-50">
              terminal-devoffice
            </span>
          </div>
          <div className="custom-scrollbar flex-1 overflow-y-auto bg-[#0e0d16] p-6 font-mono text-sm text-[#a2e7ff]/90">
            <p className="text-[#c4c0ff]">$ devoffice --status</p>
            <p className="mt-2 text-[#c7c4d8]">Sistema operacional: DevOffice OS v2.0</p>
            <p className="text-[#c7c4d8]">Operador: Operador de Sistema (Nível 42)</p>
            <p className="text-[#c7c4d8]">Missões ativas: 3</p>
            <p className="mt-4 text-[#c4c0ff]">$ devoffice --missions --list</p>
            <p className="mt-2 text-[#e4e1ee]">→ Refatoração Legada Apex [em progresso]</p>
            <p className="text-[#e4e1ee]">→ IA de Reconhecimento [disponível]</p>
            <p className="text-[#c7c4d8]/50">→ Protocolo Ghost Zero [bloqueado]</p>
            <p className="mt-4 text-[#c4c0ff]">$ _</p>
          </div>
        </div>
      </div>
    </AppPageShell>
  )
}

export default TerminalPage
