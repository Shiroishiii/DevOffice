import { NavLink } from 'react-router'

type AppSideNavProps = {
  showBottomNav?: boolean
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-lg p-3 text-xs font-bold uppercase tracking-widest transition-all ${
    isActive
      ? 'nav-link-active'
      : 'nav-link-inactive'
  }`

const AppSideNav = ({ showBottomNav = true }: AppSideNavProps) => {
  return (
    <aside className="hidden h-full w-64 shrink-0 flex-col gap-2 border-r border-white/5 bg-[#1b1b24] p-4 lg:flex">
      <div className="mb-8 px-4 py-6">
        <NavLink
          className="block transition-opacity hover:opacity-80"
          to="/centro-comando"
        >
          <h1 className="font-space text-5xl font-black tracking-tighter text-[#c4c0ff]">
            DevOffice
          </h1>

          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#a2e7ff] opacity-70">
            Sistema de Comando OS
          </p>
        </NavLink>
      </div>

      <NavLink
        className="mb-8 flex items-center gap-3 px-4 transition-opacity hover:opacity-80"
        to="/perfil"
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#c4c0ff]/20">
          <img
            alt="Avatar do operador"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeWzGYWY3Igpzdow29WihZWwd2I10IUeIxFbDWSiAicbtcSKlr7KzK3KCnn7umGjRyOfWRlHx-IgACB5KI5kduqm7zrr59z1FdkCP0hJ0q88g_KUZbcINzfF2vnsTJXM6kK6X4OSKpBSrV0GlrHmzDzz3eSQze3cZSzJR-9y4e7Bl3Stc0y2jP7uinVCUKFuaP-5BvwQQn-JrVNPyrUIsV16hSiCckCnB5QnjIZAPmSR_hSoV5fp3EvTZ4yngV2UXu-kKwzjjOSGtm"
          />
        </div>

        <div>
          <p className="font-space text-[14px] font-bold text-[#e4e1ee]">
            Operador de Sistema
          </p>

          <p className="text-[10px] uppercase tracking-widest text-[#c7c4d8]">
            Nível 42 · Arquiteto Sênior
          </p>
        </div>
      </NavLink>

      <nav className="flex-1 space-y-1">
        <NavLink className={navLinkClass} to="/centro-comando">
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-outlined ${
                  !isActive ? 'text-[#a2e7ff]' : ''
                }`}
                style={
                  isActive
                    ? { fontVariationSettings: '"FILL" 1' }
                    : undefined
                }
              >
                dashboard
              </span>

              <span>Centro de Comando</span>
            </>
          )}
        </NavLink>

        <NavLink className={navLinkClass} to="/registro-missoes">
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-outlined ${
                  !isActive ? 'text-[#a2e7ff]' : ''
                }`}
                style={
                  isActive
                    ? { fontVariationSettings: '"FILL" 1' }
                    : undefined
                }
              >
                assignment
              </span>

              <span>Missões</span>
            </>
          )}
        </NavLink>

        <NavLink className={navLinkClass} to="/trilha-carreira">
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-outlined ${
                  !isActive ? 'text-[#a2e7ff]' : ''
                }`}
                style={
                  isActive
                    ? { fontVariationSettings: '"FILL" 1' }
                    : undefined
                }
              >
                military_tech
              </span>

              <span>Ranks</span>
            </>
          )}
        </NavLink>

        <NavLink className={navLinkClass} to="/aprenda">
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-outlined ${
                  !isActive ? 'text-[#a2e7ff]' : ''
                }`}
                style={
                  isActive
                    ? { fontVariationSettings: '"FILL" 1' }
                    : undefined
                }
              >
                school
              </span>

              <span>Aprenda</span>
            </>
          )}
        </NavLink>
      </nav>

      {showBottomNav && (
        <div className="mt-auto space-y-1 border-t border-white/5 pt-4">
          <NavLink className={navLinkClass} to="/configuracoes">
            {({ isActive }) => (
              <>
                <span
                  className="material-symbols-outlined"
                  style={
                    isActive
                      ? { fontVariationSettings: '"FILL" 1' }
                      : undefined
                  }
                >
                  settings
                </span>

                <span>Configurações</span>
              </>
            )}
          </NavLink>

          <NavLink className={navLinkClass} to="/login">
            {({ isActive }) => (
              <>
                <span
                  className="material-symbols-outlined"
                  style={
                    isActive
                      ? { fontVariationSettings: '"FILL" 1' }
                      : undefined
                  }
                >
                  logout
                </span>

                <span>Sair</span>
              </>
            )}
          </NavLink>

          <button
            className="mt-4 w-full rounded-lg border border-[#c4c0ff]/20 bg-[#35343e] py-3 text-[10px] font-bold uppercase tracking-widest text-[#c4c0ff] transition-all duration-300 hover:bg-[#c4c0ff] hover:text-[#2000a4]"
            type="button"
          >
            Melhorar Equipamento
          </button>
        </div>
      )}
    </aside>
  )
}

export default AppSideNav