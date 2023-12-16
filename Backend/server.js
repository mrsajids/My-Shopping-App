const express = require('express')
const app=express()
const products= require('./data/products')

app.get("/",(req,res)=>{
    res.send('<h1>app working properly..</h1>')
})
app.get("/products",(req,res)=>{
    res.json(products)
})
app.get("/products/:id",(req,res)=>{
    // const product=products.find((p)=>res.send(p._id))
    // res.json(req.params.id)
})

app.listen(4000,()=>{
    console.log('server running');
})
