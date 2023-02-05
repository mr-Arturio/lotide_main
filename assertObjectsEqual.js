const eqObjects = function (object1, object2) {
  const oneShirt = Object.keys(object1);
  const anotherShirt = Object.keys(object2);
  if (oneShirt.length === anotherShirt.length) {
    return true;
  }

  for (let key of oneShirt) {
    if (oneShirt[key] !== anotherShirt[key]) {
      return false;
    }
    return true;
  }
  //return false;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  return (eqObjects(actual, expected)) ? `🟢🟢🟢Assertion passed:  ${inspect(actual)} === ${inspect(expected)}` : `🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

};

//console.log(`Example label: ${inspect(actual)}`);
