const express = require("express");
const {
  createUser,
  getUser,
  updateUser,
} = require("../controllers/userController");
const { signup, login, protect } = require("../controllers/authCntroller");

const userRouter = express.Router();

userRouter.route("/signup").post(signup);
userRouter.route("/login").post(login);
// userRouter.route("/protect").get(protect);
// userRouter.route("/signup").post(createUser).get(getUser);
userRouter.route("/:userId").post(protect, updateUser);

module.exports = userRouter;
