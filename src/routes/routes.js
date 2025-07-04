import { Router } from "express";
import * as userController from "../controllers/userController.js"

const routes = Router()

routes.get("/user", userController.getAll)
routes.get('/user/:id', userController.getOne)
routes.post('/user', userController.post)
routes.delete('/user/:id', userController.delet)
routes.put('/user/:id', userController.up)

export default routes