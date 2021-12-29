function maxCharacterInAnArray(array) {
  let characterCountObject = {};
  let maxCharacter = "";
  let maxCount = 0;

  for (let i = 0; i < array.length; i++) {
    const char = array[i];

    characterCountObject[char] = characterCountObject[char] + 1 || 1;

    if (characterCountObject[char] > maxCount) {
      maxCharacter = char;
      maxCount = characterCountObject[char];
    }
  }
  return maxCharacter;
}

console.log(maxCharacterInAnArray("1337"));
console.log(maxCharacterInAnArray("I Hate DSSSSSSS Algooo"));
