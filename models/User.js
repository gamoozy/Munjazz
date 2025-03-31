const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  serviceDetails: {
    description: String,
    imageUrl: String,
    audioUrl: String,
  }
});

module.exports = mongoose.model('User', UserSchema);
