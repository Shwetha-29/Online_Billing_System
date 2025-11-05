const mongoose = require('mongoose');

// Create User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate emails
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Export User model
module.exports = mongoose.model('User', userSchema);
