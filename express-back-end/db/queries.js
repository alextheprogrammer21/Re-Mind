const { Pool } = require("pg");
const dbParams = require("./db.js");
const db = new Pool(dbParams);
db.connect();

//This generates a list of all menu items
const browse = (cb) => {
  db.query("SELECT * FROM users;")
    .then((data) => {
      cb(null, data.rows);
    })
    .catch((err) => cb(err));
};

//This is a test query
const testQuery = (cb) => {
  db.query(`SELECT * from users;`)
    .then((data) => {
      console.log("my data", data.rows);
      cb(null, data.rows);
    })
    .catch((err) => cb(err));
};

module.exports = { testQuery, browse };
