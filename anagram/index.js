// Check to see if two provided strings are anagrams of each other.
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.
// --- Examples
// anagrams('rail safety', 'fairy tales') --> true
// anagrams('RAIL! SAFETY!', 'fairy tales') --> true
// anagrams('Hi there', 'Bye there') --> false

/**
 * Returns whether or not stringA and stringB are anagrams of each other
 * @param {string} stringA
 * @param {string} stringB
 * @return {boolean}
 */
function anagrams(stringA, stringB) {
  // Remove punctuations and spaces from strings, then lowercase the strings
  const string1 = stringA.replace(/[^\w]/g, '').toLowerCase();
  const string2 = stringB.replace(/[^\w]/g, '').toLowerCase();

  const string1Map = buildCharMap(string1);
  const string2Map = buildCharMap(string2);

  if (Object.keys(string1Map).length !== Object.keys(string2Map).length) {
    return false;
  }

  for (let char in string1Map) {
    if (string1Map[char] !== string2Map[char]) {
      return false;
    }
  }

  return true;
}

/**
 * Returns a character mapping object
 * @param {string} str
 * @return {object}
 */
function buildCharMap(str) {
  const stringCharMap = {};

  for (char of str) {
    stringCharMap[char] = stringCharMap[char] + 1 || 1;
  }

  return stringCharMap;
}

module.exports = anagrams;
