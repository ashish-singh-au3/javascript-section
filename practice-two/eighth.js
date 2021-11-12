function anagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1Sorted = str1.split("").sort().join("");
  const str2Sorted = str2.split("").sort().join("");

  return str1Sorted === str2Sorted;
}

console.log(anagram("Rat!", "tar")); //t
console.log(anagram("hello", "NoHello")); //f
