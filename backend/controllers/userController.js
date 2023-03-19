require("dotenv").config();
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const allUsers = async (req, res) => {
  try {
    const allUsers = await User.find().lean();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const singleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).lean();
    res.status(200).json({ user });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    console.log(req);

    const newUser = await User.create({
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    });
    console.log(newUser);
    return res.status(201).json({ status: "success", newUser });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = { allUsers, singleUser, createUser };
