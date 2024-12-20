const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "name is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide valid email"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  address: {
    type: String,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
