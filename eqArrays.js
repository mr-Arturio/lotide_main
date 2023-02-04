const assertEqual = (actual, expected) => (actual === expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`;

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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true)); // => false
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1, 5]), true)); // => false
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => true
console.log(assertEqual(eqArrays([], ["1", "2", 3]), false)); // => true
