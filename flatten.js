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
}; */ //seems not working in middle.js

const flatten = function (newArray) {
  //const result = [];
  if (Array.isArray(newArray)) {
    return newArray.flat();
    //return result.concat(...newArray); //return //newArray.flat(1); //result.concat(newArray); // proper way to concat? .push? spread operator??
  } else {
    return `Not an array`;
  }
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // output: [ 1, 2, 3, 4, 5, 6 ]
console.log(flatten({})); // output: " Not an array"
console.log(flatten([1, 2, [3, [4]], 5, [6], 4, 7]));  // not working!
console.log(flatten([1, 2, 3], [1, 2, 3, 4])); // not working!!