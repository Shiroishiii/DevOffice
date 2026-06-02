import bcrypt from "bcrypt";
import { gerarToken } from "../utils/token";
import {type AuthRepository, authRepository } from "../repositories/authRepository";

export class AuthService {
constructor(private authRepository: AuthRepository) {}

  async login(email: string, senha: string) {

    const usuario = await this.authRepository.getUsuarioEmail(
      email
    );

    if (!usuario) {
      throw new Error("Usuário não encontrado");
    }

    const senhaValida = await bcrypt.compare(
      senha,
      usuario.senha
    );

    if (!senhaValida) {
      throw new Error("Senha inválida");
    }

    const token = gerarToken({
      id: usuario.id
    });

    return {
      token
    };
  }
}

export const authService = new AuthService(authRepository);