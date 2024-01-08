const express = require('express')
const { addProduct, editProduct, deleteProduct } = require('../../controller/admin/adminControllerforProduct')
const protect = require('../../middleWare/authMiddleWare')

const router = express.Router()

router.post('/addproduct', protect, addProduct)

router.put('/editproduct/:id', protect, editProduct)

router.delete('/deleteproduct/:id', protect, deleteProduct)

module.exports = router