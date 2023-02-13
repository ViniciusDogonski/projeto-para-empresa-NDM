import { Router } from 'express';
import { UserController } from './controller/UserController';
import { AuthController } from './controller/AuthController';
import { authMiddleware } from '../middlewares/auth';
import { TimeController } from './controller/TimeController';
import { JogadorController } from './controller/JogadorController';

const userController = new UserController();
const authController = new AuthController();
const timeController = new TimeController();
const jogadorController = new JogadorController();

export const router = Router();

router.post("/auth", authController.athenticate);

router.get("/users", authMiddleware, userController.index);
router.post("/create", userController.store);

router.post("/createTime", timeController.store)
router.get("/listTimes", timeController.index)
router.get("/listTime/:time", timeController.listByid)
router.put("/editTimes", timeController.update)
router.delete("/deleteTimes", timeController.delete)


router.post("/createJogador", jogadorController.store)
router.get("/listJogador", jogadorController.index)
router.put("/editJogador", jogadorController.update)
router.delete("/deleteJogador", jogadorController.delete)