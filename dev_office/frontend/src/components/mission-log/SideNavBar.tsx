import { Link } from 'react-router'

const navItems = [
  { icon: 'dashboard', label: 'Command Center', to: '/command-center', active: false },
  { icon: 'assignment', label: 'Mission Log', to: '/mission-log', active: true, filled: true },
  { icon: 'chat_bubble', label: 'Squad Comms', to: '#', active: false },
  { icon: 'account_tree', label: 'Tech Tree', to: '#', active: false },
  { icon: 'trending_up', label: 'Career Path', to: '#', active: false },
]

const SideNavBar = () => {
  return (
    <aside className="hidden h-full w-64 shrink-0 flex-col gap-2 border-r border-white/5 bg-[#1b1b24] p-4 lg:flex">
      <div className="mb-8 px-4 py-6">
        <h1 className="font-space text-5xl font-black tracking-tighter text-[#c4c0ff]">DevOffice</h1>
        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#a2e7ff] opacity-70">OS Command System</p>
      </div>

      <div className="mb-8 flex items-center gap-3 px-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-[#c4c0ff]/20">
          <img
            alt="User Rank Badge"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeWzGYWY3Igpzdow29WihZWwd2I10IUeIxFbDWSiAicbtcSKlr7KzK3KCnn7umGjRyOfWRlHx-IgACB5KI5kduqm7zrr59z1FdkCP0hJ0q88g_KUZbcINzfF2vnsTJXM6kK6X4OSKpBSrV0GlrHmzDzz3eSQze3cZSzJR-9y4e7Bl3Stc0y2jP7uinVCUKFuaP-5BvwQQn-JrVNPyrUIsV16hSiCckCnB5QnjIZAPmSR_hSoV5fp3EvTZ4yngV2UXu-kKwzjjOSGtm"
          />
        </div>
        <div>
          <p className="font-space text-[14px] font-bold text-[#e4e1ee]">System Operator</p>
          <p className="text-[10px] uppercase tracking-widest text-[#c7c4d8]">Level 42 Senior Arch</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const className = `flex items-center gap-3 rounded-lg p-3 transition-all ${
            item.active
              ? 'active-tab-glow scale-[0.98] bg-[#8781ff] text-[#1b0091]'
              : 'text-[#c7c4d8] transition-transform duration-200 hover:translate-x-1 hover:bg-white/5'
          }`

          const content = (
            <>
              <span
                className={`material-symbols-outlined ${!item.active ? 'text-[#a2e7ff]' : ''}`}
                style={item.filled ? { fontVariationSettings: '"FILL" 1' } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
            </>
          )

          return item.to.startsWith('/') ? (
            <Link key={item.label} className={className} to={item.to}>
              {content}
            </Link>
          ) : (
            <a key={item.label} className={className} href={item.to}>
              {content}
            </a>
          )
        })}
      </nav>

      <div className="mt-auto space-y-1 border-t border-white/5 pt-4">
        <a className="flex items-center gap-3 rounded-lg p-3 text-[#c7c4d8] hover:bg-white/5" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-xs font-bold uppercase tracking-widest">Settings</span>
        </a>
        <a className="flex items-center gap-3 rounded-lg p-3 text-[#c7c4d8] hover:bg-white/5" href="#">
          <span className="material-symbols-outlined">terminal</span>
          <span className="text-xs font-bold uppercase tracking-widest">Terminal</span>
        </a>
        <button
          className="mt-4 w-full rounded-lg border border-[#c4c0ff]/20 bg-[#35343e] py-3 text-[10px] font-bold uppercase tracking-widest text-[#c4c0ff] transition-all duration-300 hover:bg-[#c4c0ff] hover:text-[#2000a4]"
          type="button"
        >
          Upgrade Rig
        </button>
      </div>
    </aside>
  )
}

export default SideNavBar
