const express = require('express')
const router = express.Router()
const { authController, getUserProfile, registerUser, updateUserProfile } = require('../controller/userController')
const protect = require('../middleWare/authMiddleWare')

router.post('/register', registerUser)

router.post('/login', authController)

router.get('/profile', protect, getUserProfile)

router.put(
    '/profile',
    protect,
    updateUserProfile
)


module.exports = router