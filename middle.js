
const assertArraysEqual = require('./assertArraysEqual.js')

const middle = (array) => {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }

};

/*console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4] */
assertArraysEqual(middle([1]), ([]));
assertArraysEqual(middle([1, 2]), ([])); // => []
assertArraysEqual(middle([1, 2, 3]), ([2])); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3])); // => [3]
console.log(assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3]))); // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4]))); // => [3, 4]*/