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

const getDashboard = (id, cb) => {
  db.query(
    `select habit_id, count(habit_id) as current, habits.frequency as frequency, activities.name
    from habits_journal 
    join habits on habit_id = habits.id
    join activities on activity_id = activities.id
    where habits_journal.created_at > date_trunc('week', current_date) and user_id = ${id}
    group by habit_id, frequency, activities.name;`
  )
    .then((data) => {
      console.log("Test user data", data.rows);
      cb(null, data.rows);
    })
    .catch((err) => console.log(err));
};

module.exports = { testQuery, getUser, getHabits, getDashboard };

// select * from habits
// right join habits_journal on habits.id=habits_journal.habit_id
// join activities on habits.activity_id = activities.id
// where user_id =1
// select DATE_TRUNC('week', created_at) from habits_journal
// select date_trunc('week', current_date) - interval '7 days' as last_week
