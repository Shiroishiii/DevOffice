# DevOffice

## 📌 Descrição
Atualmente, a falta de plataformas intuitivas dificulta a constância dos programadores nos estudos. Para resolver esse problema, criamos o DevOffice: um site que simula o ambiente de empresas reais (à escolha do usuário) e envia tarefas diárias. Ao entregar os desafios, os usuários sobem de nível e avançam no ranking da plataforma, promovendo o aprendizado contínuo através da gamificação e da competitividade saudável.


---

## 🚀 Tecnologias

### Backend
- Node.js + TypeScript
- Prisma ORM
- PostgreSQL
- JWT (autenticação)
- Arquitetura em camadas: routes → controller → service → repository
- React
- Tailwind CSS

---

## ⚙️ Funcionalidades

- Cadastro De Usuarios
- Atualizar Suas Informações
- Excluir Sua Conta
- Enviar Tarefas
- Subir o Nível

## 🖥️ Interface & Sistema

- Interface Resposivo com Tailwind CSS
- Back-End Funcional
- Banco de Dados Funcional

---

## 🏗️ Estrutura do Banco 

```
  [Empresa] 1 ──── 💡 Possui ──── ⚡ N [Usuarios]
  [Empresa] 1 ──── 💡 Possui ──── ⚡ N [Tarefa]
  [Usuarios] 1 ──── 🧪 Contém ──── 1 [Tarefa]

```

---

## ▶️ Como rodar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- PostgreSQL rodando localmente

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Variáveis de ambiente (backend)

Crie um arquivo `.env` com:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/devoffice"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

---

## 👥 Time

- Julio Cesar
- Pedro Caleiros
- Isaac Dantas
- Isaque Ribeiro
- Isac Barbosa
