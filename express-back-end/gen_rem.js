const moment = require("moment");

const thisWeek = () => {
  let curr = new Date();
  let week = [];
  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i;
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }
  return week;
};

function generateRandomDays(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function setReminders(id, freq) {
  const reminders = generateRandomDays(thisWeek(), freq);
  let sql =
    "INSERT INTO notifications (habit_id, notification_type, scheduled_time) VALUES ";
  reminders.forEach((element) => {
    let timestamp = moment(element).hour(20);
    sql += `(${id}, 'sms', '${moment(timestamp).format()}'),`;
  });
  const fixed = sql.slice(0, -1).concat(";");
  console.log(fixed);
}

setReminders(2, 4);
