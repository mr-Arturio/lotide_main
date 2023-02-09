// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => (actual === expected) ? `🟢🟢🟢Assertion Passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`; // Our assertEqual function can only compare primitive values.
module.exports = assertEqual;

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Blue', 'blue');
assertEqual('red', 'red');
assertEqual(!true, false);