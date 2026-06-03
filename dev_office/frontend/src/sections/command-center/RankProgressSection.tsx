import { useEffect, useRef } from 'react'

const RankProgressSection = () => {
  const progressRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const progressCircle = progressRef.current
    if (!progressCircle) return

    progressCircle.style.strokeDashoffset = '628'
    const timeout = window.setTimeout(() => {
      progressCircle.style.transition = 'stroke-dashoffset 2s ease-out'
      progressCircle.style.strokeDashoffset = '94'
    }, 500)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className="glass-card flex flex-col items-center justify-center rounded-xl p-8 text-center lg:col-span-4">
      <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-[#c7c4d8]">Status de Rank</h2>
      <div className="relative flex h-56 w-56 items-center justify-center">
        <svg className="h-full w-full -rotate-90">
          <circle
            className="text-[#35343e]"
            cx="112"
            cy="112"
            fill="transparent"
            r="100"
            stroke="currentColor"
            strokeWidth="12"
          />
          <circle
            ref={progressRef}
            className="drop-shadow-[0_0_8px_rgba(196,192,255,0.5)]"
            cx="112"
            cy="112"
            fill="transparent"
            r="100"
            stroke="url(#rank-gradient)"
            strokeDasharray="628"
            strokeDashoffset="94"
            strokeLinecap="round"
            strokeWidth="12"
          />
          <defs>
            <linearGradient id="rank-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#c4c0ff" />
              <stop offset="100%" stopColor="#a2e7ff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="pulse-accent mb-2 h-24 w-24">
            <img
              alt="Diamond I Rank Badge"
              className="h-full w-full object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVCqBdfB-T7RueVJ7rj5TU6ILbw1fNp0GtHlV96ff--r1R5WdK07h5z5Xw0bbSkEVQV4JeSiU_boHZzqZmCgeX1Js12vlY05cOvFdAqzZ0V66CppGxR3BaTBGyYCNaDMFMr8iNGohVMvm6axZRlKnR7T2U1q2417AzybC9IWz0wdE8KvOtnFof_JHflJe2iVIIWduPYMra7ZhtqM42cXt_CoNY5pdZdtgeOQFg_dZXnJyvpWV7t4z_xnDyh1eDS4fUTN877jpp9lB"
            />
          </div>
          <span className="font-space text-[20px] font-bold tracking-wider text-white uppercase">Diamante I</span>
          <span className="text-[10px] uppercase tracking-widest text-[#c7c4d8]">Divisão Arquiteto</span>
        </div>
      </div>
      <div className="mt-8 w-full space-y-2">
        <div className="flex justify-between text-[12px]">
          <span className="text-[#c7c4d8]">Progresso para Diamante II</span>
          <span className="font-bold text-white">850 / 1000 XP</span>
        </div>
        <div className="h-1 w-full rounded-full bg-[#35343e]">
          <div className="h-full w-[85%] bg-[#c4c0ff]" />
        </div>
      </div>
    </div>
  )
}

export default RankProgressSection
