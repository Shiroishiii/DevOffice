import { Router } from "express";
import { tarefaController } from "../controllers/TarefaController";


export const tarefaRouter = Router();

tarefaRouter.get("/", (req, res) => tarefaController.listarTarefas(req, res));
tarefaRouter.get("/:id", (req, res) => tarefaController.buscarPorId(req, res));
tarefaRouter.post("/", (req, res) => tarefaController.criarTarefa(req, res));
tarefaRouter.put("/:id", (req, res) => tarefaController.atualizarTarefa(req, res));
tarefaRouter.delete("/:id", (req, res) => tarefaController.deletarTarefa(req, res));
tarefaRouter.patch("/:id/concluir", (req, res) => tarefaController.concluirTarefa(req, res));

export default tarefaRouter;