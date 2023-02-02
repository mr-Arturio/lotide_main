const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
};

const findKeyByValue = function (object, value) {
  for (let key of Object.keys(object)) {
    return (object[key] === value) ? key : undefined;

  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);