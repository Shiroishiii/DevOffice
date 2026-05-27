import AppTopBar from '../../components/layout/AppTopBar'
import { AppPageShell } from '../../layouts/AppLayout'

const Settings = () => {
  return (
    <AppPageShell header={<AppTopBar title="Configurações" />}>
      <div className="mx-auto w-full max-w-[720px] space-y-6 p-6 md:p-12">
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="font-space mb-6 text-xl font-bold text-white">Conta</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">Nome</label>
              <input className="auth-input" defaultValue="Operador de Sistema" type="text" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">E-mail</label>
              <input className="auth-input" defaultValue="operador@devoffice.io" type="email" />
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="font-space mb-6 text-xl font-bold text-white">Notificações</h2>
          <div className="space-y-4">
            {['Novas missões disponíveis', 'Atualizações de rank', 'Mensagens da equipe'].map((label) => (
              <label key={label} className="flex cursor-pointer items-center justify-between">
                <span className="text-sm text-[#e4e1ee]">{label}</span>
                <input className="accent-[#c4c0ff]" defaultChecked type="checkbox" />
              </label>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="font-space mb-4 text-xl font-bold text-white">Documentação</h2>
          <p className="text-sm text-[#c7c4d8]">
            Guias de uso, changelog, políticas de segurança e privacidade do DevOffice OS.
          </p>
        </div>
      </div>
    </AppPageShell>
  )
}

export default Settings
