// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register new user
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(409).json({ message: 'User already exists' });

    const user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err });
  }
});

// routes/auth.js
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return res.json({ success: false });
  }

  res.json({ success: true, user: { username: user.username } });
});


module.exports = router;
