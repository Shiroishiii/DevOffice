import { Router } from "express";
import { usuarioController } from "../controller/UsuarioController";

const router = Router();

router.get("/", usuarioController.listarUsuarios);
router.get("/:id", usuarioController.getUsuarioId);
router.post("/", usuarioController.criarUsuario);
router.put("/:id", usuarioController.atualizarUsuario);
router.delete("/:id", usuarioController.deletarUsuario);

export default router;