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

const getOrderById = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    const err = new Error("Order Not Found");
    next(err);
  }
}

const updateOrderToPaid = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    (order.isPaid = true),
      (order.paidAt = Date.now()),
      (order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      });
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404);
    const err = new Error("Order Not Found");
    next(err);
  }
}

const getMyOrders = async (req, res, next) => {
  try {

    const orders = await Order.find({ user: req.user._id });
    res.json(orders);
  } catch (error) {
    res.send('working')
  }

};

// const deleteOrder = async (req, res, next) => {
//   // return  => {
//   const user = await User.deleteMany({
//     "name": "sajeeds"
//   },
//     {

//       "name": "amans"
//     });
//   if (user) {
//     // await order.deleteMany({});
//     res.json(user);
//   } else {
//     res.status(404);
//     const err = new Error("user Not Found");
//     next(err);
//     // }
//   }
// }

module.exports = { addOrderItem, getOrderById, updateOrderToPaid, getMyOrders } 