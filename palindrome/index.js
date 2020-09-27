// Check to see if a string is a palindrome.
// --- Examples
// palindrome("abba") === true
// palindrome("abcdefg") === false

/**
 * @param {string} str
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
 * @param {string} str
 * @returns {boolean}
 */
function palindrome2(str) {
  const reversedStr = str.split('').reverse('').join('');
  return reversedStr === str;
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function palindrome3(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = {
  palindrome1,
  palindrome2,
  palindrome3
};
