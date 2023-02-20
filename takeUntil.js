const takeUntil = function (array, callback) {
   for (let item of array) {
    if (callback(item)) {
     array = array.slice(0, array.indexOf(item));
    }
  }
  return array;
};

module.exports = takeUntil;