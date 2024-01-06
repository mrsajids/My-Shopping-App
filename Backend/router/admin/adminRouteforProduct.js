const express = require('express')
const { addProduct, editProduct } = require('../../controller/admin/adminControllerforProduct')

const router = express.Router()

router.post('/addproduct', addProduct)

router.put('/editproduct/:id',editProduct)

module.exports = router