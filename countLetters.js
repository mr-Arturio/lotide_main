const countLetters = function (text) {
  let quantity = {}; // why {}??

  for (let i = 0; i < text.length; i++) {

    let letter = text[i];
    if (letter !== ' ') {

      if (!quantity[letter]) {
        quantity[letter] = 1;
      } else {
        quantity[letter]++;
      }

    }
  }
  console.log(quantity);
};

module.exports = countLetters;
