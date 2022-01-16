function binarySearch(sortedArray, valueToBeSearched) {
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

console.log(binarySearch([1, 2, 8, 10, 12], 8));
