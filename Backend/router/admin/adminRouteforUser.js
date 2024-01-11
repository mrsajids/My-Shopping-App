const express = require('express')
const router = express.Router()
const {allUsers,deleteUser}=require('../../controller/admin/adminControllerforUser')
const protect = require('../../middleWare/authMiddleWare')

router.get('/alluser',protect, allUsers)

// router.post('/adduser', addUser)

router.delete('/deleteuser/:id',protect, deleteUser)

module.exports = router