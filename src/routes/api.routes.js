const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middlewares/auth.middleware');

router.get('/player/me', ensureAuthenticated, async (req, res) => {
  res.json({ user: req.session.user });
});

module.exports = router;
