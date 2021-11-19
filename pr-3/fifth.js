function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[W_]+/g, "");

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("QwErtY!", "rtyewQ")); //t
console.log(isAnagram("Nohello", "hello")); //f
