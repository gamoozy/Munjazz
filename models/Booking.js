const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: String,
  service: String,
  date: Date,
  location: String,
  provider: String
});

module.exports = mongoose.model('Booking', BookingSchema);
