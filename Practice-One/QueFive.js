//MAX characters
// "I hateeeeeeee DS"  => e
// "122256" => 2

function maxChar(str) {
  let charCountObject = {};
  let maxCharacter = "";
  let maxCount = 0; //starting from 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCountObject[char] = charCountObject[char] + 1 || 1;

    if (charCountObject[char] > maxCount) {
      maxCharacter = char;
      maxCount = charCountObject[char];
    }
  }
  return maxCharacter;
}

console.log(maxChar("I hateeeeee DDDDDDDDDDDSSS"));
console.log(maxChar("1337"));
