const findKeyByValue =  (object, value) => {
  for (let key of Object.keys(object)) {        //(let key in object)
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;