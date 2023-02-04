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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const shirtObject = {
  color: 'red',
  size: 'medium'
};
const anotherShirtObject = {
  size: 'medium',
  color: 'red'
};



const longSleevShirtObject = {
  size: 'medium',
  color: 'red',
  sleevLength: 'long'
};

const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};

const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"]
};

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};

console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true)); // => true
console.log(assertEqual(eqObjects(shirtObject, longSleevShirtObject), false)); // => false
console.log(assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false));
console.log(assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true));
