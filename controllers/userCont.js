const signup = async (req, res) => {
  console.log("UserController.signUp() called!")
}
const signin = async (req, res) => {
  console.log("UserController.signIn() called!")
}
const secret = async (req, res) => {
  console.log("UserController.secret() called!")
}

export { signup, signin, secret }
