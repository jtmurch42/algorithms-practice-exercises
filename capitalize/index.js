// Capitalize the first letter of each word in the string then return the capitalized string.
// --- Examples
// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * Returns a capitalized string
 * @return {string}
 * @param {string} str
 */
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;
