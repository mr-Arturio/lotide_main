const findKey = (object, value) => {
  for (let key in object) { 
  
    if (value(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;