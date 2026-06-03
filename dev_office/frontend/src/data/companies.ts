export type Company = {
  id: string
  name: string
  description: string
  icon: string
  iconColorClass: string
  gradientClass: string
  imageUrl: string
  techs: string[]
}

export const registerCompanies: Company[] = [
  {
    id: 'neurocore',
    name: 'NeuroCore',
    description: 'IA neural e interfaces cérebro-computador para produtos de alta escala.',
    icon: 'psychology',
    iconColorClass: 'text-[#c4c0ff]',
    gradientClass: 'bg-gradient-to-r from-blue-900 to-indigo-900',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5xskBKeB5j3wdVb4FyBAdg4MbDqhpNYoznocmt-nkMfK8CsIEllImDYPVCri3o3UpqZxVau0HI8M9b6uzxRrkcw-C1-PhamRrLv__EftOvjoTnTc_JE6tut8xaxSm7SixDD_rQrap-2TfvVYng94X-w1TVA3CQEBgmPH8cekysxgne14MYX5G7dRypjW2eNDoUiTaaNfWPGpNRnMRWLFj0joX1URzZkXGYX7SKpGZDo47jlw9aCEJgHjeZnAOosqT9W75KYLnZiyD',
    techs: ['React', 'Python', 'Rust'],
  },
  {
    id: 'apex',
    name: 'Apex Systems',
    description: 'Infraestrutura crítica e sistemas de alta disponibilidade para o setor aeroespacial.',
    icon: 'rocket_launch',
    iconColorClass: 'text-[#a2e7ff]',
    gradientClass: 'bg-gradient-to-r from-teal-900 to-emerald-900',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeMhXpfA_ZQMvqZiYQRsfNaVZcdUrRb3-ujL3TqKBZPlrcTXT_8AjiwYdYXKxwvJ6m2Z0KTvWQ4a1QPVIDwXT5hthBcKD-cyVEp_SsPjx_YKdxzwhimOXu9OVyKHbvSjgqNKQ9eJRrxxj5d4vTWTvV8jeoP2UMBYqw4ytm3kD9mlDCl1IW-thXElEjra7Bh8_DNq-YM7wNy4pgZ_o4HdEtRO0RtgqUx6ztorZp_b_S5OCtjlnU3iBTLZkJbZZaaKajdb2g8wBbTJ1t',
    techs: ['Go', 'AWS', 'K8s'],
  },
  {
    id: 'dataflux',
    name: 'DataFlux',
    description: 'Processamento de dados em tempo real e análise preditiva para o mercado financeiro.',
    icon: 'data_exploration',
    iconColorClass: 'text-[#d0bcff]',
    gradientClass: 'bg-gradient-to-r from-purple-900 to-pink-900',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDDBI1lHwVqzAg3rSpseUEN0ffmF-x3cW41seKjfsu2VwoIph5WjQMR9Diu7Fifl4-cocGMnWF4PEAM1K19lR05vwXuGP1WieHrdoxbLrEcK1is53kVMdP2vxiRmKV0T3V0GhlKNolsRe0aubuvDS2nelV1WufLb4_7AjA7PmyMo3UiAX9IBIopoLmL5jjN4lXxCELq5ermpulpl_qhZauVrJOw8b0kTYLvlGLcSnu_HpK-Nu325rrNVKvGEpVRHODT2HdGUqya5Bb',
    techs: ['TypeScript', 'Docker', 'SQL'],
  },
]
