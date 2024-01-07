const express = require('express')
const { addProduct, editProduct, deleteProduct } = require('../../controller/admin/adminControllerforProduct')

const router = express.Router()

router.post('/addproduct', addProduct)

router.put('/editproduct/:id',editProduct)

router.delete('/deleteproduct/:id',deleteProduct)

module.exports = router