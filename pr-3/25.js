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
  return -1; //if the value isn't found
};

console.log(binarySearch(["1", "5", "7", "8"], "9")); // -1
console.log(binarySearch(["travel", "mango", "backpack", "samosa"], "samosa")); //3
