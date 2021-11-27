function maxCharacterCountAlgo(array) {
  let characterCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < array.length; i++) {
    const char = array[i];

    characterCountObj[char] = characterCountObj[char] + 1 || 1;

    if (characterCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = characterCountObj[char];
    }
  }
  return maxChar;
}

console.log(maxCharacterCountAlgo("1337"));
console.log(maxCharacterCountAlgo("I Hateeeeeee Dssss Algoooooooooo"));
