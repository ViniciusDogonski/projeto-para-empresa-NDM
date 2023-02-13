-- CreateTable
CREATE TABLE "Time" (
    "id" SERIAL NOT NULL,
    "nome_time" VARCHAR(45) NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jogador" (
    "id" SERIAL NOT NULL,
    "nome_jogador" VARCHAR(45) NOT NULL,
    "idade" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,

    CONSTRAINT "Jogador_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Jogador" ADD CONSTRAINT "Jogador_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
