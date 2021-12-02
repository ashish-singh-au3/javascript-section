function maxCharacterCount(str) {
  let characterCountObject = {};
  let maxChar = "";
  let maxCount = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    characterCountObject[char] = characterCountObject[char] + 1 || 1;

    if (characterCountObject[char] > maxCount) {
      maxChar = char;
      maxCount = characterCountObject[char];
    }
  }
  return maxChar;
}

console.log(maxCharacterCount("1337"));
console.log(maxCharacterCount("I Hateeeeeee Dssss Algoooooooooo"));
