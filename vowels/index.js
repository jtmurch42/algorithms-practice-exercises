/**
 * Function that returns the number of vowels used in a string.
 * Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
 *
 * -- Examples
 *
 * vowels('Hi There!') -> 3
 * vowels('What') -> 1
 */

/**
 * @param {string} str
 * @returns {number}
 */
function vowels1(str) {
  const vowelChars = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (char of str.toLowerCase()) {
    if (vowelChars.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

/**
 * @param {string} str
 * @returns {number}
 */
function vowels2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = {
  vowels1,
  vowels2
};
