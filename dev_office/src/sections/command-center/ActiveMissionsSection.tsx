import { NavLink } from 'react-router'
import MissionCard from '../../components/command-center/MissionCard'

const missions = [
  {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9_j7tv2aC7AocHjm2YaKnGiccgQ2MU-m1R8AdxxpaL7_6NfduyTqUE4PV_c-916oRwuZ7AY8c8hwdzoet5QECrB_jJK0o_s-MdwpQOgJrdLZ1IOxZqa1fxVp21EJ0yeiHI9jtBLxQlgD_MEwRipmMi8YUhCv4t-Um0uuJzUjvRBMu8QQRxR-hZuaiuw0lj4D3gdl8AmVCErMgsX4YT2m-jHaXBMUD0a76MDt7dbWqZ9zsdBvlPHy-Cl4EWtplvUysoEONObzSs64v',
    imageAlt: 'Missão Infiltração de Sistema',
    tags: [
      { label: 'Backend', className: 'bg-red-500/10 text-red-400' },
      { label: 'Node.js', className: 'bg-[#35343e] text-[#c7c4d8]' },
    ],
    title: 'Infiltração de Sistema',
    description:
      'Infiltre a infraestrutura de API legada e otimize o throughput em 40%. Vulnerabilidade crítica detectada no middleware de autenticação.',
    xpReward: 'Recompensa: 2.500 XP',
    deployButtonClass: 'border-[#a2e7ff] text-[#a2e7ff] hover:bg-[#a2e7ff]/10',
    hoverBorderClass: 'hover:border-[#a2e7ff]/30',
  },
  {
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUB-1Rmtw0MY6XrbxVEIqkRaE-NrICkru6O-rVIYZMPxus7e3uHroSfGTzBIPipTlxw4DuxUNxFAmOAc3G5P_3G8bIi6m5SfYioFAP0Nh7TlcvhJRrewl-A3HMB9m7yVki1MfT-HoFvl_rB44--tcxLQ9scXyP0vZthpOmjlPPBEmUIFngz-KkPeZNnHG7H2c6D-z6dnglR_5DizbeuUu47zeyJ8Jw6Sn0EWnBe-gRHk7OPzxz2179RPdFH5nD5_FfNuNpCZ70juIQ',
    imageAlt: 'Missão Interface Quântica',
    tags: [
      { label: 'Frontend', className: 'bg-[#c4c0ff]/10 text-[#c4c0ff]' },
      { label: 'React', className: 'bg-[#35343e] text-[#c7c4d8]' },
    ],
    title: 'Interface Quântica',
    description:
      'Implemente um dashboard com motion usando framer-motion e os novos tokens de estilo DevOffice para a frota Alpha.',
    xpReward: 'Recompensa: 1.800 XP',
    deployButtonClass: 'border-[#c4c0ff] text-[#c4c0ff] hover:bg-[#c4c0ff]/10',
    hoverBorderClass: 'hover:border-[#c4c0ff]/30',
  },
]

const ActiveMissionsSection = () => {
  return (
    <div className="flex flex-col gap-6 lg:col-span-8">
      <div className="flex items-center justify-between">
        <h2 className="font-space text-[24px] font-bold">Missões Ativas</h2>
        <NavLink className="text-xs font-bold uppercase tracking-widest text-[#c4c0ff] hover:underline" to="/registro-missoes">
          Ver Todas
        </NavLink>
      </div>
      {missions.map((mission) => (
        <MissionCard key={mission.title} {...mission} />
      ))}
    </div>
  )
}

export default ActiveMissionsSection
