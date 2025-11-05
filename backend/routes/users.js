const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route: Register new user
router.post('/register', userController.register);

// Route: Login existing user
router.post('/login', userController.login);

module.exports = router;
