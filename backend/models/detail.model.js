const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
  reciptno: { type: String, required: true },
  interrestrate: { type: String, required: true },
  approved: { type: String, required: true },
  period: { type: String, required: true },
  amount: { type: String, required: true },
  officeincharge: { type: String, required: true },
  allocatedvalue: { type: String, required: true },
  first: { type: String, required: true },
  second: { type: String, required: true },
  third: { type: String, required: true },
  fourth: { type: String, required: true },
  fifth: { type: String, required: true },
  sixth: { type: String, required: true },
  seventh: { type: String, required: true },
  eightth: { type: String, required: true },
  nineth: { type: String, required: true },
  tenth: { type: String, required: true },
}, {
  timestamps: true,
}
);

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;