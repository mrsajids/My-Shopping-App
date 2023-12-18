const express = require('express')
const router = express.Router()
const Product=require('../moldel/productModel')

//get all products
router.get('/products',async(req,res)=>{
    const product=await Product.find({})
    res.json(product)
})

//get single product
router.get('/products/:id',async(req,res)=>{
    const product= await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({message:"product not found"})
    }
})

module.exports=router