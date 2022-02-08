function patternSearchInAnArray(array, patternToBeSearched) {
  let countOfThePattern = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < patternToBeSearched.length; j++) {
      const patternChar = patternToBeSearched[j];

      if (patternChar !== array[i + j]) {
        break;
      }

      if (j === patternToBeSearched.length - 1) {
        countOfThePattern++;
      }
    }
  }
  return countOfThePattern;
}

console.log(patternSearchInAnArray("raceraceee", "race")); //2
console.log(patternSearchInAnArray("lolololol", "lol")); //4
