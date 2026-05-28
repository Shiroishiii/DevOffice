import { Link } from 'react-router'

const navItems = [
  { icon: 'dashboard', label: 'Command Center', to: '/command-center', active: true, filled: true },
  { icon: 'assignment', label: 'Mission Log', to: '/mission-log', active: false },
  { icon: 'chat_bubble', label: 'Squad Comms', to: '#', active: false },
  { icon: 'account_tree', label: 'Tech Tree', to: '#', active: false },
  { icon: 'trending_up', label: 'Career Path', to: '#', active: false },
]

const SideNavBar = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-2 border-r border-white/5 bg-[#1b1b24] p-4 lg:flex">
      <div className="mb-8 px-2">
        <span className="font-space text-5xl font-black text-[#c4c0ff]">DevOffice</span>
      </div>

      <div className="mb-6 flex items-center gap-3 p-3">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-[#c4c0ff]/20 bg-[#2a2933]">
          <img
            alt="Developer Avatar"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0a0prB3RKshvOzVqjJq3JIDoFO1fm_Wkct1Jm7CPKQQSvXjvvFLg5f-RCX7CpR2gYKEYQysbjbeeygQiNeGa3O9DowCaMIbEE6I3U2g2aoOrwUwdtmr8x4z_ok4xkWndZuCFBA4kIqr771mFyJF21kUK32TmTCtosGwd5iJY78jzkAU_Go6vbcdv-2ltO7LlmPJ8b9Iduvm_ACzCNAllDKO-mz1bHrmyvvVR_T3lNkzDWqc0ChyD-6LEWS1sM4xiJ3n5lgoquhpO4"
          />
        </div>
        <div>
          <p className="font-space text-[14px] font-bold leading-tight">System Operator</p>
          <p className="text-[10px] uppercase tracking-widest text-[#c7c4d8]">Level 42 Senior Arch</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const className = `flex items-center gap-3 rounded-lg p-3 transition-all ${
            item.active
              ? 'scale-[0.98] bg-[#8781ff] text-[#1b0091] shadow-[0_0_15px_rgba(135,129,255,0.3)]'
              : 'text-[#c7c4d8] transition-transform duration-200 hover:translate-x-1 hover:bg-white/5'
          }`
          const content = (
            <>
              <span
                className="material-symbols-outlined"
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
        <button className="mb-4 w-full rounded-lg bg-gradient-to-r from-[#c4c0ff] to-[#d0bcff] py-3 font-bold text-[#2000a4] transition-all hover:shadow-[0_0_20px_rgba(196,192,255,0.4)]">
          Upgrade Rig
        </button>
        <a className="flex items-center gap-3 rounded-lg p-3 text-[#c7c4d8] hover:bg-white/5" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-xs font-bold uppercase tracking-widest">Settings</span>
        </a>
        <a className="flex items-center gap-3 rounded-lg p-3 text-[#c7c4d8] hover:bg-white/5" href="#">
          <span className="material-symbols-outlined">terminal</span>
          <span className="text-xs font-bold uppercase tracking-widest">Terminal</span>
        </a>
      </div>
    </aside>
  )
}

export default SideNavBar
