const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    collect: { type: String, required: true },
    author: { type: String, required: true },
    number: { type: Number, required: true },
    cover: {type: String, required: true},
    pages: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comics", schema);
