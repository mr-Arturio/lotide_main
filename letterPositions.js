const letterPositions = function (sentence) {
  const results = {};  //empty variable that will show/store the position of leter in the sentence
  
  for (let i = 0; i < sentence.length; i++) { //checking every symbol
    let letter = sentence[i]; //  new var = every symbol in sentance
    
    if (letter !== ' ') { // skipping execution if symbol NOT = " "
      if (results[sentence[i]]) { // if its not a space we check if object already exist in the the results - skiping for the 'first time' letters.
        results[sentence[i]].push(i);  //  we push to the end of string current index(i) of all sybols that repeats... if letter/symbol duplicate
      } else { // here we printing positions(i) of all unique letters/symbols
        results[sentence[i]] = [i]; //  results of sentence objects = number of position

      }
    }
  }
  return results;
};

module.exports = letterPositions;
