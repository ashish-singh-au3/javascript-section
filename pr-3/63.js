function searchPatternInAText(text, pattern) {
  text = text.toLowerCase();
  let countOfThePattern = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const patternChar = pattern[j];

      if (patternChar !== text[i + j]) {
        break;
      }

      if (j === pattern.length - 1) {
        countOfThePattern++;
      }
    }
  }
  return countOfThePattern;
}

console.log(searchPatternInAText("Lololol", "lol"));
