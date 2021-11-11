function isPalindrome(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse("").join("");
}

console.log(isPalindrome("MadaM")); //t
console.log(isPalindrome("test")); //f
