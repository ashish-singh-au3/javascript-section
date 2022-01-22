function linearSearch(array, indexOfValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === indexOfValue) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([14, 10, 8, 5, 100, 6], 100));
console.log(linearSearch([14, 10, 8, 5, 100, 6], 1)); //-1
