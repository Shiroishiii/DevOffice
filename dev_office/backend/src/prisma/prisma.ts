import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `postgresql://postgres:senai@localhost:5432/devoffice?schema=public`;

export const prisma = new PrismaClient({
  adapter,
  log: ["query"],
});