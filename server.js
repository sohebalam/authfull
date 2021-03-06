import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db.js"
import morgan from "morgan"
import users from "./routes/userRoute.js"
import bcrypt from "bcryptjs"

dotenv.config({ path: "./config.env" })

connectDB()

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)

// middleware
// app.use(express.static("public"))

// view engine
// app.set("view engine", "ejs")

app.use("/users", users)

// routes
// app.get("/", (req, res) => res.render("home"))
// app.get("/smoothies", (req, res) => res.render("smoothies"))

const PORT = process.env.PORT || 3500
app.listen(PORT, () =>
  console.log(
    `Server Running on Port: http://localhost:${PORT} ${process.env.NODE_ENV}`
  )
)
