// Setup
require("dotenv").config();
const { Pool } = require("pg");
const dbParams = require("./db/db.js");
const db = new Pool(dbParams);
db.connect();

// Send SMS to those notifications
// Mark them complete
// Run the script every 10 mins with cron

// Script to query the database and see if there are pending notfications
const getPending = () => {
  db.query(
    `select n.*, h.user_id, u.first_name, u.phone, a.name from notifications n
    join habits h on habit_id = h.id
    join users u on user_id = u.id
    join activities a on activity_id = a.id
    where scheduled_time > current_timestamp - interval '720 minutes' and scheduled_time < current_timestamp + interval '720 minutes'`
  )
    .then((data) => {
      console.log("Returned rows: ", data.rows);
      console.log("Returned count: ", data.rowCount);
      return data.rows;
    })
    .catch((err) => console.log(err));
};

const sendSms = () => {};
