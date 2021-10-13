/* Divide and Conquer
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity */

/* Given a sorted array of integers, write a function called search,
 that accepts a value and returns the index where the value passed to 
 the function is located. If the value is not found, return -1 */

// Naive sol => Linear Search - O(N)

function search(arr, num) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
