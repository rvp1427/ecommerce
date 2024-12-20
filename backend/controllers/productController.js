const bestsellerModel = require("../models/bestsellerModel");
const productModel = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const prod = await productModel.find();
    // console.log(req.headers);
    return res.json({ status: "success", prod });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      sizes,
      bestseller,
      category,
      subCategory,
      description,
    } = req.body;
    const image = [];

    const data = Object.entries(req.files);
    if (data.length > 0) {
      data.forEach((item) => image.push(item[1][0].filename));
    }

    const prod = await productModel.create({
      name,
      description,
      price,
      sizes: sizes.split(","),
      category,
      subCategory,
      image,
    });
    console.log(prod);
    if (prod._id) {
      const bestsell = await bestsellerModel.create({
        bestseller,
        product: prod._id,
      });
      console.log(bestsell);
    }
    return res.json({ status: "success", prod });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.allCategories = async (req, res) => {
  // const cat = await productModel.;
};

exports.latestCollection = async (req, res) => {
  try {
    const latest = await productModel.find().sort({ createdAt: 1 }).limit(10);
    return res.json({ status: "success", latest });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const prod = await productModel.deleteOne(
      { _id },
      { runValidators: true, new: true }
    );
    return res.json({ status: "success", prod });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const param = req.params.id;
    const prod = await productModel.findOne({ _id: param });
    return res.json({ status: "success", prod });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.getBestSellers = async (req, res) => {
  try {
    console.log("bestseller");
    const best = await bestsellerModel.find({ bestseller: true });
    return res.json({ status: "success", best });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};
