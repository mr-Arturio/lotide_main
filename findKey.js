const assertEqual = require('./assertEqual');

const findKey = (object, value) => {
  for (let key in object) { // not of, damn
    //return (value(object[key])) ? key : undefined;
    if (value(object[key])) {
      return key;
    }
  }
  return undefined;
};

const starSystem = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(starSystem, "noma");