require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const db = require('./config/database');
const config = require('./config/config');
const { initWebsocket } = require('./websocket');
const discordBot = require('./bot/discord.bot');

const webRoutes = require('./routes/web.routes');
const authRoutes = require('./routes/auth.routes');
const apiRoutes = require('./routes/api.routes');
const shopRoutes = require('./routes/shop.routes');
const adminRoutes = require('./routes/admin.routes');
const playerRoutes = require('./routes/player.routes');
const ticketRoutes = require('./routes/ticket.routes');
const accountRoutes = require('./routes/account.routes');
const newsRoutes = require('./routes/news.routes');
const rulesRoutes = require('./routes/rules.routes');
const faqRoutes = require('./routes/faq.routes');
const docsRoutes = require('./routes/docs.routes');

const app = express();
const server = http.createServer(app);

const sessionStore = new MySQLStore({
  expiration: 24 * 60 * 60 * 1000,
  createDatabaseTable: true,
  schema: { tableName: process.env.SESSION_TABLE || 'drizzie_sessions' }
}, db.pool);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  key: 'drizzie.sid',
  secret: process.env.SESSION_SECRET || 'replace-me',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24
  }
}));

app.use(rateLimit({ windowMs: 60 * 1000, max: 120 }));

app.use('/', webRoutes);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/player', playerRoutes);
app.use('/tickets', ticketRoutes);
app.use('/account', accountRoutes);
app.use('/news', newsRoutes);
app.use('/rules', rulesRoutes);
app.use('/faq', faqRoutes);
app.use('/api/docs', docsRoutes);

app.get('/health', (req, res) => res.json({ ok: true }));

app.use((err, req, res, next) => {
  console.error(err);
  if (req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') > -1)) {
    return res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
  res.status(err.status || 500).render('error', { error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
initWebsocket(server, sessionStore);
discordBot.startBot().catch(err => console.error('Discord bot error', err));

module.exports = app;
