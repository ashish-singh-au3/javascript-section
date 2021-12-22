function strPatternSearch(string, pattern) {
  string = string.toLowerCase();
  let countOfThePattern = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];

      if (patternChar !== string[i + j]) {
        break;
      }
      if (j === pattern.length - 1) {
        countOfThePattern++;
      }
    }
  }
  return countOfThePattern;
}

console.log(strPatternSearch("lollipop", "lol")); //1
console.log(strPatternSearch("lolol", "lol")); //2
