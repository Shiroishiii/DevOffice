import type { PrismaClient } from "@prisma/client/extension";
import { Usuario } from "../prisma/generated/prisma/client";

export class UsuarioRepository {
    constructor(private readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }
    async criarUsuario(dadosUsuario: Partial<Usuario>) {
    return await this.prisma.usuario.create({
      data: dadosUsuario as Usuario
    });
  }



}