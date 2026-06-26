module.exports = {
  app: {
    baseUrl: process.env.APP_BASE_URL || `http://localhost:${process.env.PORT || 3000}`,
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000
  },
  discord: {
    clientId: process.env.DISCORD_CLIENT_ID || '',
    clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    redirectUri: process.env.DISCORD_REDIRECT_URI || ''
  },
  mercadopago: {
    accessToken: process.env.MP_ACCESS_TOKEN || '',
    publicKey: process.env.MP_PUBLIC_KEY || '',
    webhookKey: process.env.MP_WEBHOOK_KEY || ''
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'replace-me',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  }
};
