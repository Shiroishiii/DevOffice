import AppTopBar from '../../components/layout/AppTopBar'
import { AppPageShell } from '../../layouts/AppLayout'


const aulas = [
    {
        id: 1,
        titulo: "React do Zero",
        descricao: "Aprenda componentes, props e hooks.",
        imagem: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
    },

    {
        id: 2,
        titulo: "Node.js API REST",
        descricao: "Criando APIs completas com Express.",
        imagem: "https://img.youtube.com/vi/DiXbJL3iWVs/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=DiXbJL3iWVs",
    },

    {
        id: 3,
        titulo: "PostgreSQL Completo",
        descricao: "Banco de dados na prática.",
        imagem: "https://img.youtube.com/vi/cNJ-n-7g4Sg/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=cNJ-n-7g4Sg",
    },

    {
        id: 4,
        titulo: "Prisma ORM",
        descricao: "Integração do Prisma com Node.",
        imagem: "https://img.youtube.com/vi/RebA5J-rlwg/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=RebA5J-rlwg",
    },
]

const TechTree = () => {


    return (
        <AppPageShell header={<AppTopBar title="Aprenda sobre programação" />}>
            <div>
                <div className="min-h-screen bg-[#0b0b1f] p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {aulas.map((aula) => (
                            <a
                                key={aula.id}
                                href={aula.link}
                                target="_blank"
                                rel="noreferrer"
                                className="
          bg-[#121228]
          rounded-3xl
          overflow-hidden
          shadow-[0_0_25px_rgba(0,0,0,0.5)]
          hover:scale-105
          hover:shadow-blue-500/20
          transition-all
          duration-300
          border border-zinc-800
        "
                            >
                                <img
                                    src={aula.imagem}
                                    alt={aula.titulo}
                                    className="w-full h-52 object-cover"
                                />

                                <div className="p-6 flex flex-col gap-4">
                                    <h2 className="text-2xl font-bold text-white">
                                        {aula.titulo}
                                    </h2>

                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {aula.descricao}
                                    </p>

                                    <button
                                        className="
              mt-4
              bg-blue-600
              hover:bg-blue-500
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
            "
                                    >
                                        Assistir Aula
                                    </button>
                                </div>
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </AppPageShell>
    )
}

export default TechTree
