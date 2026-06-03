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

  async criarTarefa(
    dados: Omit<Tarefa, "id" | "tarefasUsuarios">
  ) {
    if (!dados.titulo || !dados.descricao || !dados.dataVencimento) {
      throw new Error(
        "Título, descrição e data de vencimento são obrigatórios."
      );
    }

    return this.tarefaRepository.criarTarefa(dados);
  }

  async atualizarTarefa(
    id: number,
    dados: Partial<Omit<Tarefa, "id" | "tarefasUsuarios">>
  ) {
    await this.buscarPorId(id);
    return this.tarefaRepository.atualizarTarefa(id, dados);
  }

  async deletarTarefa(id: number) {
    await this.buscarPorId(id);
    return this.tarefaRepository.deletarTarefa(id);
  }

  async concluirTarefa(usuarioId: number, tarefaId: number) {
    if (!usuarioId) {
      throw new Error("usuarioId é obrigatório");
    }

    const tarefa = await this.buscarPorId(tarefaId);

    const jaConcluida = await this.tarefaRepository.verificarConclusao(
      usuarioId,
      tarefaId
    );

    if (jaConcluida) {
      throw new Error("Essa tarefa já foi concluída por este usuário.");
    }

    return this.tarefaRepository.concluirTarefa(usuarioId, tarefaId);
  }
}

export const tarefaServices = new TarefaService(tarefaRepository);