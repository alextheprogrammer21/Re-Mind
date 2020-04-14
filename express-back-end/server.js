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

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
