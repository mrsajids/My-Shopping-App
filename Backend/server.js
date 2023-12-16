const express = require('express')
const cors = require('cors')
const products = require('./data/products')
const app = express()

//cors error
app.use(cors())

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

app.listen(4000, () => {
    console.log('Server running on', 4000);
})
