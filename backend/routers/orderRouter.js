const express = require("express");
const {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  getOrdersByUserId,
} = require("../controllers/orderController");
const { protect } = require("../controllers/authCntroller");

const orderRouter = express.Router();

orderRouter.route("/").get(getAllOrders);
orderRouter.route("/updateStatus/:orderId").patch(updateOrderStatus);
orderRouter
  .route("/:userId")
  .get(protect, getOrdersByUserId)
  .post(protect, createOrder);
orderRouter.route("/:orderId").get(getOrderById);

module.exports = orderRouter;
