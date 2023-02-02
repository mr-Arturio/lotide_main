const assertEqual = (actual, expected) => {
  console.log((actual === expected) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
}; //Our assertEqual function can only compare primitive values

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
/*countOnly will be given an array and an object.
It will return an object containing counts of everything that the input object listed. */
const countOnly = function (allItems, itemsToCount) {
  const results = {}; // our function define
  for (const item of allItems) {
    //console.log(item);
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);