import { Request, Response } from "express";
import { type UsuarioService, usuarioService } from "../services/UsuarioServices";

export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    listarUsuarios = async (req: Request, res: Response) => {
        try {
            const usuarios = await this.usuarioService.listarUsuarios();
            return res.status(200).json(usuarios);
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            });
        }
    }

    getUsuarioId = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            const usuario = await this.usuarioService.getUsuarioId(id);

            return res.status(200).json(usuario);
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            });
        }
    }
    getUsuarioEmail = async (req: Request, res: Response) =>{
        try{
            const email = String((req.params.id))
            const usuario = await this.usuarioService.getUsuarioEmail(email)
            return res.status(200).json(usuario)
        }   catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            })
        }
    }

    criarUsuario = async (req: Request, res: Response) => {
        try {
            const dadosUsuario = req.body;

            const usuario = await this.usuarioService.criarUsuario(dadosUsuario);

            return res.status(201).json(usuario);
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            });
        }
    }

    atualizarUsuario = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            const usuario = await this.usuarioService.atualizarUsuario(
                id,
                req.body
            );

            return res.status(200).json(usuario);
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            });
        }
    }

    deletarUsuario = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            const usuario = await this.usuarioService.deletarUsuario(id);

            return res.status(200).json(usuario);
        } catch (error) {
            console.log(error);
            return res.status(404).json({
                error
            });
        }
    }
}

export const usuarioController = new UsuarioController(usuarioService);