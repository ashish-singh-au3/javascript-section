function reverseAnInteger(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  }
  return reversed;
}

console.log(reverseAnInteger("12345"));
console.log(reverseAnInteger("-5432"));
