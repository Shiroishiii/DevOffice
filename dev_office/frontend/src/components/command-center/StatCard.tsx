import type { ReactNode } from 'react'

type StatCardProps = {
  label: string
  value: string
  icon: string
  valueClassName?: string
  extra?: ReactNode
}

const StatCard = ({ label, value, icon, valueClassName = 'text-white', extra }: StatCardProps) => {
  return (
    <div className="glass-card group relative flex h-32 flex-col justify-between overflow-hidden rounded-xl p-6">
      <div className="absolute -top-4 -right-4 opacity-5 transition-opacity group-hover:opacity-10">
        <span className="material-symbols-outlined text-8xl">{icon}</span>
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">{label}</span>
      <div className="flex items-baseline gap-2">
        <span className={`font-space text-[40px] leading-none ${valueClassName}`}>{value}</span>
        {extra}
      </div>
    </div>
  )
}

export default StatCard
