import { Request, Response } from 'express'
import { prisma } from "../utils/prisma";

export class JogadorController {

    async index(req: Request, res: Response) {

        const times = await prisma.jogador.findMany()

        return res.json({ times })
    }

    async store(req: Request, res: Response) {

        const { nome_jogador, idade, time_id } = req.body

        let id = time_id

        const TimeExist = await prisma.time.findUnique({ where: { id } })

        // console.log(TimeExist)

        if (!TimeExist) {
            return res.json({ error: "team does not exist" })
        }

        const result = await prisma.$queryRaw`SELECT COUNT (*) FROM sample."Jogador" WHERE time_id = ${time_id}`

        let [countArray] = result
        let { count } = countArray
        count = parseInt(count)

        if (count >= 5) {
            return res.json({ error: "você pode colocar somente 5 Jogadores por Time" })
        }


        const time = await prisma.jogador.create({
            data: {
                nome_jogador, idade, time_id
            }
        })

        return res.json({ time, message: "Jogador created successfully" })
    }

    async update(req: Request, res: Response) {

        const { id, nome_jogador, idade, time_id } = req.body

        // console.log(id, nome_jogador, idade, time_id)

        const updateJogador = await prisma.jogador.update({
            where: {
                id
            },
            data: {
                nome_jogador, idade, time_id
            },
        })
        return res.json({ message: "Jogador updated successfully" })
    }

    async delete(req: Request, res: Response) {

        const { id } = req.body

        const deleteJogador = await prisma.jogador.delete({
            where: {
                id
            },
        })

        if (!deleteJogador) {
            return res.json({ error: "erro a editar jogador" })
        }
        return res.json({ message: "Jogador deleted successfully" })
    }
}