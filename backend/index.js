require("dotenv").config();
const express = require("express");
const port = process.env.SERVER_PORT;
const app = express();
const userRoute = require("./routes/usersRoute");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/v1/users", userRoute);
app.listen(port, () => {
  console.log(`connections successs http://localhost:${port}`);
});
