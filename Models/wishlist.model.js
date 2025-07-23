// models/Wishlist.js
const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true
  },
  added_at: {
    type: Date,
    default: Date.now
  }
});

const wishlistSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  items: [wishlistItemSchema],
  total_items: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Calculate total items before saving
wishlistSchema.pre('save', function(next) {
  this.total_items = this.items.length;
  next();
});

module.exports = mongoose.model('Wishlist', wishlistSchema);