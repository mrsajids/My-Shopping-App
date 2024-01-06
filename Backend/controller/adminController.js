const User = require('../moldel/userModel')
const generateToken = require('../utils/generateToken')


//fetch all the accounts
const allUsers = async (req, res, next) => {
    const user = await User.find({});
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        const err = new Error("User Not Found");
        next(err);
    }
}

//add new user
const addUser = async (req, res, next) => {
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

//delete user
const deleteUser = async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
        res.json({
            message: "User Deleted Successfully"
        })
    } else {
        res.status(404);
        const err = new Error("User Not Found");
        next(err);
    }
}

module.exports = { allUsers,addUser,deleteUser }