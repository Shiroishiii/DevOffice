import { Request, Response } from "express";
import {usuarioService, type UsuarioService } from "../services/UsuarioServices";

export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }


    listarUsuarios = async (req: Request, res: Response) => {
        try {
            const usuarios = await usuarioService.listarUsuarios();

            return res.status(200).json(usuarios);
        } catch (error) {
            console.log(error);

            return res.status(400).json({
                error: String(error)
            });
        }
    }

    getUsuarioId = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            const usuario = await usuarioService.getUsuarioId(id);

            return res.status(200).json(usuario);
        } catch (error) {
            console.log(error);

            return res.status(400).json({
                error: String(error)
            });
        }
    }

    criarUsuario = async (req: Request, res: Response) => {
        try {
            const dadosUsuario = req.body;

            const usuario = await usuarioService.criarUsuario(dadosUsuario);

            return res.status(201).json(usuario);
        } catch (error) {
            console.log(error);

            return res.status(400).json({
                error: String(error)
            });
        }
    }

    atualizarUsuario = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            const usuario = await usuarioService.atualizarUsuario(
                id,
                req.body
            );

            return res.status(200).json(usuario);
        } catch (error) {
            console.log(error);

            return res.status(400).json({
                error: String(error)
            });
        }
    }

    deletarUsuario = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);

            const usuario = await usuarioService.deletarUsuario(id);

            return res.status(200).json(usuario);
        } catch (error) {
            console.log(error);

            return res.status(400).json({
                error: String(error)
            });
        }
    }
}

export const usuarioController = new UsuarioController(usuarioService);