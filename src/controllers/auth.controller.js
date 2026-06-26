const accountModel = require('../models/account.model');
const { verifyGamePassword, hashGamePassword } = require('../helpers/password.helper');
const config = require('../config/config');
const { getDiscordToken, getDiscordUser } = require('../services/discord.service');

async function loginWithNickname(req, res, next) {
  try {
    const { nickname, password } = req.body;
    if (!nickname || !password) return res.status(400).json({ message: 'Dados inválidos' });
    const account = await accountModel.findByNickname(nickname);
    if (!account) return res.status(401).json({ message: 'Credenciais inválidas' });
    const ok = verifyGamePassword(password, account.password, account.salt);
    if (!ok) return res.status(401).json({ message: 'Credenciais inválidas' });

    req.session.user = { id: account.id, nickname: account.nickname };
    return res.json({ message: 'Logado', user: { id: account.id, nickname: account.nickname } });
  } catch (err) { next(err); }
}

async function register(req, res, next) {
  try {
    const { nickname, password, confirmPassword, email } = req.body;
    if (!nickname || !password || password !== confirmPassword) return res.status(400).json({ message: 'Dados inválidos' });
    const { hash, salt } = hashGamePassword(password);
    const id = await accountModel.createAccount({ nickname, password: hash, salt, email });
    return res.status(201).json({ id });
  } catch (err) { next(err); }
}

function discordRedirect(req, res) {
  const params = new URLSearchParams({
    client_id: config.discord.clientId,
    redirect_uri: config.discord.redirectUri,
    response_type: 'code',
    scope: 'identify email'
  });
  res.redirect(`https://discord.com/api/oauth2/authorize?${params.toString()}`);
}

async function discordCallback(req, res, next) {
  try {
    const { code } = req.query;
    if (!code) return res.status(400).send('Missing code');
    const tokenData = await getDiscordToken(code, config.discord.redirectUri);
    const userData = await getDiscordUser(tokenData.access_token);
    if (req.session && req.session.user) {
      await accountModel.updateDiscordId(req.session.user.id, userData.id);
      return res.redirect('/');
    }
    return res.render('auth/link-discord', { discord: userData });
  } catch (err) { next(err); }
}

module.exports = { loginWithNickname, register, discordRedirect, discordCallback };
