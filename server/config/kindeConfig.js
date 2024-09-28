const { KindeClient } = require('@kinde-oss/kinde-nodejs-sdk');

const kinde = new KindeClient({
  clientId: process.env.KINDE_CLIENT_ID,
  clientSecret: process.env.KINDE_CLIENT_SECRET,
  redirectUri: process.env.KINDE_CALLBACK_URL,
  kindeDomain: process.env.KINDE_DOMAIN,
});

module.exports = kinde;
