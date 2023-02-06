const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => (eqArrays(actual, expected)) ? `🟢🟢🟢Assertion Passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`;


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

