const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { //checks if length not equal
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { //if length equal, checks if array matches
    if (arr1[i] !== arr2[i]) { 
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
