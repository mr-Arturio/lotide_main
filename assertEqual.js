// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  (actual === expected) 
  ? console.log(`🟢🟢🟢Assertion Passed ${actual} === ${expected}`)
  : console.log(`🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
} // Our assertEqual function can only compare primitive values.
module.exports = assertEqual;
