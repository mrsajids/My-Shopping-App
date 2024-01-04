const User = require('../moldel/userModel')
const generateToken = require('../utils/generateToken')

const registerUser = async (req, res, next) => {

  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    const error = new Error("User Already Exists!");
    next(error);
  }
  else {
    const user = await User.create({ name, email, password });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    }
    else {
      res.status(404);
      const err = new Error("User Not Found");
      next(err);
    }
  }
}

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

const updateUserProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(updateUser._id),
    })
  }
  else {
    res.status(404);
    const err = new Error("User Not Found");
    next(err);
  }
}

module.exports = { authController, getUserProfile, registerUser, updateUserProfile }
