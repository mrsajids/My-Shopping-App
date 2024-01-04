const jwt = require('jsonwebtoken')
const User = require('../moldel/userModel')

let token
const protect = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  )
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_KEY);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      const err = new Error("Not Authorized , Token failed");
      next(err)
    }
  if (!token) {
    res.status(401);
    const err = new Error("Not Authorized, not token");
    next(err)
  }
}

module.exports = protect