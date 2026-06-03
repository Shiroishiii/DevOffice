import { prisma } from "../prisma/prisma";
import type { PrismaClient } from "@prisma/client/extension";

export class AuthRepository {
    constructor(private prisma: PrismaClient) {
        this.prisma = prisma
    }

    async getUsuarioEmail(email: string) {
        return prisma.usuario.findUnique({
            where: {
                email
            },
            include: {
                planos: true
            }
        });
    }

}

export const authRepository = new AuthRepository(prisma);