function stringPatternSearchInAText(text, pattern) {
  let countOfthePattern = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];

      if (patternChar !== text[i + j]) {
        break;
      }
      if (j === pattern.length - 1) {
        countOfthePattern++;
      }
    }
  }
  return countOfthePattern;
}

console.log(stringPatternSearchInAText("lollipop", "lol")); //1
console.log(stringPatternSearchInAText("lolol", "lol")); //2
