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

/*const assertArraysEqual = (actual, expected) => {
  console.log((actual, expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
}; */
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log("equal");
    return true;
  } else {
    console.log("not equal");
    return false;
  }
};

const without = (source, itemsToRemove) => {
  let final = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] === itemsToRemove[i]) {
      //console.log(itemsToRemove[i])
    } else {
      final.push(source[i]);
    }
  }
  //console.log(final)
  return final;
};

/*const without = (source, itemsToRemove) => {
  return source.filter((item) => {
    return !itemsToRemove.includes(item);
  });
}; */

// TEST CODE
//without([1, 2, 3], [1]); // => [2, 3]
const test = ["1", "2", "3"];
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(test, ["1", "2", "3"]);

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);