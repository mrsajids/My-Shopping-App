const express = require('express')
const router = express.Router()
const { authController, getUserProfile, registerUser } = require('../controller/userController')
const protect = require('../middleWare/authMiddleWare')

router.post('/login', authController)

router.get('/profile', protect, getUserProfile)

router.post('/register', registerUser)

module.exports = router