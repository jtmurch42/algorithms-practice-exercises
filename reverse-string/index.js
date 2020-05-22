// Return a new string with the reversed order of characters.

/**
 * Returns the reversed string
 * @param {string} str
 * @returns {string}
 */
function reverseStr1(str) {
  return str.split('').reverse().join('');
}

/**
 * Returns the reversed string
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

module.exports = {
  reverseStr1,
  reverseStr2
};
