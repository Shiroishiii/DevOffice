import { NavLink } from 'react-router'

const TopNavBar = () => {
  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-white/10 bg-[#13121b]/80 shadow-[0_0_20px_rgba(196,192,255,0.15)] backdrop-blur-xl">
      <nav className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-5 md:px-16">
        <div className="flex items-center gap-8">
          <NavLink className="font-space text-3xl font-bold uppercase tracking-tighter text-[#c4c0ff]" to="/">
            DevOffice
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            className="hidden px-4 py-2 text-xs uppercase tracking-widest text-[#c7c4d8] transition-all hover:text-white md:block"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="rounded-lg bg-[#c4c0ff] px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#2000a4] transition-all hover:scale-105 active:scale-95"
            to="/cadastro"
          >
            Cadastrar
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default TopNavBar
