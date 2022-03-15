function palindrome(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
}

console.log(palindrome("MaDam"));
console.log(palindrome("Rat"));

function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 1) {
    return reversed * -1;
  }
  return reversed;
}

console.log(reverseInt(-1234));
