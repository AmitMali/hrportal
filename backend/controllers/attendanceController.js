require("dotenv").config();
JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const TimeSheet = require("../models/attendanceModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const punchIn = async (req, res) => {
  try {
    const punchIn = await TimeSheet.create({
      ...req.body,
      status: "in",
    });
    return res.status(201).json({ status: "success", punchIn });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
const punchOut = async (req, res) => {
  try {
    const punchOut = await TimeSheet.findOneAndUpdate(
      { user: req.body.user, status: "in" },
      {
        ...req.body,
        status: "out",
      },
      {
        new: true,
      }
    );
    return res.status(201).json({ status: "success", punchOut });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getUserTimeSheet = async (req, res) => {
  try {
    console.log(req.params);
    const userAttendance = await TimeSheet.find({
      user: req.params.id,
      status: "in",
    }).exec();
    return res.status(200).json(userAttendance);
  } catch (error) {
    return res.status(404).json({ erros: error.message });
  }
};

module.exports = { punchIn, punchOut, getUserTimeSheet };
