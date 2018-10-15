const Rollbar = require('rollbar');

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();
const db = require('./database/connection');

db.on('open', () => {
  console.log('Connected!');
});
const app = express();
const PORT = process.env.PORT || 5000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('default');
});
app.get('/status', (req, res) => {
  const results = {
    header: req.headers,
    host: req.host,
    hostname: req.hostname,
    params: req.params,
    query: req.query,
  };
  res.json(results);
});

app.get('/*', (req, res) => {
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Express start listening on ${PORT}`);
});
app.on('close', () => {
  console.log('closing !');
  db.close();
});
const connectionModule = require('./src/connection');

console.log('Welcome!');

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!');

const sumResult = connectionModule.sum(1, 2);
console.log(sumResult);
