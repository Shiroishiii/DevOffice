import { Request, Response } from "express";
import { authService, AuthService } from "../services/AuthServices";

export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    login = async (
        req: Request,
        res: Response
    ) => {
        try {

            const { email, senha } = req.body;

            const resultado = await this.authService.login(
                email,
                senha
            );

            return res.status(200).json(resultado);

        } catch (error) {
            console.log(error);

            return res.status(401).json({
                error
            });

        }
    };
}

export const authController = new AuthController(
    authService
);