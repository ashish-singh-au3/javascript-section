function maxCharacterCount(array) {
  let characterCountObject = {};
  let maxChar = "";
  let maxCount = 0;

  str = str.toLowerCase(); //in case of str

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

console.log(maxCharacterCount("1337722222222222788888"));

console.log(maxCharacterCount("Iiiiiiii hateeeeE DdDssSSS"));
