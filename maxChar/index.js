// Find the character that is most commonly used in the string.
// --- Example
// maxChar("abcccccccd") === "c"

/**
 * @param {string} str
 * @returns {string}
 */
function maxChar(str) {
  let charMap = {};
  let maxNum = 0;
  let mostChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] > maxNum) {
      maxNum = charMap[key];
      mostChar = key;
    }
  }

  return mostChar;
}

module.exports = maxChar;
