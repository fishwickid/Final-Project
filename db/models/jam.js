const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamSchema = new Schema({
  jamName: { type: String, required: true },
  jammer: { type: String, required: true },
  jamDetails: String,
  date: { type: Date, default: Date.now }
});

const Jam = mongoose.model("Jam", jamSchema);

module.exports = Jam;


// title: { type: String, required: true },
// author: { type: String, required: true },
// synopsis: String,
// date: { type: Date, default: Date.now }
