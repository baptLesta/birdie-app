const config = require('./config');

export default {
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
