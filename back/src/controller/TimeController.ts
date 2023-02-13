import { Request, Response } from 'express'
import { prisma } from "../utils/prisma";

export class TimeController {

    async index(req: Request, res: Response) {

        const times = await prisma.Time.findMany()

        return res.json({ times })
    }

    async listByid(req: Request, res: Response) {

        let id = parseInt(req.params.time);

        const time = await prisma.time.findUnique({ where: { id } })


        if (!time) {
            return res.json({ error: "erro o time não existe" })
        }

        return res.json({ time })
    }

    async store(req: Request, res: Response) {

        const { nome_time } = req.body

        // const userExist = await prisma.user.findUnique({ where: { email } })

        // if (userExist) {
        //     return res.json({ error: "User existen" })
        // }

        // const hashPassowd = await hash(password, 8)

        // const time = await prisma..create({
        //     data: {
        //         nome_time
        //     }
        // })

        const time = await prisma.Time.create({
            data: {
                nome_time
            }
        })

        return res.json({ time, message: "time created successfully" })
    }

    async update(req: Request, res: Response) {

        const { time_id, nome_time } = req.body

        const updateTime = await prisma.time.update({
            where: {
                id: parseInt(time_id)
            },
            data: {
                nome_time
            },
        })
        return res.json({ message: "time updated successfully" })

    }

    async delete(req: Request, res: Response) {

        const { id } = req.body

        const deleteTimes = await prisma.time.delete({
            where: {
                id
            },
        })
        if (!deleteTimes) {
            return res.json({ error: "erro a editar jogador" })
        }
        return res.json({ message: "Time deleted successfully" })
    }

}