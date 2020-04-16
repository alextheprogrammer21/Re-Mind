const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
require("dotenv").config();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static("public"));

const {
  getUser,
  getHabits,
  getDashboard,
  getCalendar,
  recordActivity,
  deleteHabit,
  addHabit,
} = require("./db/queries");

// Get user by ID
App.get("/api/user/:id", (req, res) => {
  let id = req.params.id;
  getUser(id, (err, items) => {
    if (err) {
      console.log("Error");
    }
    res.send(items);
  });
});

// Get habits for user by ID
App.get("/api/user/:id/habits", (req, res) => {
  let id = req.params.id;
  getHabits(id, (err, items) => {
    if (err) {
      console.log("Error");
    }
    res.send(items);
  });
});

// Get chart/dashboard info for user
App.get("/api/user/:id/dashboard", (req, res) => {
  let id = req.params.id;
  getDashboard(id, (err, items) => {
    if (err) {
      console.log("Error");
    }
    res.send(items);
  });
});

// Get calendar (scheduled notifications) for user
App.get("/api/user/:id/calendar", (req, res) => {
  let id = req.params.id;
  getCalendar(id, (err, items) => {
    if (err) {
      console.log("Error");
    }
    res.send(items);
  });
});

// Record habit activity
App.post("/api/habit/:id", (req, res) => {
  let id = req.params.id;
  recordActivity(id, (err, items) => {
    if (err) {
      console.log("Error");
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete habit (deactivate)
App.post("/api/habit/:id/delete", (req, res) => {
  let id = req.params.id;
  deleteHabit(id, (err, items) => {
    if (err) {
      console.log("Error");
      res.sendStatus(404);
    }
    if (items > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
});

// Add habit
App.post("/api/user/:id/habit/:habit/:freq", (req, res) => {
  const user_id = req.params.id;
  const habit = req.params.habit;
  const freq = req.params.freq;
  addHabit(user_id, habit, freq, (err, items) => {
    if (err) {
      console.log("Error");
      res.sendStatus(404);
    }
    if (items.rowCount > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
