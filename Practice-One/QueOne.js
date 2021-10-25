// hello => olleh

function stringReversal(str) {
  const result = str.split("").reverse().join("");
  return result;
}

console.log(stringReversal("qwerty"));

//without reverse

function stringReversalTwo(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }
  return res;
}
console.log(stringReversalTwo("hello"));
