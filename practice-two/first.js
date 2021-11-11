function strReversal(str) {
  return str.split("").reverse().join("");
}

console.log(strReversal("heLlo"));

//sol 2

function strReversalTwo(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result = char + result;
  }
  return result;
}

console.log(strReversalTwo("second solution"));
