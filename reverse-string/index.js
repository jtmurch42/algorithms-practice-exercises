// Return a new string with the reversed order of characters.

/**
 * @param {string} str
 * @returns {string}
 */
function reverseStr1(str) {
  return str.split('').reverse().join('');
}

/**
 * @param {string} str
 * @returns {string}
 */
function reverseStr2(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

/**
 * @param {string} str
 * @returns {string}
 */
function reverseStr3(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
}

module.exports = {
  reverseStr1,
  reverseStr2,
  reverseStr3
};
