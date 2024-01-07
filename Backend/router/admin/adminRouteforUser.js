const express = require('express')

const router = express.Router()

const {allUsers,deleteUser}=require('../../controller/admin/adminControllerforUser')

router.get('/alluser', allUsers)

// router.post('/adduser', addUser)

router.delete('/deleteuser/:id', deleteUser)

module.exports = router