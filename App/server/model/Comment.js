const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    author: String,
    content: String,
    password: String,
    commentNum: Number,
  },
  { collection: "comments", timestamps: true }
); // collection : 이름

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
