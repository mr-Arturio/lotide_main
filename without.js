function without(source, itemsToRemove) {
  const final = [];
  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true;
        break;
      }
    }
    if (!shouldRemove) {
      final.push(source[i]);
    }
  }
  return final;
};


module.exports = without;
