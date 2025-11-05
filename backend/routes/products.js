const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productController = require('../controllers/productController');

// Add a new product
router.post('/', auth, productController.addProduct);

// Get all products (created by logged-in user)
router.get('/', auth, productController.getProducts);

// Get a single product by ID
router.get('/:id', auth, productController.getProduct);

// Update a product by ID
router.put('/:id', auth, productController.updateProduct);

// Delete a product by ID
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
