const express = require('express');
const router = express.Router();
const User = require('../models/User');


// 🔐 LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user });
});


// 🔐 REGISTER ROUTE - Prevents Duplicate Emails
router.post('/register', async (req, res) => {
  console.log('Register request received:', req.body); // ✅ Log input

  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    // Save new user
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered' });

  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
