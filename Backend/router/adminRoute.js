const express = require('express')

const router = express.Router()

const {allUsers,addUser,deleteUser}=require('../controller/adminController')

router.get('/alluser', allUsers)

router.post('/adduser', addUser)

router.delete('/deleteuser/:id', deleteUser)

module.exports = router