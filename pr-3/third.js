function reverseAnInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  }
  return reversed;
}

console.log(reverseAnInt("-1234"));
console.log(reverseAnInt("7894"));
