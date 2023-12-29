const Order = require('../moldel/orderModel')

const addOrderItem = async (req, res, next) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;
    if (orderItems && orderItems === 0) {
        return res.status(400).json({
            message: "Please add atleast one item"
        })
    }
    else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createOrder = await order.save();
        res.status(201).json(createOrder);
    }
}
module.exports = { addOrderItem } 