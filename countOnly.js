
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

module.exports = countOnly;