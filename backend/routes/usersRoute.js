const express = require("express");
const {
  punchIn,
  punchOut,
  getUserTimeSheet,
} = require("../controllers/attendanceController");
const router = express.Router();
const { loginUser } = require("../controllers/authController");
const {
  allUsers,
  singleUser,
  createUser,
} = require("../controllers/userController");

router
  .get("/", allUsers)
  .get("/timesheet/:id", getUserTimeSheet)
  .get("/:id", singleUser);

//post route protected
router
  .post("/new", express.json(), createUser)
  .post("/auth/login", express.json(), loginUser)
  .post("/timesheet/punchin", express.json(), punchIn)
  .patch("/timesheet/punchout", express.json(), punchOut);

module.exports = router;
