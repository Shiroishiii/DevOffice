/*
  Warnings:

  - You are about to drop the column `data_vencimento` on the `tarefa` table. All the data in the column will be lost.
  - You are about to drop the `empresa` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `codigoBase` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataVencimento` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcaoEsperada` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Made the column `nome` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `planos_id` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "EmpresasExistentes" AS ENUM ('HardCode', 'gamingColdest', 'GreeCode');

-- DropForeignKey
ALTER TABLE "empresa" DROP CONSTRAINT "empresa_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_planos_id_fkey";

-- AlterTable
ALTER TABLE "tarefa" DROP COLUMN "data_vencimento",
ADD COLUMN     "codigoBase" TEXT NOT NULL,
ADD COLUMN     "dataVencimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "funcaoEsperada" TEXT NOT NULL,
ADD COLUMN     "ponto" INTEGER NOT NULL DEFAULT 50;

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "empresa" "EmpresasExistentes" NOT NULL,
ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "planos_id" SET NOT NULL;

-- DropTable
DROP TABLE "empresa";

-- CreateTable
CREATE TABLE "teste" (
    "id" SERIAL NOT NULL,
    "entrada" JSONB NOT NULL,
    "esperado" JSONB NOT NULL,
    "tarefaId" INTEGER NOT NULL,

    CONSTRAINT "teste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario_tarefa" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "tarefaId" INTEGER NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "dataConclusao" TIMESTAMP(3),

    CONSTRAINT "usuario_tarefa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_tarefa_usuarioId_tarefaId_key" ON "usuario_tarefa"("usuarioId", "tarefaId");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_planos_id_fkey" FOREIGN KEY ("planos_id") REFERENCES "planos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teste" ADD CONSTRAINT "teste_tarefaId_fkey" FOREIGN KEY ("tarefaId") REFERENCES "tarefa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_tarefa" ADD CONSTRAINT "usuario_tarefa_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuario_tarefa" ADD CONSTRAINT "usuario_tarefa_tarefaId_fkey" FOREIGN KEY ("tarefaId") REFERENCES "tarefa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
