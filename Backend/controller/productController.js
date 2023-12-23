const Product = require('../moldel/userModel')

const getProducts = async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}

module.exports = { getProducts }
