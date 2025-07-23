// routes/wishlistRoutes.js
const express = require('express');
const router = express.Router();
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  moveToCart
} = require('../Controllers/wishlist.controller');

// GET /api/wishlist/:userId - Get user's wishlist
router.get('/:username', getWishlist);

// POST /api/wishlist - Add item to wishlist
router.post('/', addToWishlist);

// DELETE /api/wishlist/:userId/:productId - Remove item from wishlist
router.delete('/:username/:productId', removeFromWishlist);

// DELETE /api/wishlist/:userId - Clear wishlist
router.delete('/:username', clearWishlist);

// POST /api/wishlist/:userId/:productId/move-to-cart - Move item to cart
router.post('/:username/:productId/move-to-cart', moveToCart);

module.exports = router;