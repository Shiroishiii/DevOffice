import { useEffect, useState } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'
import '@fontsource/jetbrains-mono'

type CodeTerminalProps = {
  codigoInicial: string
  funcaoEsperada: string
  tarefaId: number
}

export default function CodeTerminal({
  codigoInicial,
  funcaoEsperada,
  tarefaId,
}: CodeTerminalProps) {
  const [code, setCode] = useState(codigoInicial)
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const monaco = useMonaco()

  useEffect(() => {
    setCode(codigoInicial)
    setOutput('')
  }, [codigoInicial])

  useEffect(() => {
    if (!monaco) return

    monaco.editor.defineTheme('devoffice', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'C4C0FF' },
        { token: 'string', foreground: 'A2E7FF' },
        { token: 'comment', foreground: '6F6B8A' },
        { token: 'number', foreground: 'FFB4AB' },
      ],
      colors: {
        'editor.background': '#0E0D16',
        'editor.foreground': '#FFFFFF',
        'editorLineNumber.foreground': '#5E5A75',
        'editorLineNumber.activeForeground': '#C4C0FF',
        'editorCursor.foreground': '#C4C0FF',
        'editor.selectionBackground': '#8781FF33',
        'editor.lineHighlightBackground': '#FFFFFF08',
      },
    })

    monaco.editor.setTheme('devoffice')
  }, [monaco])

  async function executeCode() {
    try {
      setLoading(true)
      setOutput('Executando testes...')

      const response = await fetch(
        'http://localhost:3000/api/execute',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tarefaId,
            funcaoEsperada,
            code,
          }),
        }
      )

      const result = await response.json()

      if (result.success) {
        setOutput(`🎉 ${result.output}`)
      } else {
        setOutput(result.output)
      }
    } catch (error) {
      setOutput(`Erro: ${String(error)}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 overflow-hidden p-4">
      <div className="grid h-full grid-rows-[1fr_180px] gap-4">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <Editor
            height="100%"
            language="javascript"
            theme="devoffice"
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              automaticLayout: true,
              minimap: { enabled: false },
              fontSize: 16,
              fontFamily: 'JetBrains Mono',
              fontLigatures: true,
              scrollBeyondLastLine: false,
            }}
          />
        </div>

        <div className="grid grid-cols-[1fr_220px] gap-4">
          <div className="rounded-xl border border-white/10 bg-[#05050a] p-4">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-green-400">
              Output
            </div>

            <pre className="h-full overflow-auto whitespace-pre-wrap font-mono text-sm text-green-400">
              {output}
            </pre>
          </div>

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
              className="flex items-center justify-center gap-3 rounded-xl bg-[#c4c0ff] px-6 py-4 text-sm font-bold uppercase tracking-widest text-[#2000a4]"
            >
              <span className="material-symbols-outlined">
                rocket_launch
              </span>

              {loading ? 'Executando...' : 'Executar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}