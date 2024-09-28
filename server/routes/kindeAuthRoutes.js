const express = require('express');
const kinde = require('../config/kindeConfig');
const router = express.Router();

// Redirect user to Kinde login page
router.get('/login', (req, res) => {
  const loginUrl = kinde.getLoginUrl();
  res.redirect(loginUrl);
});

// Kinde callback route after login
router.get('/callback', async (req, res) => {
  try {
    const tokens = await kinde.handleRedirect(req);
    res.json({ message: 'Login successful', tokens });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Route for logging out
router.get('/logout', (req, res) => {
  const logoutUrl = kinde.getLogoutUrl();
  res.redirect(logoutUrl);
});

module.exports = router;
