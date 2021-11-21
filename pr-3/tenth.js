function isAnagramOrNot(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1SortedNow = str1.split("").sort().join("");
  const str2SortedNow = str2.split("").sort().join("");

  return str1SortedNow === str2SortedNow;
}

console.log(isAnagramOrNot("HelLO=", "LlOeh")); //t
console.log(isAnagramOrNot("rat", "cat")); //f
