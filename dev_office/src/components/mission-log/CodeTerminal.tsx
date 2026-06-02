import { useEffect, useState } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'
import '@fontsource/jetbrains-mono'

export default function CodeTerminal() {
  const [code, setCode] = useState(`function isEven(num) {

}`)

  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const monaco = useMonaco()

  useEffect(() => {
    if (!monaco) return

    monaco.editor.defineTheme('devoffice', {
      base: 'vs-dark',
      inherit: true,

      rules: [
        {
          token: 'keyword',
          foreground: 'C4C0FF'
        },
        {
          token: 'string',
          foreground: 'A2E7FF'
        },
        {
          token: 'comment',
          foreground: '6F6B8A'
        },
        {
          token: 'number',
          foreground: 'FFB4AB'
        },
        {
          token: 'type',
          foreground: '8781FF'
        }
      ],

      colors: {
        'editor.background': '#0E0D16',

        'editor.foreground': '#FFFFFF',

        'editorLineNumber.foreground': '#5E5A75',

        'editorLineNumber.activeForeground': '#C4C0FF',

        'editorCursor.foreground': '#C4C0FF',

        'editor.selectionBackground': '#8781FF33',

        'editor.lineHighlightBackground': '#FFFFFF08',

        'editorIndentGuide.background1': '#2B2840',

        'editorIndentGuide.activeBackground1': '#8781FF',

        'editorSuggestWidget.background': '#13121B',

        'editorSuggestWidget.border': '#2B2840',

        'editorHoverWidget.background': '#13121B',

        'editorHoverWidget.border': '#2B2840'
      }
    })

    monaco.editor.setTheme('devoffice')
  }, [monaco])


  async function executeCode() {
    try {
      setLoading(true)
      setOutput('Executando...')

      const response = await fetch('http://localhost:3000/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: 'javascript',
          code,
        }),
      })

      const result = await response.json()

      setOutput(result.output || 'Sem saída')
    } catch (error) {
      setOutput(`Erro: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 overflow-hidden p-4">
      <div className="grid h-full grid-rows-[1fr_180px] gap-4">

        {/* Editor */}
        <div className="overflow-hidden rounded-xl border border-white/10">
          <Editor
            height="100%"
            width="100%"
            language="typescript"
            theme="devoffice"
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              automaticLayout: true,
              minimap: { enabled: false },
              fontSize: 16,
              scrollBeyondLastLine: false,
              fontFamily: 'JetBrains Mono',
              fontLigatures: true,
              cursorBlinking: 'phase',
              smoothScrolling: true,
              cursorSmoothCaretAnimation: 'on'
            }}
          />
        </div>
        {/* Bottom */}
        <div className="grid grid-cols-[1fr_220px] gap-4">
          {/* Output */}
          <div className="rounded-xl border border-white/10 bg-[#05050a] p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-400">
                Output
              </span>
            </div>
            <pre className="h-full overflow-auto whitespace-pre-wrap font-mono text-sm text-green-400">
              {output}
            </pre>
          </div>
          {/* Execute */}
          <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#11111b] p-4">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#c4c0ff]">
                Status
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${loading ? 'bg-yellow-400' : 'bg-green-400'
                    }`}
                />
                <span className="text-sm">
                  {loading ? 'Executando...' : 'Pronto'}
                </span>
              </div>
            </div>

            <button
              onClick={executeCode}
              disabled={loading}
              className="flex items-center justify-center gap-3 rounded-xl bg-[#c4c0ff] px-6 py-4 text-sm font-bold uppercase tracking-widest text-[#2000a4] shadow-[0_0_30px_rgba(196,192,255,0.25)] transition hover:scale-105"
            >
              <span className="material-symbols-outlined">
                rocket_launch
              </span>

              Executar
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}