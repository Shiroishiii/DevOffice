const features = [
  {
    icon: 'military_tech',
    iconColorClass: 'text-[#c4c0ff]',
    iconBgClass: 'bg-[#c4c0ff]/20',
    title: 'Missões Reais',
    description:
      'Enfrente desafios técnicos reais de empresas parceiras. Nada de "ToDo List" — resolva problemas que o mercado realmente paga para solucionar.',
  },
  {
    icon: 'groups',
    iconColorClass: 'text-[#a2e7ff]',
    iconBgClass: 'bg-[#a2e7ff]/20',
    title: 'Squads de Elite',
    description:
      'Trabalhe em equipe com outros desenvolvedores sob a supervisão de mentores seniores. Aprenda Git, Code Review e metodologias ágeis na prática.',
  },
  {
    icon: 'monitoring',
    iconColorClass: 'text-[#d0bcff]',
    iconBgClass: 'bg-[#d0bcff]/20',
    title: 'Progressão Visual',
    description:
      'Visualize cada conquista através de um sistema de XP e rankings. Transforme seu currículo em uma árvore de habilidades dinâmica e interativa.',
  },
]

const FeaturesSection = () => {
  return (
    <section className="bg-[#0e0d16] px-5 py-24 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-space mb-4 text-4xl font-semibold text-white md:text-5xl">A Forja do Desenvolvedor Moderno</h2>
          <p className="mx-auto max-w-2xl text-[#c7c4d8]">
            Ferramentas de alto desempenho para acelerar sua carreira em direção ao nível Sênior.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card neon-border-hover flex flex-col gap-4 rounded-xl p-8 transition-all">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.iconBgClass}`}>
                <span className={`material-symbols-outlined ${feature.iconColorClass}`}>{feature.icon}</span>
              </div>
              <h3 className="font-space text-2xl text-white">{feature.title}</h3>
              <p className="text-[#c7c4d8]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
