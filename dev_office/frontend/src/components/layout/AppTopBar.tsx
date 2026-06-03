import { NavLink } from 'react-router'

type AppTopBarProps = {
  title: string
  showAppNav?: boolean
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-base transition-colors ${isActive ? 'text-[#c4c0ff]' : 'text-[#c7c4d8] hover:text-[#c4c0ff]'}`

const AppTopBar = ({ title, showAppNav = false }: AppTopBarProps) => {
  return (
    <header className="z-40 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#13121b]/80 px-6 backdrop-blur-xl md:px-12">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-[#c4c0ff] lg:hidden">menu</span>
        <h2 className="font-space text-[20px] font-bold tracking-tight text-[#e4e1ee]">{title}</h2>
      </div>
      {showAppNav && (
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex gap-6">
            <NavLink className={navLinkClass} to="/registro-missoes">
              Missões
            </NavLink>
            <NavLink className={navLinkClass} to="/trilha-carreira">
              Ranks
            </NavLink>
            <NavLink className={navLinkClass} to="/arvore-tech">
              Inteligência
            </NavLink>
          </nav>
          <div className="flex items-center gap-3">

            <NavLink
              className="material-symbols-outlined text-[#c7c4d8] transition-colors hover:text-white"
              to="/login"
              title="Sair"
            >
              logout
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default AppTopBar
