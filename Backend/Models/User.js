const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  email: { type: String, unique: true },
  verificationCode: { type: String },
  verifiedAt: { type: Date },
});

module.exports = mongoose.model("User", UserSchema);
