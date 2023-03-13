const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

const validator = require("validator");

//TODO:validate and sanitize data , validator library installed need to implement on model
const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxLength: 30,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    role: {
      type: String,
      require: true,
      default: "employee",
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);
