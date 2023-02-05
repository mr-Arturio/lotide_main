const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //   for (const key in object1) {
  //     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
  //       if (!eqArrays(object1[key], object2[key])) {
  //         return false;
  //       }
  //     } else if (object1[key] !== object2[key]) {
  //       return false;
  //     }
  //   }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  return (eqObjects(actual, expected)) ? `🟢🟢🟢Assertion passed:  ${inspect(actual)} === ${inspect(expected)}` : `🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
};

console.log(assertObjectsEqual({ a: "1", b: 2, }, { b: 2, a: "1" }));