const express = require('express')
const router = express.Router()
const protect =require('../middleWare/authMiddleWare')
const { addOrderItem,getOrderById, updateOrderToPaid, getMyOrders } = require('../controller/orderController')

router.post('/',protect, addOrderItem)

//get order by id
router.route("/:id").get(protect, getOrderById)

//update order
router.route("/:id/pay").put(protect, updateOrderToPaid);
//get my order
//getUserOrder
router.route("/myorders").get(protect, getMyOrders);

module.exports = router