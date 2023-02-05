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
  // const oneShirt = Object.keys(object1);
  // const anotherShirt = Object.keys(object2);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

const myPet = {
  breed: 'dog',
  color: 'black',
  age: 7
};

const myPet2 = {
  breed: 'dog',
  color: 'black',
  age: 7
};

console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true)); // => true
console.log(assertEqual(eqObjects(shirtObject, longSleevShirtObject), false)); // => false
console.log(assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false));
console.log(assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true));
console.log(assertEqual(eqObjects(myPet, myPet2), false));
