const assertArraysEqual = require('./assertArraysEqual')


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item)); // why (), not []??
  }
  return results;
};

const number = [10, 7, 23, 100];
const subtraction = num => num - 7; //function(num){ return num - 7}
const resultNumber = map(number, subtraction);
console.log(assertArraysEqual(resultNumber, [3, 0, 16, 93])); //  true

