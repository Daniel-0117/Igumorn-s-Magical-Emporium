const express = require('express');
const router = express.Router();

// Test route to confirm API is reachable
router.get('/test', (req, res) => {
  console.log('🧪 /api/test hit');
  res.json({ message: 'Test route working!' });
});

// Load seed data
const magicMerch = require('../seeds/magicMerchData.json');

// Route to get all magic merchandise
router.get('/magicMerch', (req, res) => {
  console.log('🔥 /api/magicMerch hit!');
  res.json(magicMerch);
});

module.exports = router;
