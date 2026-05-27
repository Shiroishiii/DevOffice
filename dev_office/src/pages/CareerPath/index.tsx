import AppTopBar from '../../components/layout/AppTopBar'
import { AppPageShell } from '../../layouts/AppLayout'

const milestones = [
  { rank: 'Júnior', status: 'Concluído', xp: '0 – 5k XP' },
  { rank: 'Pleno', status: 'Concluído', xp: '5k – 15k XP' },
  { rank: 'Sênior', status: 'Atual', xp: '15k – 40k XP' },
  { rank: 'Arquiteto', status: 'Em progresso', xp: '40k – 80k XP' },
  { rank: 'Principal', status: 'Bloqueado', xp: '80k+ XP' },
]

const CareerPath = () => {
  return (
    <AppPageShell header={<AppTopBar title="Trilha de Carreira" />}>
      <div className="mx-auto w-full max-w-[1280px] space-y-8 p-6 md:p-12">
        <p className="text-[#c7c4d8]">Acompanhe sua evolução profissional dentro do ecossistema DevOffice.</p>
        <div className="glass-panel relative overflow-hidden rounded-2xl p-8">
          <div className="absolute top-8 bottom-8 left-[27px] w-0.5 bg-gradient-to-b from-[#c4c0ff] to-transparent opacity-30" />
          <div className="space-y-8">
            {milestones.map((item) => (
              <div key={item.rank} className="relative flex gap-6">
                <div
                  className={`z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 ${
                    item.status === 'Atual'
                      ? 'border-[#c4c0ff] bg-[#c4c0ff]/20'
                      : item.status === 'Bloqueado'
                        ? 'border-white/10 bg-white/5'
                        : 'border-[#a2e7ff] bg-[#a2e7ff]/20'
                  }`}
                >
                  <span className="material-symbols-outlined text-[#c4c0ff]">
                    {item.status === 'Bloqueado' ? 'lock' : 'military_tech'}
                  </span>
                </div>
                <div className="flex-1 border-b border-white/5 pb-6 last:border-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-space text-xl font-bold text-white">{item.rank}</h3>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest ${
                        item.status === 'Atual' ? 'text-[#c4c0ff]' : 'text-[#c7c4d8]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#c7c4d8]">{item.xp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppPageShell>
  )
}

export default CareerPath
