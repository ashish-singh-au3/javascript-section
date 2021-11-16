function isPalindrome(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("mAdAm")); //t
console.log(isPalindrome("hello")); //f
