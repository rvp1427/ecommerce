const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function createToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY);
}

exports.signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  // console.log(req.body);

  try {
    //  check email exists or not
    const result = await userModel.findOne({ email: email });
    if (result) {
      return res.json({ status: "failed", message: "user already exists" });
    }

    if (password.length < 8) {
      return res.json({ status: "failed", message: "password is too short" });
    }

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    // console.log(hash);

    const data = await userModel.create({ fullname, email, password: hash });

    return res.json({
      status: "success",
      data,
      messsage: "successfully signed up",
    });
  } catch (error) {
    return res.json({
      status: "failed",
      message: error,
    });
  }
};

exports.login = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  try {
    const data = await userModel.findOne({ email }).exec();
    if (!data) {
      return res.json({ status: "failed", message: "user doesn't exists" });
    }

    //  match the password

    const match = await bcrypt.compare(password, data.password);
    // console.log(match);
    if (!match) {
      return res.json({ status: "failed", message: "invalid user" });
    }

    //  create token
    const token = createToken(data._id);

    // create cookie
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
    });
    // console.log(test);

    return res.json({
      status: "success",
      data,
      token,
      message: "Successfully Logged In",
    });
  } catch (err) {
    return res.json({
      status: "failed",
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    // console.log(req.headers);
    let token = "";
    //  check if there is auth token or cookie
    if (req.headers.authorization) {
      const data = req.headers.authorization.split(" ")[1];
      token = data;
    }

    console.log(req.headers.cookie);
    // console.log(req.cookie);

    if (req.headers.cookie) {
      token = req.headers.cookie.split("=")[1];
    }

    if (!token.length) {
      return res.json({
        status: "failed",
        message: "try login again ...token not found",
      });
    }

    const { id, iat } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(id, new Date(iat).toDateString());
    const currUser = await userModel.findById(id);
    console.log(currUser);
    if (!currUser) {
      return res.json({ status: "failed", message: "try login again" });
    }
    req.user = currUser;

    next();
  } catch (err) {
    return res.json({
      status: "failed",
    });
  }
};
