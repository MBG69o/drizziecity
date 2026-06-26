const { Server } = require('socket.io');
const db = require('../config/database');

function initWebsocket(server, sessionStore) {
  const io = new Server(server, {
    cors: { origin: (process.env.ALLOWED_ORIGINS || '*').split(','), methods: ["GET", "POST"] }
  });

  io.on('connection', (socket) => {
    console.log('WS connected', socket.id);
    socket.on('server:status', async () => {
      try {
        const [rows] = await db.pool.query('SELECT COUNT(*) AS online FROM players WHERE online = 1');
        socket.emit('server:status', { online: rows[0].online });
      } catch (err) {
        console.error('WS server:status error', err);
        socket.emit('server:status', { error: 'Unable to fetch status' });
      }
    });
    socket.on('disconnect', () => console.log('WS disconnected', socket.id));
  });
}

module.exports = { initWebsocket };
