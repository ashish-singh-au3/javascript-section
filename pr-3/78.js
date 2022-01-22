const binarySearchForSortedArray = (sortedArray, valueToBeSearchedInArray) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = sortedArray[mid];

    if (midValue === valueToBeSearchedInArray) {
      return mid;
    } else if (midValue < valueToBeSearchedInArray) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearchForSortedArray([1, 2, 3, 4, 8, 9, 10, 11], 9));
