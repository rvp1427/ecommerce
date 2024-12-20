const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const orderRouter = require("./routers/orderRouter");
// const cookieParser = require("cookie-parser");
require("dotenv/config");

//  middlewaes
// start express app
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cookieParser());
// app.use(expres)
// routes
app.use("/api/product", productRouter);
app.use("/api/user/", userRouter);
app.use("/api/order/", orderRouter);

mongoose
  .connect(process.env.DATABASE_CON_STR)
  .then(() => console.log("database connected"));

const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log("server listning on 4000");
});
