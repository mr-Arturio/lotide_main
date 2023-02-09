const assertEqual = require("./assertEqual.js");

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

module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1, 5]), true); // => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => true
// assertEqual(eqArrays([], ["1", "2", 3]), false); // => true
