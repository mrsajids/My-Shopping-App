const Product = require('../moldel/productModel')

const getProducts = async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}

const getProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    try {
        if (product) {
            res.json(product)
        } else {
            res.status(404).json({ message: "product not found" })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getProducts, getProduct }
