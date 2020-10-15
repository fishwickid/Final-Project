const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Jam = mongoose.model("Jam", jamSchema);

module.exports = Jam;
