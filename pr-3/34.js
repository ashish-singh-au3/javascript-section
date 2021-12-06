function maxCharacterCount(str) {
  let characterCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    characterCountObj[char] = characterCountObj[char] + 1 || 1;

    if (characterCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = characterCountObj[char];
    }
  }
  return maxChar;
}

console.log(maxCharacterCount("13377788888"));

console.log(maxCharacterCount("Iiiiiiii hateeeeE DdDssSSS"));
