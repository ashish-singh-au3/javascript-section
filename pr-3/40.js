function isAnagramOrNot(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1SortedVersion = str1.split("").sort().join("");
  const str2SortedVersion = str2.split("").sort().join("");

  return str1SortedVersion === str2SortedVersion;
}

console.log(isAnagramOrNot("!Hello!", "llehO")); //t
