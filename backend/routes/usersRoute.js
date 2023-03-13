const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("show all users");
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json({ id: id });
});

module.exports = router;
