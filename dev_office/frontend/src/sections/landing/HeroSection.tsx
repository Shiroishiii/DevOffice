import { useEffect } from 'react'
import { NavLink } from 'react-router'

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const glows = document.querySelectorAll<HTMLElement>('.neon-glow-primary')
      glows.forEach((glow) => {
        const rect = glow.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        glow.style.setProperty('--x', `${x}px`)
        glow.style.setProperty('--y', `${y}px`)
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative flex min-h-230.25 items-center overflow-hidden px-5 md:px-16">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-10 h-64 w-64 animate-pulse rounded-full border border-[#c4c0ff]/30" />
        <div className="absolute right-10 bottom-1/4 h-96 w-96 rotate-45 rounded-lg border border-[#a2e7ff]/20" />
        <div className="scanline absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c4c0ff]/20 bg-[#c4c0ff]/10 px-3 py-1">
            <span className="material-symbols-outlined text-sm text-[#c4c0ff]" style={{ fontVariationSettings: '"FILL" 1' }}>
              terminal
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#c4c0ff]">Protocolo de Operação v2.0</span>
          </div>
          <h1 className="font-space text-[48px] leading-tight font-bold text-white md:text-[72px]">
            Evolua como dev.
            <br />
            <span className="text-[#c4c0ff]">Conquiste seu futuro.</span>
          </h1>
          <p className="max-w-xl text-[18px] leading-relaxed text-[#c7c4d8]">
            Transforme horas de estudo em experiência real. Participe de squads de elite, complete missões de empresas reais e
            construa um portfólio visual inquestionável.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <NavLink
              className="rounded-lg bg-linear-to-r from-[#c4c0ff] to-[#d0bcff] px-8 py-4 text-lg font-bold text-[#2000a4] transition-all hover:shadow-[0_0_20px_rgba(196,192,255,0.4)]"
              to="/cadastro"
            >
              Começar agora
            </NavLink>
            <NavLink
              className="rounded-lg border border-[#a2e7ff] px-8 py-4 text-lg font-bold text-[#a2e7ff] transition-all hover:bg-[#a2e7ff]/10"
              to="/centro-comando"
            >
              Descobrir mais
            </NavLink>
          </div>
        </div>
        <div className="relative hidden items-center justify-center lg:flex">
          <div className="glass-card relative flex h-125 w-125 items-center justify-center rounded-full border-[#c4c0ff]/20">
            <div className="absolute inset-0 rounded-full bg-[#c4c0ff]/5 blur-3xl" />
            <div className="animate-float absolute top-10 left-10 rounded-xl border border-white/10 bg-[#13121b] p-4 shadow-xl">
              <span className="material-symbols-outlined text-4xl text-[#a2e7ff]">javascript</span>
            </div>
            <div className="animate-float absolute right-0 bottom-20 rounded-xl border border-white/10 bg-[#13121b] p-4 shadow-xl [animation-delay:1s]">
              <span className="material-symbols-outlined text-4xl text-[#c4c0ff]">deployed_code</span>
            </div>
            <div className="animate-float absolute top-1/2 -left-10 rounded-xl border border-white/10 bg-[#13121b] p-4 shadow-xl [animation-delay:2s]">
              <span className="material-symbols-outlined text-4xl text-[#d0bcff]">database</span>
            </div>
            <div className="text-center">
              <img
                alt="Painel futurista de desenvolvedor"
                className="h-80 w-80 rounded-2xl object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzPvM_GmUBEAVQDdbfwscXwKMZ9-ZDhktT2pXWlANNCalbYcwJWaeKRHKYr85Ylcu2RgQEQjV2MVnJoxiLFfeLUrxPiFf5SXnmHiN_DHdBMQmjEcH5EbM0BJ_3xG91z8pucJejqHoSA9eoa9x6k3RgbS5hAQ83hnA9rN9E5N1Ep8S3zx6W69R93bqiyq5f1qYM0MFfuyHZBYD0rFqp9Gap4gb_rtH1QkQ8XmhMjnwgPS5Jz0iMAynjd7EzEv_uZAP9RxWmhlqQpvD"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
