const findKey = (object, value) => {
  for (const key in object) { 
  
    if (value(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;