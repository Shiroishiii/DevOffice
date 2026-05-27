import AppTopBar from '../../components/layout/AppTopBar'
import { AppPageShell } from '../../layouts/AppLayout'

const skills = [
  { icon: 'code', name: 'Fundamentos', level: 'Completo', unlocked: true },
  { icon: 'storage', name: 'Backend', level: 'Nível 3', unlocked: true },
  { icon: 'web', name: 'Frontend', level: 'Nível 2', unlocked: true },
  { icon: 'cloud', name: 'Cloud', level: 'Nível 2', unlocked: true },
  { icon: 'psychology', name: 'IA Aplicada', level: 'Bloqueado', unlocked: false },
  { icon: 'security', name: 'Segurança', level: 'Bloqueado', unlocked: false },
]

const TechTree = () => {
  return (
    <AppPageShell header={<AppTopBar title="Árvore de Tech" />}>
      <div className="mx-auto w-full max-w-[1280px] space-y-8 p-6 md:p-12">
        <div className="mb-4">
          <p className="text-[#c7c4d8]">Desbloqueie especializações completando missões e subindo de rank.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`glass-panel rounded-xl p-6 transition-all ${skill.unlocked ? 'hover:border-[#c4c0ff]/30' : 'opacity-50'}`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                  skill.unlocked ? 'bg-[#c4c0ff]/20' : 'bg-white/5'
                }`}
              >
                <span className={`material-symbols-outlined text-2xl ${skill.unlocked ? 'text-[#c4c0ff]' : 'text-[#c7c4d8]'}`}>
                  {skill.unlocked ? skill.icon : 'lock'}
                </span>
              </div>
              <h3 className="font-space text-lg font-bold text-white">{skill.name}</h3>
              <p className="mt-1 text-sm text-[#c7c4d8]">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </AppPageShell>
  )
}

export default TechTree
