const connectionModule = require('./src/connection');

console.log('Welcome!');

const sumResult = connectionModule.sum(1, 2);
console.log(sumResult);
