import { NavLink } from 'react-router'

const footerLinks = [
  { to: '/configuracoes', label: 'Documentação' },
  { to: '/configuracoes', label: 'Changelog' },
  { to: '/configuracoes', label: 'Segurança' },
  { to: '/configuracoes', label: 'Privacidade' },
]

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0e0d16] py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-8 px-5 md:flex-row md:px-16">
        <div className="flex flex-col gap-4">
          <NavLink className="font-space text-3xl font-bold text-[#c4c0ff]" to="/">
            DevOffice
          </NavLink>
          <p className="max-w-xs text-sm text-[#c7c4d8]">
            A plataforma definitiva para quem não se contenta com o básico. Suba de nível agora.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <NavLink
              key={link.label}
              className="text-xs uppercase tracking-widest text-[#c7c4d8] transition-colors hover:text-white"
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="text-xs text-[#c7c4d8]/50">© 2024 DevOffice OS. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

export default Footer
