const Footer = () => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-between gap-4 border-t border-white/10 bg-[#0e0d16] px-8 py-6 md:flex-row">
      <div className="flex items-center gap-4">
        <span className="font-space text-[18px] font-bold text-[#c4c0ff]">DevOffice OS</span>
        <span className="hidden text-[#c7c4d8]/30 md:block">|</span>
        <p className="text-[12px] text-[#c7c4d8]">© 2024 DevOffice OS. All rights reserved.</p>
      </div>
      <div className="flex gap-6">
        {['Documentation', 'Changelog', 'Security', 'Privacy'].map((link) => (
          <a
            key={link}
            className="text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8] transition-colors hover:text-white"
            href="#"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
