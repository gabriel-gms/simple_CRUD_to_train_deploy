import { Router } from "express";
import * as userController from "../controllers/userController.js"

const routes = Router()

routes.get("/user", userController.getAll)

export default routes