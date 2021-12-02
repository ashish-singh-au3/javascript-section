const binarySearch = (sortedArr, value) => {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = sortedArr[mid];

    if (midValue === value) {
      return mid;
    } else if (midValue < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return midValue;
};

console.log(binarySearch([5, 10, 15, 20, 25, 32, 40], 25)); //4
