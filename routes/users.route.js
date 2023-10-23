const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Welcome! You have successfully login');
});

router.get('/register', (req, res) => {
  res.send('Register request');
});

module.exports = router;
