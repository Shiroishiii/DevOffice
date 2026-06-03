const TopHeader = () => {
  return (
    <header className="z-40 flex h-16 w-full shrink-0 items-center justify-between border-b border-white/10 bg-[#13121b]/80 px-8 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-[#c4c0ff] lg:hidden">menu</span>
        <h2 className="font-space text-[20px] font-bold tracking-tight text-[#e4e1ee]">Centro de Operações</h2>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <nav className="flex gap-6">
          <a className="text-base text-[#c7c4d8] transition-colors hover:text-[#c4c0ff]" href="#">
            Missions
          </a>
          <a className="text-base text-[#c7c4d8] transition-colors hover:text-[#c4c0ff]" href="#">
            Squads
          </a>
          <a className="text-base text-[#c7c4d8] transition-colors hover:text-[#c4c0ff]" href="#">
            Ranks
          </a>
          <a className="text-base text-[#c7c4d8] transition-colors hover:text-[#c4c0ff]" href="#">
            Intelligence
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="rounded-lg bg-[#c4c0ff] px-4 py-2 text-[12px] font-bold uppercase tracking-widest text-[#2000a4] transition-all duration-200 hover:shadow-[0_0_20px_rgba(196,192,255,0.4)] active:scale-95"
            type="button"
          >
            Deploy Code
          </button>
          <button className="material-symbols-outlined text-[#c7c4d8] transition-colors hover:text-white" type="button">
            logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopHeader
