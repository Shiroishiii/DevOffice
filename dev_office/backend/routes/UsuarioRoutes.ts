import { Router } from "express";
import { usuarioController } from "../controller/UsuarioController";
import { authController } from "../controller/AuthController";

export const usuarioRouter = Router();

usuarioRouter.get("/", usuarioController.listarUsuarios);

usuarioRouter.get("/:id", usuarioController.getUsuarioId);

usuarioRouter.post("/", usuarioController.criarUsuario);

usuarioRouter.post("/login", authController.login);

usuarioRouter.put("/:id", usuarioController.atualizarUsuario);

usuarioRouter.delete("/:id", usuarioController.deletarUsuario);