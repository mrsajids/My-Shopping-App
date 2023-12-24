const User = require('../moldel/userModel')
const generateToken = require('../utils/generateToken')

const authController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })

  } else {
    res.status(500);
    const err = new Error("Invalid Email or Password");
    next(err);
  }
}

const getUserProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    const err = new Error("User Not Found");
    next(err);
  }
}

module.exports = { authController, getUserProfile }