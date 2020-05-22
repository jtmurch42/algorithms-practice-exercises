// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size.
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]

/**
 * Returns an array with subarrays
 * @param {any[]} array Array to chunk
 * @param {number} size Size to chunk array
 * @returns {any[]}
 */
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length == size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;
