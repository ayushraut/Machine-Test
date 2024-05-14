const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  designation: String,
  gender: String,
  course: String,
  file: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
