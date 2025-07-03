const express = require('express');
const router = express.Router();

// Test route to confirm API is reachable
router.get('/test', (req, res) => {
  console.log('🧪 /api/test hit');
  res.json({ message: 'Test route working!' });
});

// Load seed data
const magicMerch = require('../seeds/magicMerchData.json');
const familiars = require('../seeds/familiarData.json');
const patron = require('../seeds/patronsData.json');

// Route to get all magic merchandise
router.get('/magicMerch', (req, res) => {
  console.log('/api/magicMerch hit!');
  res.json(magicMerch);
});

// Route to get all familiars
router.get('/familiars', (req, res) => {
  console.log('/api/familiar hit!');
  res.json(familiars);
});

router.post('/signup', (req, res) => {
  const { name ,arcanomail, password, homeplane } = req.body;
  console.log(' /api/signup hit with:', { name, arcanomail, password, homeplane });

  // Check if the user already exists
  if (patron.some(p => p.arcanomail === arcanomail)) {
    console.log(' Signup failed: User already exists');
    return res.status(409).json({ message: 'User already exists' });
  }

  // Create a new user
  const newUser = {
    id: patron.length + 1,
    name,
    arcanomail,
    password,
    homeplane
  };
  patron.push(newUser);
  console.log('✅ Signup successful:', newUser);

  const safeUser = {
    id: newUser.id,
    name: newUser.name,
    arcanomail: newUser.arcanomail,
    homeplane: newUser.homeplane
  };

  return res.status(201).json({
    message: 'Signup successful',
    user: safeUser
  });
});

// Route to handle login
router.post('/login', (req, res) => {
  const { arcanomail, password } = req.body;
  console.log(' /api/login hit with:', { arcanomail, password });

  // Finding a matching user in the database
  const user = patron.find(
    p => p.arcanomail === arcanomail && p.password === password
  );
  if (!user) {
    console.log(' Login failed: Invalid credentials');
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  console.log('✅ Login successful:', user);
  const { password: _, ...userWithoutPassword } = user; // Exclude password from response
return res.json({
    message: 'Login successful',
    user: userWithoutPassword
  });
});

module.exports = router;
