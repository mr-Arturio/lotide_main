//const assertArraysEqual = require('./assertArraysEqual')

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // why (), not []?? - [] to access an element from an array, () to call a function
  }                              //'item' is not an array, it's a single element from the array parameter that was passed into the map function.
  return results;
};

module.exports = map;



