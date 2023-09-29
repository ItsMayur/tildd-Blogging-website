const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    verificationCode: { type: String },
    verifiedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
