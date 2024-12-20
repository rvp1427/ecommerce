const express = require("express");
const multer = require("multer");
const {
  getAllProducts,
  createProduct,
  latestCollection,
  deleteProduct,
  getProductById,
  getBestSellers,
} = require("../controllers/productController");
const { protect } = require("../controllers/authCntroller");

const diskStore = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(req.body);
    cb(null, `public/img`);
  },
  filename: (req, file, cb) => {
    // console.log(file);

    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: diskStore });

const productRouter = express.Router();
productRouter
  .route("/")
  .get(getAllProducts)
  .post(
    upload.fields([
      { name: "img1", maxCount: 1 },
      { name: "img2", maxCount: 1 },
      { name: "img3", maxCount: 1 },
      { name: "img4", maxCount: 1 },
    ]),
    createProduct
  );

productRouter.get("/bestseller", getBestSellers);
productRouter.route("/latest").get(latestCollection);
productRouter.route("/:id").delete(deleteProduct).get(getProductById);

module.exports = productRouter;
