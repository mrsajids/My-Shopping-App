const express = require('express')
const cors = require('cors')
const products = require('./data/products')
const dotenv = require('dotenv')
const dbconnection = require('./config/config')
const productRoute = require('./router/productRoute')
const userRoute = require('./router/userRoute')
const adminRoute = require('./router/admin/adminRouteforUser')
const orderRoute = require('./router/orderRoute')
const errorHandler = require('./middleWare/errorMiddleWare')
const adminRouteforProduct = require('./router/admin/adminRouteforProduct')
const adminRouteforOrder = require('./router/admin/adminRouteforOrder')
const app = express()

//cors error
app.use(cors())

// configuration 
dotenv.config()

//mongoose connection
dbconnection()

//middleware for json
app.use(express.json())

//middleware for error
app.use('/api', productRoute)

app.use('/api/user/', userRoute)

app.use('/api/orders', orderRoute)

app.use('/api/admin/', adminRoute)

app.use('/api/admin/product', adminRouteforProduct)

app.use('/api/admin/order',adminRouteforOrder)

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(errorHandler)
// app.get("/", (req, res) => {
//     res.send('<h1>Welcome to the server..</h1>')
// })

// app.get("/products", (req, res) => {
//     res.json(products)
// })

// app.get("/products/:id", (req, res) => {
//     const product = products.find((p) => p._id === req.params.id)
//     res.json(product)
// })

const PORT = 4000
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running in ${process.env.NODE_MODE} mode at ${process.env.PORT}`);
})
