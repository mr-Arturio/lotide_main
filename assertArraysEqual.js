// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };
const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => (eqArrays(actual, expected)) ? `🟢🟢🟢Assertion Passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`;

/*const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log("equal");
    return true;
  } else {
    console.log("not equal");
    return false;
  }
} */

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 'test'], [1, 2, 'test']));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));