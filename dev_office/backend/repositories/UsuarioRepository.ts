import type { PrismaClient } from "@prisma/client/extension";


export class UsuarioRepository {
    constructor(private readonly prisma: PrismaClient) {
    this.prisma = prisma;
  }



}