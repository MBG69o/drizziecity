// Adapter de senha — ATENÇÃO: substitua pela implementação exata do seu gamemode.
// Exemplo genérico: salt + sha256. Se seu gamemode usa MD5, SHA1 ou outra coisa,
// adapte aqui (verifyGamePassword e hashGamePassword).
const crypto = require('crypto');

function hashGamePassword(plain) {
  const salt = crypto.randomBytes(8).toString('hex');
  const hash = crypto.createHash('sha256').update(salt + plain).digest('hex');
  return { hash, salt };
}

function verifyGamePassword(plain, storedHash, salt) {
  if (!storedHash) return false;
  if (!salt || salt.length === 0) {
    // fallback: try md5 (common em alguns gamemodes)
    const md5 = crypto.createHash('md5').update(plain).digest('hex');
    if (md5 === storedHash) return true;
    // else try plain sha256 fallback without salt
    const sha = crypto.createHash('sha256').update(plain).digest('hex');
    return sha === storedHash;
  }
  const hash = crypto.createHash('sha256').update(salt + plain).digest('hex');
  return hash === storedHash;
}

module.exports = { hashGamePassword, verifyGamePassword };
