import { NavLink } from 'react-router'
import CompanyCard from '../../components/landing/CompanyCard'

const companies = [
  {
    name: 'NeuroCore',
    description: 'Líder global em interfaces cérebro-computador e IA neural aplicada.',
    missions: '3 MISSÕES ATIVAS',
    icon: 'psychology',
    iconColorClass: 'text-[#c4c0ff]',
    gradientClass: 'bg-gradient-to-r from-blue-900 to-indigo-900',
    imageAlt: 'Sede conceitual NeuroCore',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5xskBKeB5j3wdVb4FyBAdg4MbDqhpNYoznocmt-nkMfK8CsIEllImDYPVCri3o3UpqZxVau0HI8M9b6uzxRrkcw-C1-PhamRrLv__EftOvjoTnTc_JE6tut8xaxSm7SixDD_rQrap-2TfvVYng94X-w1TVA3CQEBgmPH8cekysxgne14MYX5G7dRypjW2eNDoUiTaaNfWPGpNRnMRWLFj0joX1URzZkXGYX7SKpGZDo47jlw9aCEJgHjeZnAOosqT9W75KYLnZiyD',
    techs: ['REACT', 'PYTHON', 'RUST'],
  },
  {
    name: 'Apex Systems',
    description: 'Infraestrutura crítica e sistemas de logística aeroespacial de alta disponibilidade.',
    missions: '5 MISSÕES ATIVAS',
    icon: 'rocket_launch',
    iconColorClass: 'text-[#a2e7ff]',
    gradientClass: 'bg-gradient-to-r from-teal-900 to-emerald-900',
    imageAlt: 'Hub tecnológico Apex Systems',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeMhXpfA_ZQMvqZiYQRsfNaVZcdUrRb3-ujL3TqKBZPlrcTXT_8AjiwYdYXKxwvJ6m2Z0KTvWQ4a1QPVIDwXT5hthBcKD-cyVEp_SsPjx_YKdxzwhimOXu9OVyKHbvSjgqNKQ9eJRrxxj5d4vTWTvV8jeoP2UMBYqw4ytm3kD9mlDCl1IW-thXElEjra7Bh8_DNq-YM7wNy4pgZ_o4HdEtRO0RtgqUx6ztorZp_b_S5OCtjlnU3iBTLZkJbZZaaKajdb2g8wBbTJ1t',
    techs: ['GO', 'AWS', 'K8S'],
  },
  {
    name: 'DataFlux',
    description: 'Processamento de dados em tempo real e análise preditiva para o mercado financeiro.',
    missions: '2 MISSÕES ATIVAS',
    icon: 'data_exploration',
    iconColorClass: 'text-[#d0bcff]',
    gradientClass: 'bg-gradient-to-r from-purple-900 to-pink-900',
    imageAlt: 'Instalação cloud DataFlux',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBDDBI1lHwVqzAg3rSpseUEN0ffmF-x3cW41seKjfsu2VwoIph5WjQMR9Diu7Fifl4-cocGMnWF4PEAM1K19lR05vwXuGP1WieHrdoxbLrEcK1is53kVMdP2vxiRmKV0T3V0GhlKNolsRe0aubuvDS2nelV1WufLb4_7AjA7PmyMo3UiAX9IBIopoLmL5jjN4lXxCELq5ermpulpl_qhZauVrJOw8b0kTYLvlGLcSnu_HpK-Nu325rrNVKvGEpVRHODT2HdGUqya5Bb',
    techs: ['TS', 'DOCKER', 'SQL'],
  },
]

const CompanySection = () => {
  return (
    <section className="border-y border-white/5 bg-[#0e0d16] px-5 py-24 md:px-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 className="font-space mb-4 text-4xl font-semibold text-white md:text-5xl">Centrais de Missão</h2>
            <p className="text-[#c7c4d8]">Conecte-se com as empresas tech que estão construindo o futuro.</p>
          </div>
          <NavLink
            className="border-b border-[#c4c0ff] pb-1 text-xs uppercase tracking-widest text-[#c4c0ff] transition-all hover:border-white"
            to="/registro-missoes"
          >
            Ver todas as empresas
          </NavLink>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanySection
