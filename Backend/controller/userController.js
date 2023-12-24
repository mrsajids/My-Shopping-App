const User = require('../moldel/userModel')
const generateToken = require('../utils/generateToken')

const authController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })

  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
}

module.exports = { authController }