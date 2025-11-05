const mongoose = require('mongoose');

// Create Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Prevent duplicate product names
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    default: 0, // Optional: Stock count
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // The user who added this product
  }
}, { timestamps: true });

// Export Product model
module.exports = mongoose.model('Product', productSchema);
