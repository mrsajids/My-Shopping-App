const express = require('express')
const router = express.Router()
const {authController} =require('../controller/userController')

router.post('/login',authController)

module.exports = router