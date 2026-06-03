export type MissionStatus = 'in-progress' | 'available' | 'locked'

export type Mission = {
  ponto: any
  descricao: ReactNode
  titulo: ReactNode
  id: string
  status: MissionStatus
  statusLabel: string
  levelRequired: string
  title: string
  description?: string
  difficulty?: { icon: string; label: string; colorClass: string }
  xp?: string
  techStack?: { type: 'text' | 'icon'; value: string; colorClass?: string }[]
  footer?: { type: 'time' | 'accept'; value: string }
  category: string
}

export const missions: Mission[] = [
  {
    id: 'apex',
    status: 'in-progress',
    statusLabel: 'Em Progresso',
    levelRequired: 'Nível 40',
    title: 'Refatoração Legada Apex',
    description: 'Otimizando sistemas legados em zonas de alto risco.',
    difficulty: { icon: 'bolt', label: 'Dificuldade: Alta', colorClass: 'text-[#ffb4ab]' },
    xp: '2.500 XP',
    techStack: [
      { type: 'text', value: 'TS', colorClass: 'text-blue-400' },
      { type: 'icon', value: 'terminal' },
      { type: 'text', value: 'Go', colorClass: 'text-cyan-400' },
    ],
    footer: { type: 'time', value: '2h restantes' },
    category: 'Backend',
  },
  {
    id: 'ai-recon',
    status: 'available',
    statusLabel: 'Disponível',
    levelRequired: 'Nível 35',
    title: 'IA de Reconhecimento',
    description: 'Treinando redes neurais para detecção tática de bordas.',
    difficulty: { icon: 'monitoring', label: 'Dificuldade: Média', colorClass: 'text-[#a2e7ff]' },
    xp: '1.800 XP',
    techStack: [
      { type: 'text', value: 'Py', colorClass: 'text-yellow-500' },
      { type: 'icon', value: 'psychology' },
    ],
    footer: { type: 'accept', value: 'Aceitar Missão' },
    category: 'IA',
  },
  {
    id: 'ghost',
    status: 'locked',
    statusLabel: 'Bloqueada',
    levelRequired: 'Nível 50+',
    title: 'Protocolo Ghost Zero',
    category: 'DevOps',
  },
]
