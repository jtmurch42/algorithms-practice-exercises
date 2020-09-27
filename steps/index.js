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
function steps1(n) {
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

/**
 * Recursive solution
 * @param {number} n
 */
function steps2(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps2(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps2(n, row, stair);
}

module.exports = {
  steps1,
  steps2
};
