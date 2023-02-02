const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  console.log((eqArrays(actual, expected)) ? `🟢🟢🟢Assertion passed ${actual} === ${expected}` : `🔴🔴🔴Assertion Failed ${actual} !== ${expected}`);
};


const letterPositions = function (sentence) {
  const results = {};  //empty variable that will show/store the position of leter in the sentence
  for (let i = 0; i < sentence.length; i++) { //looping through the sentence, checking every symbol
    let letter = sentence[i]; // creating new var letter and giving it a value of every symbol in sentance
    if (letter !== ' ') { // skipping execution fn the " " spaces by checking if symbol NOT = " "
      if (results[sentence[i]]) { // if its not a space we check if object already exist in the the results - skiping for the 'first time' letters.
        //console.log(results[sentence[i]].push(i));
        results[sentence[i]].push(i);  //  we push to the end of string current index(i) of all sybols that repeats... if letter/symbol duplicate
      } else { // here we printing positions(i) of all unique letters/symbols
        results[sentence[i]] = [i]; //  results of sentence objects = number of position
        //console.log(results[sentence[i]] = [i]);
      }
    }
  }
  return results;
};



console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);