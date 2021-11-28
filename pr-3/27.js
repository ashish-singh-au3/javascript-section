function reverseAnInteger(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 1) {
    return reversed * -1;
  } else {
    return reversed;
  }
}

console.log(reverseAnInteger("-23456"));
