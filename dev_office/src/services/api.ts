const API = "http://localhost:3000"

export async function registerUser(data: {
  nome: string
  email: string
  senha: string
  empresa: string
}) {
  const res = await fetch(`${API}/cadastro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return res.json()
}

export async function loginUser(data: {
  email: string
  senha: string
}) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return res.json()
}