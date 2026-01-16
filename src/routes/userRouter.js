import express from "express"
import Controller from "../controller/userControler.js"
import { EmailExist } from "../midleware/validations.js"

const router = express.Router()
router.post ("/user",EmailExist,Controller.signup)
router.post("/user/login",Controller.login)
router.get("/users",Controller.getAllUser)

export default router;