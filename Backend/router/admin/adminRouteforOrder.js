const express = require('express')
const { getAllOrder, updateOrder } = require('../../controller/admin/adminControllerforOrder')
const protect = require('../../middleWare/authMiddleWare')
const router = express.Router()

router.get('/getorders',protect, getAllOrder)

router.put('/:id',protect, updateOrder)

module.exports = router