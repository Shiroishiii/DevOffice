const checklistItems = [
  { done: true, text: 'Mapear loops de auth existentes em /src/apex/auth' },
  { done: true, text: 'Identificar pontos de entrada vulneráveis a quântica' },
  { done: false, text: 'Injetar biblioteca de criptografia Dilithium2', active: true },
  { done: false, text: 'Teste de estresse sob condições de alta latência', dimmed: true },
]

const TacticalChecklist = () => {
  return (
    <div className="custom-scrollbar z-10 w-1/3 overflow-y-auto border-r border-white/10 p-6">
      <h4 className="mb-4 text-[12px] font-bold uppercase tracking-widest text-white">Checklist Tático</h4>
      <ul className="space-y-4">
        {checklistItems.map((item) => (
          <li key={item.text} className="flex items-start gap-3">
            <span
              className={`material-symbols-outlined text-[20px] ${item.done || item.active ? 'text-[#c4c0ff]' : 'text-[#c7c4d8]'}`}
              style={item.done ? { fontVariationSettings: '"FILL" 1' } : undefined}
            >
              {item.done ? 'check_box' : 'check_box_outline_blank'}
            </span>
            <span
              className={`text-[13px] text-[#e4e1ee] ${item.done ? 'line-through opacity-50' : ''} ${item.dimmed ? 'opacity-50' : ''}`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-12 rounded-lg border border-[#ffb4ab]/20 bg-[#93000a]/10 p-4">
        <div className="mb-2 flex items-center gap-2 text-[#ffb4ab]">
          <span className="material-symbols-outlined text-[18px]">warning</span>
          <p className="text-[11px] font-bold uppercase tracking-widest">Ameaça Detectada</p>
        </div>
        <p className="text-[12px] text-[#c7c4d8]">
          O código legado está fortemente acoplado ao System Apex Core. Alto risco de quebrar o build 4.2.1.
        </p>
      </div>
    </div>
  )
}

export default TacticalChecklist
