/* Write a func that calculates sum of all numbers from 1 to n */

function addUpTo(n) {
  let total = 0;
  for (i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTo(10));

//Better time complexity solution

function addUpToBetterApproach(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpToBetterApproach(10));
