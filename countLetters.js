const countLetters = function (text) {
  const newText = text.toLowerCase();
  const newArr = newText.split('');
  let quantity = {};

  for (let letter of newArr) {

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
