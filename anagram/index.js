// Check to see if two provided strings are anagrams of each other.
// Only consider characters, not spaces or punctuation.
// Consider capital letters to be the same as lower case.
// --- Examples
// anagrams('rail safety', 'fairy tales') --> true
// anagrams('RAIL! SAFETY!', 'fairy tales') --> true
// anagrams('Hi there', 'Bye there') --> false

/**
 * @param {string} stringA
 * @param {string} stringB
 * @return {boolean}
 */
function anagrams1(stringA, stringB) {
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

/**
 * @param {string} stringA
 * @param {string} stringB
 * @return {boolean}
 */
function anagrams2(stringA, stringB) {
  // Remove punctuations and spaces from strings, then lowercase the strings
  const string1 = stringA.replace(/[^\w]/g, '').toLowerCase();
  const string2 = stringB.replace(/[^\w]/g, '').toLowerCase();

  const string1Sorted = string1.split('').sort().join('');
  const string2Sorted = string2.split('').sort().join('');

  return string1Sorted === string2Sorted;
}

module.exports = {
  anagrams1,
  anagrams2
};
