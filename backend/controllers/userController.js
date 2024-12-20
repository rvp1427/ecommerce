const userModel = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await userModel.create(data);
    // console.log(user);
    return res.json({ user });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const data = await userModel.find({});
    console.log(data);
    return res.json({ data });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { street, city, state, zipcode, country } = req.body;
    // console.log(data, userId);
    const address =
      street + " ," + city + " " + state + " " + zipcode + " ," + country;
    const user = await userModel.updateOne(
      { _id: userId },
      { address },
      { runValidators: true, new: true }
    );
    return res.json({ user });
  } catch (err) {
    return res.json({ status: "failed" });
  }
};
