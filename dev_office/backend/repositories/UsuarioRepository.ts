import type { PrismaClient } from "@prisma/client/extension";
import { Usuario } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma.js";


export class UsuarioRepository {
    constructor(private readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }

    async getUsuarioId(id: number) {
    return this.prisma.usuario.findUnique({
      where: {
        id
      },
      select: {
        id: true
      }
    });
  }

   async listarUsuarios(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

    async criarUsuario(dadosUsuario: Partial<Usuario>) {
    return await this.prisma.usuario.create({
      data: dadosUsuario as Usuario
    });
  }

    async atualizarUsuario(id: number, data: Partial<Usuario>) {
    return this.prisma.usuario.update({
      where: {
        id
      },
      data,
      select: {
        id: true,
        nome: true,
        email: true      
      }
    });
  }

  async deletarUsuario(id: number) {
  return this.prisma.usuario.delete({
    where: {
      id
    },
    select: {
      id: true,
      nome: true,
      email: true
    }
  });
}


}
export const usuarioRepository = new UsuarioRepository(prisma);