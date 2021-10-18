function reverseAnInteger(n) {
  let reversedInteger = n.toString().split("").reverse().join(""); //converting int into string
  reversedInteger = parseInt(reversedInteger); //parsing the val

  if (n < 0) {
    return reversedInteger * -1; //if num is negative then it will give negative res
  }
  return reversedInteger;
}

console.log(reverseAnInteger(1234));

console.log(reverseAnInteger(-1234));
