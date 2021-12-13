function strReversal(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result = char + result;
  }
  return result;
}

console.log(strReversal("QwerTy"));
