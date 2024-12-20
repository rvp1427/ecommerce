const mongoose = require("mongoose");
const productModel = require("../models/ProductModel");
const fs = require("fs");
const { json } = require("express");
mongoose
  .connect(
    "mongodb+srv://vrishabhrajput004:n3AK29GkEmYFyzzm@cluster0.afirv.mongodb.net/ecommerce"
  )
  .then(() => console.log("database connected"));

// console.log(process.argv[2]);

const data = JSON.parse(fs.readFileSync(`${__dirname}/test.json`, "utf8"));
// fs.writeFileSync(`${__dirname}/test.json`, JSON.parse(JSON.stringify(data)));
console.log(typeof data);

async function importData() {
  const prod = await productModel.create(data);
}

if (process.argv[2] === "--import") {
  importData();
}
