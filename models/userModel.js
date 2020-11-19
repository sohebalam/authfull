import mongoose from "mongoose"
// import { isEmail } from "validator"
import pkg from "validator"
const { isEmail } = pkg

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter and email"],
    unique: true,
    validate: [isEmail, "please enter a valid email "],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "minlegnth is 6"],
  },
})

const User = mongoose.model("User", userSchema)

export default User
