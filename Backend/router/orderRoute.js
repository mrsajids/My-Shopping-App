const express = require('express')
const router = express.Router()
const protect =require('../middleWare/authMiddleWare')
const { addOrderItem,getOrderById } = require('../controller/orderController')

router.post('/',protect, addOrderItem)

//get order by id
router.route("/:id").get(protect, getOrderById)

module.exports = router