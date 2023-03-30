const mongoose = require("mongoose");
var moment = require("moment");
const timeSheetSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, require: true },
  date: { type: String, require: true, default: moment().toLocaleString() },
  inTime: { type: String },
  outTime: { type: String },
  duration: { type: String },
  type: { type: String },
  status: { type: String },
});

module.exports = mongoose.model("TimeSheet", timeSheetSchema);
