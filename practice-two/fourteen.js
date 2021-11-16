function maxChar(str) {
  let characterCountObject = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    characterCountObject[char] = characterCountObject[char] + 1 || 1;

    if (characterCountObject[char] > maxChar) {
      maxChar = char;
      maxCount = characterCountObject[char];
    }
  }
  return maxChar;
}

console.log(maxChar("IIIIIIIIIII hateeee Dssss")); //I
