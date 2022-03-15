function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1New = str1.split("").sort().join("");
  const str2New = str2.split("").sort().join("");

  return str1New === str2New;
}

console.log(isAnagram("!hEllO", "Hello"));
console.log(isAnagram("!rat", "cat"));
