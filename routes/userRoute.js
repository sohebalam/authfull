import express from "express"
import { signup, signin, secret } from "../controllers/userCont.js"

const router = express.Router()

router.route("/signup").get(signup)

router.route("/signin").post(signin)

router.route("/secret").post(secret)

export default router
