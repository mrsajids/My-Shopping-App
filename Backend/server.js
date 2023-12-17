const express = require('express')
const cors = require('cors')
const products = require('./data/products')
const dotenv=require('dotenv')
const app = express()

//cors error
app.use(cors())

// configuration 
dotenv.config()

app.get("/", (req, res) => {
    res.send('<h1>app working properly..</h1>')
})
app.get("/products", (req, res) => {
    res.json(products)
})
app.get("/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT=4000
app.listen(process.env.PORT||PORT, () => {
    console.log(`Server running in ${process.env.NODE_MODE} mode at ${process.env.PORT}`);
})
