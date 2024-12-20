const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = req.body;
    console.log(req.user);
    const order = await orderModel.create({ user: userId, cart: cart });
    return res.json({ order });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    // console.log(orderId);
    const order = await orderModel.find({ _id: orderId });
    return res.json({ order });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    // console.log(orderId);
    const order = await orderModel.find({});
    return res.json({ order });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    console.log(orderId, status);
    const order = await orderModel.updateOne(
      { _id: orderId },
      { status: status }
    );
    // console.log(order);
    return res.json({ orderId });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(req.headers.cookie);
    const orders = await orderModel.find({ user: userId });
    return res.json({ orders });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};
