const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jamSchema = new Schema({
  jamName: { type: String, required: true },
  email: String,
  jammer: { type: String, required: true },
  instrument: String,
  whatLearn: String,
  whatTeach: String,
  jamDetails: String,
  date: { type: Date, default: Date.now },
});

const Jam = mongoose.model("Jam", jamSchema);

module.exports = Jam;
