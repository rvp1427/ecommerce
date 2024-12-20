const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name should be required"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
    },
    description: {
      type: String,
    },
    sizes: {
      type: [String],
      required: [true, "size is required"],
      enum: {
        values: ["S", "M", "L", "XL", "XXL"],
        required: [true, "size must be s,m,l,xl,xxl"],
      },
    },
    category: {
      type: String,
      enum: {
        values: ["Kids", "Men", "Women"],
      },
    },
    subCategory: {
      type: String,
      enum: { values: ["Topwear", "Bottomwear", "Winterwear"] },
    },
    image: {
      type: [String],
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
