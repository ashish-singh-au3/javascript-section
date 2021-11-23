function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[/W_]+/g, "");

  const str1FilteredVersion = str1.split("").sort().join("");
  const str2FilteredVersion = str2.split("").sort().join("");

  return str1FilteredVersion === str2FilteredVersion;
}

console.log(isAnagram("CaT!", "tac"));
console.log(isAnagram("edcba", "abcd"));
