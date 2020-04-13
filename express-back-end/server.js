const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./db/db.js');
const db = new Pool(dbParams);
db.connect();

const testString = "test"
const { testQuery, browse } = require('./db/queries');

// Sample GET route
App.get('/api/data', (req, res) => res.json({

  message: "test",
}));

App.get("/api/test", (req, res) => {

  testQuery((err, items) => {
    if (err) {
      console.log("Error")
    }
      res.send(items);
  });
  
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
