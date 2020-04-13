const pg = require('pg');

const Client = pg.Client;

const options = {
  host: 'drona.db.elephantsql.com',
  database: 'tefxmhou',
  user: 'tefxmhou',
  password: 'PxrFvYX--O9mMN7cOvQ2lI61SOX3Qnaf'
};

const client = new Client(options);

client.connect();

module.exports = client;