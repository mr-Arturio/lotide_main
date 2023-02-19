const countOnly = function (allItems, itemsToCount) {
  const results = {}; // our function define
  for (const item of allItems) {

    if (itemsToCount[item]) { //checks if the item is a key in the itemsToCount object
      if (results[item]) { //f it is, the function increments the value of the key in the results object.
        results[item] += 1;
      } else { //If the key does not exist in the results object,
        results[item] = 1; // the function creates it and sets its value to 1.
      }

    }
  }
  return results;
};

module.exports = countOnly;