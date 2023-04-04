const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const loginUser = async (req, resp) => {
  const userEmail = req.body.userMail;
  const userPassword = req.body.userPassword;
  let userExist = await User.findOne({ email: userEmail });
  if (!userExist) {
    return resp
      .status(400)
      .json({ status: "not found", message: "user not found" });
  }

  bcrypt.compare(
    userPassword,
    userExist.password,
    function (err, validPassword) {
      if (!validPassword) {
        return resp.status(400).json({
          status: "authentication failed",
          message: "invalid creedentials",
        });
      }
      const token = jwt.sign(
        { id: userExist._id, role: userExist.role },
        JWT_SECRET_KEY
      );
      return resp.status(200).json({
        status: "success",
        message: "login successfull",
        token,
        role: userExist.role,
      });
    }
  );
};

module.exports = { loginUser };
