// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size.
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]

/**
 * @param {any[]} array Array to chunk
 * @param {number} size Size to chunk array
 * @returns {any[][]}
 */
function chunk1(array, size) {
  const chunked = [];

  for (let element of array) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

/**
 * @param {any[]} array Array to chunk
 * @param {number} size Size to chunk array
 * @returns {any[][]}
 */
function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = {
  chunk1,
  chunk2
};
