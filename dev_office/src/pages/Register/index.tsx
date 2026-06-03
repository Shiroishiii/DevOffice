import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../services/api"
import { registerCompanies } from "../../data/companies"
import CompanySelectCard from "../../components/auth/CompanySelectCard"

export default function Register() {
  const navigate = useNavigate()

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [empresaId, setEmpresaId] = useState<string | null>(null)

  const canSubmit =
    nome.trim() &&
    email.trim() &&
    senha.length >= 6 &&
    empresaId

  async function handleRegister() {
    const res = await registerUser({
      nome,
      email,
      senha,
      empresa: empresaId!,
    })

    console.log(res)

    navigate("/centro-comando")
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleRegister()
      }}
      className="space-y-6"
    >
      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
      />

      <div className="grid grid-cols-3 gap-4">
        {registerCompanies.map((company) => (
          <CompanySelectCard
            key={company.id}
            company={company}
            selected={empresaId === company.id}
            onSelect={() => setEmpresaId(company.id)}
          />
        ))}
      </div>

      <button disabled={!canSubmit} type="submit">
        Registrar
      </button>
    </form>
  )
}