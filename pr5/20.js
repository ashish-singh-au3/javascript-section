function searchVal(arr, pattern) {
  let countOfPattern = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];

      if (patternChar !== arr[i + j]) {
        break;
      }

      if (j === pattern.length - 1) {
        countOfPattern++;
      }
    }
  }
  return countOfPattern;
}

console.log(searchVal("lollipop", "lol"));

console.log(typeof number);
