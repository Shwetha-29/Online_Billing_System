const Bill = require('../models/Bill');

// Create a new bill
exports.createBill = async (req, res) => {
  try {
    const { customerName, customerEmail, items, totalAmount } = req.body;

    // Validate fields
    if (!customerName || !customerEmail || !items || items.length === 0 || !totalAmount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create bill
    const bill = new Bill({
      customerName,
      customerEmail,
      items,
      totalAmount,
      createdBy: req.user.id,
    });

    await bill.save();
    res.status(201).json({ message: 'Bill created successfully', bill });

  } catch (error) {
    console.error('Error in createBill:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all bills created by the logged-in user
exports.getBills = async (req, res) => {
  try {
    const bills = await Bill.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.json(bills);
  } catch (error) {
    console.error('Error in getBills:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single bill by ID
exports.getBill = async (req, res) => {
  try {
    const bill = await Bill.findOne({ _id: req.params.id, createdBy: req.user.id });

    if (!bill) {
      return res.status(404).json({ message: 'Bill not found' });
    }

    res.json(bill);
  } catch (error) {
    console.error('Error in getBill:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
