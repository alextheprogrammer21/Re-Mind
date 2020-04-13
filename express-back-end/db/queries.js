const pg = require('pg');
const Client = pg.Client;

const options = {
  host: 'drona.db.elephantsql.com',
  database: 'wquprnon',
  user: 'wquprnon',
  password: 'TyvAJ-61ldtnZ9YZetkO2SC5T-jBtXny',
};

const client = new Client(options);
client.connect();

//This generates a list of all menu items
const browse = (cb) => {
  client.query('SELECT * FROM Users;')
    .then(data => {
      cb(null, data.rows);
    })
    .catch(err => cb(err));
};

//This is a test query
const testQuery = (cb) => {

  client.query(`SELECT * from Users;`)
    .then(data => {
      cb(null, data.rows);
    })
    .catch(err => cb(err));
};

module.exports = { testQuery, browse };
