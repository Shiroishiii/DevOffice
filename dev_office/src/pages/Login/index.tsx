import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/api"

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function handleLogin() {
    const res = await loginUser({ email, senha })

    if (res.token) {
      localStorage.setItem("token", res.token)
      navigate("/centro-comando")
    } else {
      alert("Login inválido")
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleLogin()
      }}
    >
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  )
}
