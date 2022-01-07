function binarySearchInASortedArray(sortedArray, valueToBeSearched) {
  let left = 0;

  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = sortedArray[mid];

    if (midValue === valueToBeSearched) {
      return mid;
    } else if (midValue < valueToBeSearched) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearchInASortedArray([1, 2, 4, 9, 14, 20], 9)); // 3
console.log(binarySearchInASortedArray([1, 2, 4, 9, 14, 20], 90)); //-1
