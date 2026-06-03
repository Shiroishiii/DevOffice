import { Request, Response } from "express";
import { TarefaService, tarefaServices } from "../services/TarefaServices";

export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) { }

  async listarTarefas(req: Request, res: Response): Promise<void> {
    try {
      const tarefas = await this.tarefaService.listarTarefas();
      console.log('TAREFAS:', tarefas)
      res.status(200).json(tarefas);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  async buscarPorId(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const tarefa = await this.tarefaService.buscarPorId(id);
      res.status(200).json(tarefa);
    } catch (error: any) {
      res.status(404).json({ mensagem: error.message });
    }
  }

  async criarTarefa(req: Request, res: Response): Promise<void> {
    try {
      const { titulo, descricao, dataVencimento } = req.body;

      const tarefa = await this.tarefaService.criarTarefa({
        titulo,
        descricao,
        dataVencimento: new Date(dataVencimento),
        funcaoEsperada: "",
        codigoBase: "",
        ponto: 0,
        status: "PENDENTE"
      });

      res.status(201).json(tarefa);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  async atualizarTarefa(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const { titulo, descricao, dataVencimento } = req.body;

      const tarefa = await this.tarefaService.atualizarTarefa(id, {
        titulo,
        descricao,
        dataVencimento: dataVencimento
          ? new Date(dataVencimento)
          : undefined,
      });

      res.status(200).json(tarefa);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  async deletarTarefa(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await this.tarefaService.deletarTarefa(id);
      res.status(200).json({ mensagem: "Tarefa deletada com sucesso." });
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

  async concluirTarefa(req: Request, res: Response): Promise<void> {
    try {
      const tarefaId = Number(req.params.id);
      const { usuarioId } = req.body;

      await this.tarefaService.concluirTarefa(usuarioId, tarefaId);

      const tarefaAtualizada = await this.tarefaService.buscarPorId(tarefaId);

      res.status(200).json(tarefaAtualizada);
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  }

}

export const tarefaController = new TarefaController(tarefaServices);