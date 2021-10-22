//replace()

// "I like dogs.replace("dogs","cat") => "I like cat"

function isAnagram(str1, str2) {
  //Cleaning the strings for ex if input is ("Heart!","Earth")
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  //first thing to check is if input string length doesn't match then return false immediately
  if (str1.length !== str2.length) {
    return false;
  }

  const str1CharacterCountObject = {};

  for (let i = 0; i < str1.length; i++) {
    const aChar = str1[i];
    str1CharacterCountObject[aChar] = str1CharacterCountObject[aChar] + 1 || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const bChar = str2[i];

    if (!str1CharacterCountObject[bChar]) {
      return false;
    } else {
      str1CharacterCountObject[bChar]--;
    }
  }
  return true;
}

console.log(isAnagram("!EarTh", "earth"));
console.log(isAnagram("HeLLoo", "olleh"));
