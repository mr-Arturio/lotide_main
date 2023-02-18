const flatten = function (newArray) {
  if (Array.isArray(newArray)) {
    let flatArray = [];
    newArray.forEach((item) => {
      if (Array.isArray(item)) {
        flatArray = flatArray.concat(flatten(item));
      } else {
        flatArray.push(item);
      }
    });
    return flatArray;
  } else {
    return `Not an array`;
  }
};

module.exports = flatten;