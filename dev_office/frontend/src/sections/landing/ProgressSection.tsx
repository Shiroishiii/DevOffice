const ProgressSection = () => {
  return (
    <section className="overflow-hidden bg-[#13121b] px-5 py-24 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-10 rounded-full bg-[#c4c0ff]/10 blur-[100px]" />
          <div className="glass-card relative overflow-hidden rounded-2xl border border-white/5 p-6">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#c4c0ff] to-[#a2e7ff] font-bold text-[#2000a4]">
                  LV42
                </div>
                <div>
                  <h4 className="font-space text-lg text-white">Operador de Sistema</h4>
                  <p className="text-xs uppercase tracking-tight text-[#c7c4d8]">Trilha Arquiteto Sênior</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#c4c0ff]">12,450 XP</span>
                <div className="mt-1 h-1.5 w-32 rounded-full bg-[#2a2933]">
                  <div className="h-full w-3/4 rounded-full bg-[#c4c0ff] shadow-[0_0_8px_rgba(196,192,255,0.8)]" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs uppercase tracking-widest text-[#c7c4d8]">
                  <span>Arquitetura Cloud</span>
                  <span>85%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[85%] bg-[#a2e7ff]" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs uppercase tracking-widest text-[#c7c4d8]">
                  <span>Domínio Backend</span>
                  <span>62%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[62%] bg-[#d0bcff]" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs uppercase tracking-widest text-[#c7c4d8]">
                  <span>Protocolo de Liderança</span>
                  <span>40%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[40%] bg-[#c4c0ff]" />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/5 bg-[#1b1b24] p-4 font-mono text-xs text-[#00d2fd]">
              <p className="mb-1 text-[#c7c4d8]/50">// Conquista do sistema desbloqueada</p>
              <p>&gt; Protocolo Central: Campeão de Código Limpo</p>
              <p>&gt; Recompensas: +500 XP, 1 Acesso a Missão Elite</p>
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <h2 className="font-space text-4xl font-semibold text-white md:text-5xl">Gamifique sua maestria.</h2>
          <p className="text-[18px] leading-relaxed text-[#c7c4d8]">
            O DevOffice não é um curso. É um RPG profissional. Cada linha de código enviada para produção nas nossas missões conta
            para o seu rank global.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#c4c0ff]">check_circle</span>
              <span className="text-[#e4e1ee]">Suba de nível resolvendo tickets reais de JIRA.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#c4c0ff]">check_circle</span>
              <span className="text-[#e4e1ee]">Desbloqueie especializações em Cloud, IA ou Mobile.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#c4c0ff]">check_circle</span>
              <span className="text-[#e4e1ee]">Seja notado por empresas através do seu Score de Rank.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProgressSection
