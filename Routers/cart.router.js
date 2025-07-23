// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../Controllers/cart.controller');

// GET /api/cart/:userId - Get user's cart
router.get('/:username', getCart);

// POST /api/cart - Add item to cart
router.post('/add', addToCart);

// PUT /api/cart/:userId/:productId - Update cart item quantity
router.put('/:username/:productId', updateCartItem);

// DELETE /api/cart/:userId/:productId - Remove item from cart
router.delete('/:username/:productId', removeFromCart);

// DELETE /api/cart/:userId - Clear cart
router.delete('/:username', clearCart);

module.exports = router;