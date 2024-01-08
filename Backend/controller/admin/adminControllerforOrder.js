const Order = require('../../moldel/orderModel')

//get all the order
const getAllOrder = async (req, res, next) => {
    const order = await Order.find({});
    if (order) {
        res.json(order);
    } else {
        res.status(404);
        const err = new Error("Order Not Found");
        next(err);
    }
}

//update order
const updateOrder=async(req,res,next)=>{
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (order) {
        res.json(order);
    } else {
        res.status(404);
        const err = new Error("Order Not Found");
        next(err);
    }
}
module.exports = { getAllOrder,updateOrder }