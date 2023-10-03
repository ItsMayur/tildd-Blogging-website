const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: { type: String },
  discription: { type: String },
  keywords: { type: String },
  link: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
