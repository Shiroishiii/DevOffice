import { useState } from 'react'
import { NavLink } from 'react-router'
import CompanySelectCard from '../../components/auth/CompanySelectCard'
import { registerCompanies } from '../../data/companies'

const Register = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [empresaId, setEmpresaId] = useState<string | null>(null)

  const canSubmit = nome.trim() && email.trim() && senha.length >= 6 && empresaId

  return (
    <div className="glass-panel mx-auto max-w-2xl rounded-2xl p-8">
      <h2 className="font-space mb-2 text-2xl font-bold text-white">Criar Cadastro</h2>
      <p className="mb-8 text-sm text-[#c7c4d8]">Preencha seus dados e escolha a central de missões da sua empresa.</p>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]" htmlFor="nome">
            Nome completo
          </label>
          <input
            className="auth-input"
            id="nome"
            onChange={(e) => setNome(e.target.value)}
            type="text"
            value={nome}
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]" htmlFor="email">
            E-mail
          </label>
          <input
            className="auth-input"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]" htmlFor="senha">
            Senha
          </label>
          <input
            className="auth-input"
            id="senha"
            minLength={6}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            value={senha}
          />
        </div>
        <div>
          <label className="mb-4 block text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">
            Selecione sua empresa
          </label>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {registerCompanies.map((company) => (
              <CompanySelectCard
                key={company.id}
                company={company}
                onSelect={() => setEmpresaId(company.id)}
                selected={empresaId === company.id}
              />
            ))}
          </div>
        </div>
        {canSubmit ? (
          <NavLink
            className="block w-full rounded-lg bg-linear-to-r from-[#c4c0ff] to-[#d0bcff] py-3 text-center text-sm font-bold uppercase tracking-widest text-[#2000a4] transition-all hover:shadow-[0_0_20px_rgba(196,192,255,0.4)]"
            to="/centro-comando"
          >
            Finalizar Cadastro
          </NavLink>
        ) : (
          <button
            className="w-full cursor-not-allowed rounded-lg bg-white/10 py-3 text-sm font-bold uppercase tracking-widest text-[#c7c4d8]"
            disabled
            type="button"
          >
            Selecione uma empresa para continuar
          </button>
        )}
      </form>
      <p className="mt-6 text-center text-sm text-[#c7c4d8]">
        Já tem conta?{' '}
        <NavLink className="font-bold text-[#c4c0ff] hover:underline" to="/login">
          Fazer login
        </NavLink>
      </p>
    </div>
  )
}

export default Register
