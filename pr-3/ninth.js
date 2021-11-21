function maxCharacterInArray(string) {
  let characterCountObject = {};
  let maxCharacter = "";
  let maxCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    characterCountObject[char] = characterCountObject[char] + 1 || 1;

    if (characterCountObject[char] > maxCount) {
      maxCharacter = char;
      maxCount = characterCountObject[char];
    }
  }
  return maxCharacter;
}

console.log(maxCharacterInArray("I cannn unDerstand thisssss nooooooooww"));
