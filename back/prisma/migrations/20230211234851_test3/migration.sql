-- DropForeignKey
ALTER TABLE "Jogador" DROP CONSTRAINT "Jogador_time_id_fkey";

-- AlterTable
ALTER TABLE "Jogador" ALTER COLUMN "time_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Jogador" ADD CONSTRAINT "Jogador_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "Time"("id") ON DELETE SET NULL ON UPDATE CASCADE;
