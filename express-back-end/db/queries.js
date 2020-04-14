const { Pool } = require("pg");
const dbParams = require("./db.js");
const db = new Pool(dbParams);
db.connect();

//This is a test query
const testQuery = (cb) => {
  db.query(`SELECT * from users;`)
    .then((data) => {
      console.log("my data", data.rows);
      cb(null, data.rows);
    })
    .catch((err) => cb(err));
};

// Get User Information
const getUser = (id, cb) => {
  db.query(`SELECT * from users where id=${id};`)
    .then((data) => {
      console.log("Test user data", data.rows);
      cb(null, data.rows);
    })
    .catch((err) => console.log(err));
};

// Get Habits Information
const getHabits = (id, cb) => {
  db.query(
    `select * from habits 
  join activities on activity_id = activities.id 
  where user_id = ${id};`
  )
    .then((data) => {
      console.log("Test user data", data.rows);
      cb(null, data.rows);
    })
    .catch((err) => console.log(err));
};

module.exports = { testQuery, getUser, getHabits };
