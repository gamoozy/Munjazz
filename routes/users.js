const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure the path to the User model is correct

// Other user-related routes (e.g., register, login)
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

// Route to submit service details
router.post('/submit-service', async (req, res) => {
  const { userId, serviceName, description, imageUrl, audioUrl } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.serviceDetails = { description, imageUrl, audioUrl };
    await user.save();

    res.json({ message: 'Service details saved', user });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the router
module.exports = router;
