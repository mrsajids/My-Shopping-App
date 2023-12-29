const express = require('express')
const router = express.Router()
const protect =require('../middleWare/authMiddleWare')
const { addOrderItem } = require('../controller/orderController')

router.post('/',protect, addOrderItem)

module.exports = router