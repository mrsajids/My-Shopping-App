const express = require('express')
const router = express.Router()
const { getProducts, getProduct } = require('../controller/productController')

router.get('/products/', getProducts)


router.get('/products/:id', getProduct)

// get all products
// router.get('/products/', async (req, res) => {
//     const product = await Product.find({})
//     res.json(product)
// })

//get single product
// router.get('/products/:id', async (req, res) => {
//     const product = await Product.findById(req.params.id)
//     try {
//         if (product) {
//         res.json(product)
//     } else {
//         res.status(404).json({ message: "product not found" })
//     }
//     } catch (error) {

//     }

// })

module.exports = router