const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  const results = {
    header: req.headers,
    host: req.host,
    hostname: req.hostname,
    params: req.params,
    query: req.query,
  };
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Express start listening on ${PORT}`);
});

const connectionModule = require('./src/connection');

console.log('Welcome!');

const sumResult = connectionModule.sum(1, 2);
console.log(sumResult);
