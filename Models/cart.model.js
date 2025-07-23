// models/Cart.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const cartSchema = new mongoose.Schema({
  username: {
  type: String,
  required: true,
  unique: true
}
,
  items: [cartItemSchema],
  total_amount: {
    type: Number,
    default: 0
  },
  total_items: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Calculate totals before saving
cartSchema.pre('save', function(next) {
  this.total_items = this.items.reduce((total, item) => total + item.quantity, 0);
  this.total_amount = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  next();
});

module.exports = mongoose.model('Cart', cartSchema);