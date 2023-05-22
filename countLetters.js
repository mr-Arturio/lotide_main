const countLetters = function (text) {
  const newText = text.toLowerCase().split('');
  let quantity = {};

  for (let letter of newText) {

       if (letter !== ' ') { //check if the character is space, if not move forward

      if (!quantity[letter]) { // checks if character is already present in the quantity object
        quantity[letter] = 1; //if not present, new property added with value 1
      } else {
        quantity[letter]++;// if present, count increase by 1
      }

    }
  }
  console.log(quantity);
};

module.exports = countLetters;


/* reduce method
const countLetters = function(text) {
  const newText = text.toLowerCase().split('');

  const quantity = newText.reduce((acc, letter) => {
    if (letter !== ' ') {
      acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
    }
    return acc;
  }, {});

  console.log(quantity);
};
*/
