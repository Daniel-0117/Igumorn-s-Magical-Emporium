const express = require('express');
const router = express.Router();

// Load seed data
const magicMerch = require('../seeds/magicMerchData.json');

// Test route to confirm API is reachable
router.get('/test', (req, res) => {
  console.log('🧪 /api/test hit');
  res.json({ message: 'Test working' });
});

// Route to get all magic merchandise
router.get('/magicMerch', (req, res) => {
  console.log('🔥 /api/magicMerch hit!');
  res.json(magicMerch);
});

module.exports = router;
