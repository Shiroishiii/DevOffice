import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

const connectionString = `postgresql://postgres:senai@localhost:5432/devoffice?schema=public`;

const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString })
})

async function main() {
    const tarefas = [
        {
            titulo: 'Verificar número par',
            descricao: 'Retorne true se o número for par',
            funcaoEsperada: 'isEven',
            codigoBase: `function isEven(num) {

}`,
            ponto: 50,
            testes: [
                { entrada: [2], esperado: true },
                { entrada: [5], esperado: false }
            ]
        },

        {
            titulo: 'Somar dois números',
            descricao: 'Retorne a soma de dois números',
            funcaoEsperada: 'sum',
            codigoBase: `function sum(a, b) {

}`,
            ponto: 50,
            testes: [
                { entrada: [2, 3], esperado: 5 },
                { entrada: [10, 20], esperado: 30 }
            ]
        },

        {
            titulo: 'Maior número',
            descricao: 'Retorne o maior entre dois números',
            funcaoEsperada: 'max',
            codigoBase: `function max(a, b) {

}`,
            ponto: 50,
            testes: [
                { entrada: [10, 5], esperado: 10 },
                { entrada: [3, 7], esperado: 7 }
            ]
        }
    ]

    for (const tarefa of tarefas) {
        await prisma.tarefa.create({
            data: {
                titulo: tarefa.titulo,
                descricao: tarefa.descricao,
                funcaoEsperada: tarefa.funcaoEsperada,
                codigoBase: tarefa.codigoBase,
                ponto: tarefa.ponto,
                dataVencimento: new Date('2030-01-01'),

                testes: {
                    create: tarefa.testes.map((teste: { entrada: any; esperado: any; }) => ({
                        entrada: teste.entrada,
                        esperado: teste.esperado
                    }))
                }
            }
        })
    }

    console.log('Seed executado com sucesso!')
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect()
    })