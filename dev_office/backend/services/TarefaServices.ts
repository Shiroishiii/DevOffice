import { tarefaRepository, TarefaRepository } from "../repositories/TarefaRepository";
import { Tarefa } from "../prisma/generated/prisma/client";

export class TarefaService {
  constructor(private readonly tarefaRepository: TarefaRepository) {}

  async listarTarefas() {
    return this.tarefaRepository.listarTarefas();
  }

  async buscarPorId(id: number) {
    const tarefa = await this.tarefaRepository.buscarPorId(id);

    if (!tarefa) {
      throw new Error("Tarefa não encontrada.");
    }

    return tarefa;
  }

  async criarTarefa(dados: Omit<Tarefa, "id" | "status" | "usuario_id">) {
    if (!dados.titulo || !dados.descricao || !dados.data_vencimento) {
      throw new Error(
        "Título, descrição e data de vencimento são obrigatórios.",
      );
    }

    return this.tarefaRepository.criarTarefa(dados);
  }

  async atualizarTarefa(id: number, dados: Partial<Omit<Tarefa, "id">>) {
    await this.buscarPorId(id); // valida se existe antes de atualizar
    return this.tarefaRepository.atualizarTarefa(id, dados);
  }

  async deletarTarefa(id: number) {
    await this.buscarPorId(id); // valida se existe antes de deletar
    return this.tarefaRepository.deletarTarefa(id);
  }

  async concluirTarefa(id: number, usuario_id: number) {
    const tarefa = await this.buscarPorId(id);

    if (tarefa.status === "CONCLUIDO") {
      throw new Error("Essa tarefa já foi concluída.");
    }

    return this.tarefaRepository.concluirTarefa(id, usuario_id);
  }
}
export const tarefaServices = new TarefaService(tarefaRepository);
