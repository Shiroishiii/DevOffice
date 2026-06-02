import { Tarefa, PrismaClient } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma";

export class TarefaRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async listarTarefas(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany();
  }

  async buscarPorId(id: number): Promise<Tarefa | null> {
    return this.prisma.tarefa.findUnique({
      where: { id },
    });
  }

  async criarTarefa(
    dados: Omit<Tarefa, "id" | "status" | "usuario_id">,
  ): Promise<Tarefa> {
    return this.prisma.tarefa.create({
      data: dados,
    });
  }

  async atualizarTarefa(
    id: number,
    dados: Partial<Omit<Tarefa, "id">>,
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

  async concluirTarefa(id: number, usuario_id: number): Promise<Tarefa> {
    return this.prisma.tarefa.update({
      where: { id },
      data: {
        status: "CONCLUIDO",
        usuario_id,
      },
    });
  }
}

export const tarefaRepository = new TarefaRepository(prisma);
