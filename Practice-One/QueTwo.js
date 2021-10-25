//Palindrome algo => which is same when read backwards
// Madam => madaM

function palindromeAlgo(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
}

console.log(palindromeAlgo("Madam")); //true
