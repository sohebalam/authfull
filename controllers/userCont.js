import User from "../models/userModel.js"

const signup = async (req, res, next) => {
  const { email, password } = req.body

  // Check if there is a user with the same email
  const foundUser = await User.findOne({ email })
  if (foundUser) {
    return res.status(403).json({ error: "Email is already in use" })
  }

  // Create a new user
  const newUser = new User({ email, password })
  await newUser.save()

  // Respond with token
  res.json({ user: "created" })
}

// const signup_post = async (req, res, next) => {
//   const { email, password } = req.body

//   try {
//     const user = await User.create({ email, password })
//     res.status(201).json(user)
//   } catch (err) {
//     console.log(err)
//     res.status(400).send("error, user not created")
//   }
// }

const signin = async (req, res, next) => {
  const { email, password } = req.body
}
const secret = async (req, res, next) => {
  console.log("UserController.secret() called!")
}

export { signup, signin, secret }
