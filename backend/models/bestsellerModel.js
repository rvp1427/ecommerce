const mongoose = require("mongoose");

const bestsellerSchema = new mongoose.Schema({
  bestseller: {
    type: Boolean,
    default: false,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "product",
  },
});

bestsellerSchema.pre(/^find/, function (next) {
  this.populate({ path: "product" });
  next();
});

const bestsellerModel = mongoose.model("bestseller", bestsellerSchema);

module.exports = bestsellerModel;
