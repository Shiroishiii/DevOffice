import { Router } from "express";
import { usuarioController } from "../controller/UsuarioController";

export const usuarioRouter = Router();

usuarioRouter.get("/", usuarioController.listarUsuarios);

usuarioRouter.get("/:id", usuarioController.getUsuarioId);

usuarioRouter.post("/", usuarioController.criarUsuario);

usuarioRouter.put("/:id", usuarioController.atualizarUsuario);

usuarioRouter.delete("/:id", usuarioController.deletarUsuario);
