const binarySearch = (sortedArray, valueToBeSearched) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = sortedArray[mid];

    if (midVal === valueToBeSearched) {
      return mid;
    } else if (midVal < valueToBeSearched) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 10], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4)); //3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 10)); //-1
