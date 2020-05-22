// Check to see if a string is a palindrome.
// --- Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

/**
 * Returns whether or not the string is a palindrome
 * @param {str} str
 * @returns {boolean}
 */
function palindrome1(str) {
  let reversedStr = '';

  for (char of str) {
    reversedStr = char + reversedStr;
  }

  return reversedStr === str;
}

/**
 * Returns whether or not the string is a palindrome
 * @param {str} str
 * @returns {boolean}
 */
function palindrome2(str) {
  const reversedStr = str.split('').reverse('').join('');
  return reversedStr === str;
}

module.exports = {
  palindrome1,
  palindrome2
};
