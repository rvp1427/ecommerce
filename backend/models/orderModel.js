const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    required: [true, "user is required order"],
  },
  cart: {
    type: [],
    required: [true, "products are required"],
  },
  status: {
    type: String,
    default: "Order Placed",
  },
});

orderSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "fullname address" });
  next();
});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
