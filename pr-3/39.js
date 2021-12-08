function searchTheValue(array, value) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid];

    if (midValue === value) {
      return mid;
    } else if (midValue < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(
  searchTheValue(
    [1, 2, 3, 4, 5, 6, 10, 18, 25, 29, 39, 100, 101, 109, 210, 221],
    39
  )
); // 10

console.log(searchTheValue([5, 10, 15, 20, 25, 32, 40], 25)); //4
