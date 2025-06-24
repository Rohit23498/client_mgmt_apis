const express = require('express');
const router = express.Router();

// Simple hardcoded credentials
const USER = { username: 'rohit', password: 'rohit123' };

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    // In a real app, use JWT. Here, return a dummy token.
    return res.json({ token: 'dummy-auth-token', username });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router; 