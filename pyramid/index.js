/**
 * Function that accepts a positive number N.
 * The funciton should console.log a pyramid shape with N levels
 * using the # character.
 *
 * -- Examples
 *
 * pyramid(1)
 * '#'
 *
 * pyramid(2)
 * ' # '
 * '###'
 *
 * pyramid(3)
 *
 * '  #  '
 * ' ### '
 * '#####'
 */

/**
 * @param {number} n
 */
function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let col = 0; col < n * 2 - 1; col++) {
      if (col >= midpoint - row && col <= midpoint + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

module.exports = pyramid;
