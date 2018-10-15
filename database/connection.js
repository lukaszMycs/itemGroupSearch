const { MongoClient } = require('mongodb');

const dbUrl = 'mongodb://bunny0921:qw12qw@ds133533.mlab.com:33533/heroku_nlzlml1v';

const client = new MongoClient(dbUrl);

client.connect((err) => {
  console.log('HEllo end', err);
});

module.exports = client;
