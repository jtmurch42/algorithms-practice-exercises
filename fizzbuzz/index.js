// Print numbers from 1 to n.
// For multiples of three print "fizz" instead of the number.
// Multiples of five print "buzz".
// Multiples of both three and five print "fizzbuzz".
// --- Example
//  fizzBuzz(5);
//  1
//  2
//  fizz
//  4
//  buzz

/**
 * @param {number} n
 */
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
