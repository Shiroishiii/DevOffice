import { NavLink } from 'react-router'

const TopAppBar = () => {
  return (
    <header className="sticky top-0 z-40 flex h-20 w-full shrink-0 items-center justify-between border-b border-white/10 bg-[#13121b]/80 px-6 backdrop-blur-xl md:px-12">
      <div className="flex items-center gap-6">
        <NavLink className="font-space text-3xl font-bold uppercase tracking-tighter text-[#c4c0ff] lg:hidden" to="/centro-comando">
          DevOffice
        </NavLink>
        <div className="hidden items-center rounded-full border border-white/5 bg-[#0e0d16] px-4 py-2 md:flex">
          <span className="material-symbols-outlined mr-2 text-[20px] text-[#c4c0ff]">military_tech</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#c4c0ff]">Arquiteto Sênior</span>
          <div className="mx-3 h-4 w-px bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">Nível 42</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="mr-4 hidden flex-col items-end sm:flex">
          <div className="mb-1 flex w-48 justify-between">
            <span className="text-[10px] uppercase tracking-widest text-[#c7c4d8]">Progresso XP</span>
            <span className="text-[10px] uppercase tracking-widest text-[#c4c0ff]">85%</span>
          </div>
          <div className="h-2 w-48 overflow-hidden rounded-full bg-[#35343e]">
            <div className="relative h-full w-[85%] bg-gradient-to-r from-[#c4c0ff] to-[#a2e7ff]">
              <div className="scanline absolute inset-0 bg-white/20" />
            </div>
          </div>
        </div>
        <button className="relative p-2 text-[#c7c4d8] transition-colors hover:text-[#c4c0ff]" type="button">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full border-2 border-[#13121b] bg-[#a2e7ff]" />
        </button>
        <NavLink
          className="h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-[#1f1f28] transition-colors hover:border-[#c4c0ff]/50"
          to="/perfil"
        >
          <img
            alt="Insígnia de rank"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw3zmeE7fIksMkZGBUpgYKqGm2bngiCM1yahyLdNE5gp8dTObHadR-vh08yVMc0YD8Sbe7y3n0ix93Kr_92Fq4HgZDp7idGzFlwihPH624NZabnpMgy3FnesdSdu1bCh36mYq8XVP4F24BvaO5xKyRO9qy8W4mMePbWQflB0NrdHWWMN8X4uer1A4-dO-rMVYJE1DTRmEhv72DtZoeZDAy7ozzbgMOULJdWryfrWIuzVOCOIPAr4a7wxfphU3VRywEJ1XToYhcODtq"
          />
        </NavLink>
      </div>
    </header>
  )
}

export default TopAppBar
