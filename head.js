const assertEqual = require('./assertEqual');

const head = function (arr) {
 
  return (arr[0]);
};

module.exports = head;



// TEST CODE
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5]), 5);
// assertEqual(head([]));
// assertEqual(head([3]), 2);
// assertEqual(head([3], [3, 6]), 3);