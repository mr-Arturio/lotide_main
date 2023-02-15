
const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  (eqArrays(actual, expected)) 
  ? console.log(`🟢🟢🟢Assertion Passed ${actual} === ${expected}`) 
  : console.log(`🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
}
module.exports = assertArraysEqual;

/*const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log("equal");
    return true;
  } else {
    console.log("not equal");
    return false;
  }
} */
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 'test'], [1, 2, 'test']);
// assertArraysEqual([1, 2, 3], [3, 2, 1]);
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);