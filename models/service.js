const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  audioUrl: { type: String, default: "" }
});

module.exports = mongoose.model('Service', ServiceSchema);
