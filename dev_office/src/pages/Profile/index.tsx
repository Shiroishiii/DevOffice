import { NavLink } from 'react-router'
import AppTopBar from '../../components/layout/AppTopBar'
import { AppPageShell } from '../../layouts/AppLayout'

const Profile = () => {
  return (
    <AppPageShell header={<AppTopBar title="Perfil do Operador" />}>
      <div className="mx-auto w-full max-w-[1280px] space-y-8 p-6 md:p-12">
        <div className="glass-panel rounded-2xl p-8">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="h-28 w-28 overflow-hidden rounded-2xl border border-[#c4c0ff]/30">
              <img
                alt="Avatar do operador"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeWzGYWY3Igpzdow29WihZWwd2I10IUeIxFbDWSiAicbtcSKlr7KzK3KCnn7umGjRyOfWRlHx-IgACB5KI5kduqm7zrr59z1FdkCP0hJ0q88g_KUZbcINzfF2vnsTJXM6kK6X4OSKpBSrV0GlrHmzDzz3eSQze3cZSzJR-9y4e7Bl3Stc0y2jP7uinVCUKFuaP-5BvwQQn-JrVNPyrUIsV16hSiCckCnB5QnjIZAPmSR_hSoV5fp3EvTZ4yngV2UXu-kKwzjjOSGtm"
              />
            </div>
            <div className="flex-1">
              <h1 className="font-space text-3xl font-bold text-white">Operador de Sistema</h1>
              <p className="mt-1 text-[#c7c4d8]">operador@devoffice.io · NeuroCore</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#c4c0ff]/30 bg-[#c4c0ff]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#c4c0ff]">
                  Diamante I
                </span>
                <span className="rounded-full border border-[#a2e7ff]/30 bg-[#a2e7ff]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#a2e7ff]">
                  Nível 42
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">
                  Arquiteto Sênior
                </span>
              </div>
            </div>
            <NavLink
              className="rounded-lg border border-[#a2e7ff] px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#a2e7ff] transition-colors hover:bg-[#a2e7ff]/10"
              to="/configuracoes"
            >
              Editar Perfil
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { label: 'XP Total', value: '42.8k', color: 'text-[#c4c0ff]' },
            { label: 'Missões Concluídas', value: '128', color: 'text-white' },
            { label: 'Habilidades', value: '15', color: 'text-[#d0bcff]' },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel rounded-xl p-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">{stat.label}</span>
              <p className={`font-space mt-2 text-4xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="font-space mb-6 text-xl font-bold text-white">Especializações Ativas</h2>
          <div className="space-y-4">
            {[
              { name: 'Arquitetura Cloud', progress: 85 },
              { name: 'Backend Avançado', progress: 62 },
              { name: 'Protocolo de Liderança', progress: 40 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-[#e4e1ee]">{skill.name}</span>
                  <span className="text-[#c4c0ff]">{skill.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full bg-[#c4c0ff]" style={{ width: `${skill.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppPageShell>
  )
}

export default Profile
