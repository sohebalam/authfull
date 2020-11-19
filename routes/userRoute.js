import express from "express"
import { signup, signin, secret } from "../controllers/userCont.js"

const router = express.Router()

router.route("/signup").post(signup)
// router.route("/signup").post(signup_post)

router.route("/signin").post(signin)

router.route("/secret").get

export default router
