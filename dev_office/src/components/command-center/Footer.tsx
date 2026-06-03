const Footer = () => {
  return (
    <footer className="mx-auto mt-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-8 border-t border-white/10 bg-[#0e0d16] px-5 py-12 md:flex-row md:px-16">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <span className="font-space text-3xl font-bold text-[#c4c0ff]">DevOffice</span>
        <p className="text-center text-base text-[#c7c4d8] md:text-left">© 2026 DevOffice OS. All rights reserved.</p>
      </div>
      <div className="flex gap-8">
        <a className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8] transition-colors hover:text-white" href="#">
          Documentation
        </a>
        <a className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8] transition-colors hover:text-white" href="#">
          Changelog
        </a>
        <a className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8] transition-colors hover:text-white" href="#">
          Security
        </a>
        <a className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8] transition-colors hover:text-white" href="#">
          Privacy
        </a>
      </div>
    </footer>
  )
}

export default Footer
