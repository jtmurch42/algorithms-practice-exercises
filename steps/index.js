// Add function that accepts a positive number N
// The function console logs a step shape
// with N levels using the # character.
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 * @param {number} n
 */
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stairs = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stairs += '#';
      } else {
        stairs += ' ';
      }
    }

    console.log(stairs);
  }
}

module.exports = steps;
