const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const billController = require('../controllers/billController');

router.post('/', auth, billController.createBill);
router.get('/', auth, billController.getBills);
router.get('/:id', auth, billController.getBill);

module.exports = router;