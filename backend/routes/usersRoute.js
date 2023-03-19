const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/authController");
const {
  allUsers,
  singleUser,
  createUser,
} = require("../controllers/userController");

router.get("/", allUsers).get("/:id", singleUser);

router
  .post("/new", express.json(), createUser)
  .post("/auth/login", express.json(), loginUser);

module.exports = router;
