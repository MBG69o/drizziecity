const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/discord', authController.discordRedirect);
router.get('/discord/callback', authController.discordCallback);
router.post('/login', authController.loginWithNickname);
router.post('/register', authController.register);
router.get('/login', (req, res) => res.render('auth/login'));
router.get('/register', (req, res) => res.render('auth/register'));

module.exports = router;
