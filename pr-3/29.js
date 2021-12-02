function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[/W_]+/g, "");

  const str1Sorted = str1.split("").sort().join("");
  const str2Sorted = str2.split("").sort().join("");

  return str1Sorted === str2Sorted;
}

console.log(isAnagram("Cat!!", "taC")); //t
console.log(isAnagram("Cat!!", "tmat")); //f
