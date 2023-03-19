const express = require("express");
const router = express.Router();
const {
  allUsers,
  singleUser,
  createUser,
} = require("../controllers/userController");

router.get("/", allUsers).get("/:id", singleUser);

router.post("/new", express.json(), createUser);

module.exports = router;
