const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
require("dotenv").config();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static("public"));

const { testQuery, getUser, getHabits, getDashboard } = require("./db/queries");

// Test call

App.get("/api/test", (req, res) => {
  testQuery((err, items) => {
    if (err) {
      console.log("Error");
    }
    res.send(items);
  });
});

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

App.get("/api/user/:id/dashboard", (req, res) => {
  let id = req.params.id;
  getDashboard(id, (err, items) => {
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
