const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String // For now, store plain (we'll hash it later)
});

module.exports = mongoose.model('User', UserSchema);
