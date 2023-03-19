require("dotenv").config();
const cors = require("cors");
const express = require("express");
const port = process.env.SERVER_PORT;
const app = express();
app.use(cors());
const userRoute = require("./routes/usersRoute");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "hrmgmt",
});
app.use("/v1/users", userRoute);
app.listen(port, () => {
  console.log(`connections successs http://localhost:${port}`);
});
