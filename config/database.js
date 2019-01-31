const config = require('./config');

module.exports = {
  client: config.dbClient,
  connection: {
    host: config.dbHost || '127.0.0.1',
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    charset: 'utf8'
  },
  debug: true
};
