import type { PrismaClient } from "@prisma/client/extension";
import { Usuario } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma.js";


export class UsuarioRepository {
    constructor(private readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }
     async escolherPlano(usuarioId: number, planoId: number) {
    return await this.prisma.usuario.update({
      where: {
        id: usuarioId
      },
      data: {
        planos_id: planoId
      }
    });
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
  
  async getUsuarioEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: {
        email,
      },
    });
  }

   async listarUsuarios(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

    async criarUsuario(dadosUsuario: Partial<Usuario>) {
      console.log(dadosUsuario);
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