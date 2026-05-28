import { NavLink } from 'react-router'

const Login = () => {
  return (
    <div className="glass-panel rounded-2xl p-8">
      <h2 className="font-space mb-2 text-2xl font-bold text-white">Entrar no Sistema</h2>
      <p className="mb-8 text-sm text-[#c7c4d8]">Acesse seu centro de operações e continue suas missões.</p>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]" htmlFor="email">
            E-mail
          </label>
          <input className="auth-input" id="email" placeholder="operador@devoffice.io" type="email" />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]" htmlFor="senha">
            Senha
          </label>
          <input className="auth-input" id="senha" placeholder="••••••••" type="password" />
        </div>
        <NavLink
          className="block w-full rounded-lg bg-gradient-to-r from-[#c4c0ff] to-[#d0bcff] py-3 text-center text-sm font-bold uppercase tracking-widest text-[#2000a4] transition-all hover:shadow-[0_0_20px_rgba(196,192,255,0.4)]"
          to="/centro-comando"
        >
          Iniciar Sessão
        </NavLink>
      </form>
      <p className="mt-6 text-center text-sm text-[#c7c4d8]">
        Ainda não tem conta?{' '}
        <NavLink className="font-bold text-[#c4c0ff] hover:underline" to="/cadastro">
          Criar cadastro
        </NavLink>
      </p>
    </div>
  )
}

export default Login
