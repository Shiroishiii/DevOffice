import { NavLink } from 'react-router'

const footerLinks = [
  { to: '/configuracoes', label: 'Documentação' },
  { to: '/configuracoes', label: 'Changelog' },
  { to: '/configuracoes', label: 'Segurança' },
  { to: '/configuracoes', label: 'Privacidade' },
]

const AppFooter = () => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-between gap-4 border-t border-white/10 bg-[#0e0d16] px-8 py-6 md:flex-row">
      <div className="flex items-center gap-4">
        <NavLink className="font-space text-[18px] font-bold text-[#c4c0ff]" to="/">
          DevOffice OS
        </NavLink>
        <span className="hidden text-[#c7c4d8]/30 md:block">|</span>
        <p className="text-[12px] text-[#c7c4d8]">© 2024 DevOffice OS. Todos os direitos reservados.</p>
      </div>
      <div className="flex gap-6">
        {footerLinks.map((link) => (
          <NavLink
            key={link.label}
            className="text-[10px] font-bold uppercase tracking-widest text-[#c7c4d8] transition-colors hover:text-white"
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </footer>
  )
}

export default AppFooter
