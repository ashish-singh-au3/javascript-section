function maxCharacterCount(array) {
  let characterCountObject = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < array.length; i++) {
    const char = array[i];

    characterCountObject[char] = characterCountObject[char] + 1 || 1;

    if (characterCountObject[char] > maxCount) {
      maxChar = char;
      maxCount = characterCountObject[char];
    }
  }
  return maxChar;
}

console.log(maxCharacterCount("133788888888"));
console.log(maxCharacterCount("I Hateeeeeee Dssss Algoooooooooo"));
