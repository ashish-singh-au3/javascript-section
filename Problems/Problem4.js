/* ANAGRAMS
Given two strings, write a function to determine if the second string
 is an anagram of the first. An anagram is a word, phrase, or name formed
  by rearranging the letters of another, such as cinema, formed from iceman.
 */

/* validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true */

function isValidAnagram(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  }

  const object = {};

  for (let i = 0; i < firstString.length; i++) {
    let letter = firstString[i];
    //if letter exists then increment by 1 else set the value to 1
    object[letter] ? (object[letter] += 1) : (object[letter] = 1);
  }
  // console.log(object);

  for (let i = 0; i < secondString.length; i++) {
    let letter = secondString[i];

    //can't find letter or letter is 0 then it is not ananagram
    if (!object[letter]) {
      return false;
    } else {
      object[letter] -= 1;
    }
  }
  return true;
}

console.log(isValidAnagram("rat", "car"));
console.log(isValidAnagram("anagram", "nagrama"));

console.log(isValidAnagram("ytrewq", "qwerty"));
