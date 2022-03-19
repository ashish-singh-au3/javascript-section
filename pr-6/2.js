const binarySearch = (sortedArray, value) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = sortedArray[mid];

    if (midVal === value) {
      return mid;
    } else if (midVal < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));

function strPatternSearch(text, pattern) {
  let countOfPattern = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];

      if (patternChar !== text[i + j]) {
        break;
      }
      if (j === pattern.length - 1) {
        countOfPattern++;
      }
    }
  }
  return countOfPattern;
}
console.log(strPatternSearch("Lolollol", "lol"));
