import { useEffect, useRef } from 'react'

const CodeTerminal = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lines = containerRef.current?.querySelectorAll<HTMLElement>('.terminal-line')
    if (!lines) return

    lines.forEach((line, index) => {
      window.setTimeout(() => {
        line.classList.add('terminal-line--visible')
      }, 100 * index)
    })
  }, [])

  return (
    <div className="group relative flex-1 bg-[#0e0d16] p-6">
      <div className="terminal-header flex h-8 items-center gap-2 rounded-t-lg px-4">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffb4ab] opacity-70" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#00d2fd] opacity-70" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#c4c0ff] opacity-70" />
        <span className="ml-4 text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8] opacity-50">
          terminal-devoffice — missions/apex_auth.ts
        </span>
      </div>
      <div
        ref={containerRef}
        className="relative h-full overflow-hidden rounded-b-lg border border-white/5 bg-[#13121b]/80 p-4 font-mono text-[14px] text-[#a2e7ff]/80"
      >
        <div className="terminal-line flex">
          <span className="w-12 pr-4 text-right text-[#c7c4d8]/40 select-none">104</span>
          <span>
            <span className="text-[#c4c0ff]">async function</span> <span className="text-[#a2e7ff]">initEncryption</span>
            () {'{'}
          </span>
        </div>
        <div className="terminal-line flex">
          <span className="w-12 pr-4 text-right text-[#c7c4d8]/40 select-none">105</span>
          <span className="pl-4">
            {' '}
            const <span className="text-[#a2e7ff]">key</span> = <span className="text-[#c4c0ff]">await</span>{' '}
            fetchQuantumKey();
          </span>
        </div>
        <div className="terminal-line flex">
          <span className="w-12 pr-4 text-right text-[#c7c4d8]/40 select-none">106</span>
          <span className="pl-4 text-[#c7c4d8]"> // FIXME: Legacy overhead is slowing down auth</span>
        </div>
        <div className="terminal-line flex bg-[#c4c0ff]/10">
          <span className="w-12 pr-4 text-right font-bold text-[#c4c0ff] select-none">107</span>
          <span className="pl-4">
            {' '}
            <span className="text-[#c4c0ff]">const</span> result ={' '}
            <span className="text-[#d0bcff]">ApexAuth.legacyLoop</span>(key);
          </span>
        </div>
        <div className="terminal-line flex">
          <span className="w-12 pr-4 text-right text-[#c7c4d8]/40 select-none">108</span>
          <span className="pl-4">
            {' '}
            <span className="text-[#c4c0ff]">return</span> result;
          </span>
        </div>
        <div className="terminal-line flex">
          <span className="w-12 pr-4 text-right text-[#c7c4d8]/40 select-none">109</span>
          <span>{'}'}</span>
        </div>
        <div className="terminal-line mt-8">
          <div className="mb-2 text-[12px] opacity-40">EXECUTANDO ANÁLISE...</div>
          <div className="flex gap-1">
            <div className="h-1 flex-1 rounded bg-[#c4c0ff]/40" />
            <div className="h-1 flex-1 rounded bg-[#c4c0ff]/40" />
            <div className="h-1 flex-1 rounded bg-white/10" />
            <div className="h-1 flex-1 rounded bg-white/10" />
            <div className="h-1 flex-1 rounded bg-white/10" />
          </div>
          <div className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#c4c0ff]">
            AMEAÇA: BAIXA | PERFORMANCE: DEGRADADA
          </div>
        </div>
        <div className="absolute right-12 bottom-12 transition-transform duration-300 group-hover:-translate-y-1">
          <button
            className="flex items-center gap-3 rounded-xl bg-[#c4c0ff] px-6 py-4 text-[12px] font-bold uppercase tracking-widest text-[#2000a4] shadow-[0_10px_30px_rgba(196,192,255,0.3)]"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            Confirmar Resolução
          </button>
        </div>
      </div>
    </div>
  )
}

export default CodeTerminal
