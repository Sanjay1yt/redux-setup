const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: { type: String },
  email: { type: String },
  mobileNo: { type: Number },
});

module.exports = model("user", userSchema);
