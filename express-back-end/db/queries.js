const pg = require('pg');
const Client = pg.Client;

const options = {
  host: 'drona.db.elephantsql.com',
  database: 'tefxmhou',
  user: 'tefxmhou',
  password: 'PxrFvYX--O9mMN7cOvQ2lI61SOX3Qnaf',
};

const client = new Client(options);
client.connect();

//This generates a list of all menu items
const browse = (cb) => {
  client.query('SELECT * FROM users;')
    .then(data => {
      cb(null, data.rows);
    })
    .catch(err => cb(err));
};

//This is a test query
const testQuery = (cb) => {

  client.query(`SELECT * from users;`)
    .then(data => {
      console.log("my data", data.rows)
      cb(null, data.rows);
    })
    .catch(err => cb(err));
};

module.exports = { testQuery, browse };
