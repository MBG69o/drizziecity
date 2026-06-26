function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) return next();
  if (req.headers.accept && req.headers.accept.indexOf('json') > -1) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  return res.redirect('/auth/login');
}

function ensureAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.isAdmin) return next();
  if (req.headers.accept && req.headers.accept.indexOf('json') > -1) return res.status(403).json({ error: 'Forbidden' });
  return res.redirect('/auth/login');
}

module.exports = { ensureAuthenticated, ensureAdmin };
