const db = require('../config/database');

async function findByNickname(nickname) {
  const [rows] = await db.pool.query('SELECT * FROM Accounts WHERE nickname = ? LIMIT 1', [nickname]);
  return rows[0] || null;
}

async function findById(id) {
  const [rows] = await db.pool.query('SELECT * FROM Accounts WHERE id = ? LIMIT 1', [id]);
  return rows[0] || null;
}

async function createAccount({ nickname, password, salt, email }) {
  const [result] = await db.pool.query(
    'INSERT INTO Accounts (nickname, password, salt, email, created_at) VALUES (?, ?, ?, ?, NOW())',
    [nickname, password, salt, email]
  );
  return result.insertId;
}

async function updateDiscordId(accountId, discordId) {
  await db.pool.query('UPDATE Accounts SET discord_id = ?, updated_at = NOW() WHERE id = ?', [discordId, accountId]);
}

module.exports = { findByNickname, findById, createAccount, updateDiscordId };
