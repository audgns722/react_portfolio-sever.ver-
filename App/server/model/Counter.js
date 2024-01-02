const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema(
  {
    name: String,
    commentNum: Number,
  },
  { collection: "counter" }
); // collection : 이름

const Counter = mongoose.model("Counter", counterSchema);

module.exports = { Counter };
