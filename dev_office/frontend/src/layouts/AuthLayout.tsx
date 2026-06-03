import { NavLink, Outlet } from 'react-router'
import '../styles/app.css'

const AuthLayout = () => {
  return (
    <div className="app-shell relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 h-64 w-64 animate-pulse rounded-full border border-[#c4c0ff]/30" />
        <div className="absolute right-10 bottom-1/4 h-96 w-96 rotate-45 rounded-lg border border-[#a2e7ff]/20" />
        <div className="scanline absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
      </div>
      <div className="relative z-10 w-full max-w-4xl">
        <div className="mb-8 text-center">
          <NavLink className="font-space text-4xl font-black text-[#c4c0ff]" to="/">
            DevOffice
          </NavLink>
          <p className="mt-2 text-sm text-[#c7c4d8]">Sistema de Comando para Desenvolvedores</p>
        </div>
        <Outlet />
        <p className="mt-8 text-center text-sm text-[#c7c4d8]">
          <NavLink className="text-[#c4c0ff] hover:underline" to="/">
            Voltar para a página inicial
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default AuthLayout
