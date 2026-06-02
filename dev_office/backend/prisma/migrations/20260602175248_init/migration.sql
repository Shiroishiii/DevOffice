-- CreateEnum
CREATE TYPE "StatusTarefa" AS ENUM ('PENDENTE', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "TipoPlano" AS ENUM ('Basico', 'Standard', 'Premium');

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "senha" TEXT NOT NULL,
    "planos_id" INTEGER,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empresa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "email" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarefa" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_vencimento" TIMESTAMP(3) NOT NULL,
    "status" "StatusTarefa" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "tarefa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planos" (
    "id" SERIAL NOT NULL,
    "tipoPlano" "TipoPlano" NOT NULL DEFAULT 'Basico',

    CONSTRAINT "planos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "empresa_email_key" ON "empresa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "empresa_telefone_key" ON "empresa"("telefone");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_planos_id_fkey" FOREIGN KEY ("planos_id") REFERENCES "planos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empresa" ADD CONSTRAINT "empresa_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
