/*
  Warnings:

  - You are about to drop the column `data_vencimento` on the `tarefa` table. All the data in the column will be lost.
  - You are about to drop the `empresa` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `codigoBase` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataVencimento` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funcaoEsperada` to the `tarefa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EmpresasExistentes" AS ENUM ('HardCode', 'gamingColdest', 'GreeCode');

-- DropForeignKey
ALTER TABLE "empresa" DROP CONSTRAINT "empresa_usuario_id_fkey";

-- AlterTable
ALTER TABLE "tarefa" DROP COLUMN "data_vencimento",
ADD COLUMN     "codigoBase" TEXT NOT NULL,
ADD COLUMN     "dataVencimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "funcaoEsperada" TEXT NOT NULL,
ADD COLUMN     "usuario_id" INTEGER,
ADD COLUMN     "xp" INTEGER NOT NULL DEFAULT 50;

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "empresa" "EmpresasExistentes" NOT NULL;

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

-- AddForeignKey
ALTER TABLE "tarefa" ADD CONSTRAINT "tarefa_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teste" ADD CONSTRAINT "teste_tarefaId_fkey" FOREIGN KEY ("tarefaId") REFERENCES "tarefa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
