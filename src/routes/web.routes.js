const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const user = req.session ? req.session.user : null;
  res.render('home', { user });
});

module.exports = router;
