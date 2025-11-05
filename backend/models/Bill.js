const mongoose = require('mongoose');

// Create Bill Schema
const billSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Link to the user who created the bill
    required: true,
  }
}, { timestamps: true });

// Export Bill model
module.exports = mongoose.model('Bill', billSchema);
