import type { PrismaClient } from "@prisma/client/extension";
import { Usuario } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma.js";
import bcrypt from "bcrypt";


export class UsuarioRepository {
  usuarioRepository: any;
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
      include: {
      planos: true
    }
    });
  }

  async listarUsuarios(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }

 async criarUsuario(dadosUsuario: any) {
  const senhaHash = await bcrypt.hash(
    dadosUsuario.senha,
    10
  );

  return this.prisma.usuario.create({
    data: {
      nome: dadosUsuario.nome,
      email: dadosUsuario.email,
      senha: senhaHash,
      empresa: dadosUsuario.empresa,

      planos: {
        connect: {
          id: 1
        }
      }
    }
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