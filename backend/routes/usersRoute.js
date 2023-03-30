const express = require("express");
const {
  punchIn,
  punchOut,
  getUserTimeSheet,
} = require("../controllers/attendanceController");
const router = express.Router();
const { loginUser } = require("../controllers/authController");
const { isLoggedIn } = require("../middlewares/auth");
const {
  allUsers,
  singleUser,
  createUser,
} = require("../controllers/userController");

//general routes
router.post("/auth/login", express.json(), loginUser);
router
  .use(isLoggedIn)
  .get("/", allUsers)
  .get("/timesheet", getUserTimeSheet)
  .get("/:id", singleUser);

//post route protected
router
  .use(isLoggedIn)
  .post("/new", express.json(), createUser)
  .post("/timesheet/punchin", express.json(), punchIn)
  .patch("/timesheet/punchout", express.json(), punchOut);

module.exports = router;
