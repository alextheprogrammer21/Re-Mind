const { Pool } = require("pg");
const dbParams = require("./db.js");
const db = new Pool(dbParams);
db.connect();

// Get User Information
const getUser = (id, cb) => {
  db.query(`SELECT * from users where id=${id} LIMIT 1;`)
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

const summary = (data) => {
  let result = [];
  let rate = 0;
  data.forEach((element) => {
    let completion = element.current / element.frequency;
    completion > 1 ? (completion = 1) : (completion = completion);
    rate += completion;
    element.current = completion * 100;
    delete element.frequency;
    element.max = 100;
    result.push(element);
  });
  let overall = {
    name: "Overall",
    max: 100,
    current: (rate / data.length) * 100,
  };
  result.push(overall);
  return result;
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
      const processed = summary(data.rows);
      cb(null, processed);
    })
    .catch((err) => console.log(err));
};
const getCalendar = (id, cb) => {
  db.query(
    `select habit_id, date_trunc('day', scheduled_time) as day, name, image
    from notifications
    join habits on habit_id = habits.id
    join activities on activity_id = activities.id
    where scheduled_time >= date_trunc('week', current_date) and scheduled_time < date_trunc('week', current_date) + interval '7 days'  and user_id = ${id}
    group by scheduled_time, habit_id, name, image
    order by scheduled_time;`
  )
    .then((data) => {
      cb(null, data.rows);
    })
    .catch((err) => console.log(err));
};

module.exports = { getUser, getHabits, getDashboard, getCalendar };
