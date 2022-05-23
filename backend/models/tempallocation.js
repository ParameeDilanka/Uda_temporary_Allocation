const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  refno: { type: String, required: true },
  fileno: { type: String, required: true },
  projcode: { type: String, required: true },
  cuscode: { type: String, required: true },
  name: { type: String, required: true },
  priverteaddr: { type: String, required: true },
  premisesaddr: { type: String, required: true },
  extent: { type: String, required: true },
  planno: { type: String, required: true },
  lotno: { type: String, required: true },
  dateofallocation: { type: String, required: true },
  handedoverdate: { type: String, required: true },
  periodofallocation: { type: String, required: true },
  expdate: { type: String, required: true },
  rent: { type: String, required: true },
  taxes: { type: String, required: true },
}, {
  timestamps: true,
}
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;