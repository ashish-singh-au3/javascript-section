function maxCharacterCount(string) {
  string = string.toLowerCase();
  let characterCountObject = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    characterCountObject[char] = characterCountObject[char] + 1 || 1;

    if (characterCountObject[char] > maxCount) {
      maxChar = char;
      maxCount = characterCountObject[char];
    }
  }
  return maxChar;
}
console.log(maxCharacterCount("I Hateeeeeee Dssss Algoooooooooo"));
