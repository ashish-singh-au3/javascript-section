// Implement a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

const binarySearchPr = (array, value) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const middleValue = array[mid];

    if (middleValue === value) {
      return mid;
    } else if (middleValue < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearchPr([5, 10, 15, 20, 25, 32, 40], 40)); //6
