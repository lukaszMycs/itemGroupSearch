const connectionObj = (() => {
  function sum(a, b) {
    console.log('Sum activated!');
    return a + b;
  }
  return { sum };
})();

module.exports = connectionObj;
