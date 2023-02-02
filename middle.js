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

const assertArraysEqual = (actual, expected) => {
  console.log((actual, expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
}; 
/*const assertArraysEqual = (actual, expected) => {
  if (assertArraysEqual(actual, expected)) {
    console.log("Equal");
    return true;
  } else {
    console.log("Not equal");
    return false;
  }
}; */

const middle = (array) => {
  if (array.length <= 2){
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
assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), ([3, 4])); // => [3, 4]*/