const binarySearch = (sortedArray, value) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = sortedArray[mid];

    if (midValue === value) {
      return mid;
    } else if (midValue < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
console.log(binarySearch([5, 10, 15, 20, 25, 32, 40], 25)); //4
