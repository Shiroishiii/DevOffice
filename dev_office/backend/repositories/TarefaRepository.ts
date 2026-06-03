import { Tarefa, PrismaClient } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma";

export class TarefaRepository {
  async verificarConclusao(usuarioId: number, tarefaId: number): Promise<boolean> {
    const registro = await this.prisma.usuarioTarefa.findUnique({
      where: {
        usuarioId_tarefaId: {
          usuarioId,
          tarefaId,
        },
      },
    });

    return !!registro?.concluida;
  }
  constructor(private readonly prisma: PrismaClient) { }

  async listarTarefas(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany({
      include: {
        tarefasUsuarios: true
      }
    });
  }

  async buscarPorId(id: number): Promise<Tarefa | null> {
    return this.prisma.tarefa.findUnique({
      where: { id },
      include: {
        tarefasUsuarios: true
      }
    });
  }

  async criarTarefa(
    dados: Omit<Tarefa, "id" | "tarefasUsuarios">
  ): Promise<Tarefa> {
    return this.prisma.tarefa.create({
      data: dados,
    });
  }

  async atualizarTarefa(
    id: number,
    dados: Partial<Omit<Tarefa, "id" | "tarefasUsuarios">>
  ): Promise<Tarefa> {
    return this.prisma.tarefa.update({
      where: { id },
      data: dados,
    });
  }

  async deletarTarefa(id: number): Promise<Tarefa> {
    return this.prisma.tarefa.delete({
      where: { id },
    });
  }

  async concluirTarefa(usuarioId: number, tarefaId: number) {
    // 1. marca como concluída na tabela intermediária
    await this.prisma.usuarioTarefa.upsert({
      where: {
        usuarioId_tarefaId: {
          usuarioId,
          tarefaId,
        },
      },
      update: {
        concluida: true,
        dataConclusao: new Date(),
      },
      create: {
        usuarioId,
        tarefaId,
        concluida: true,
        dataConclusao: new Date(),
      },
    });

    // 2. pega pontos da tarefa
    const tarefa = await this.prisma.tarefa.findUnique({
      where: { id: tarefaId },
    });

    if (!tarefa) throw new Error("Tarefa não encontrada");

    // 3. incrementa pontos do usuário
    await this.prisma.usuario.update({
      where: { id: usuarioId },
      data: {
        ponto: {
          increment: tarefa.ponto,
        },
      },
    });
  }
}

export const tarefaRepository = new TarefaRepository(prisma);