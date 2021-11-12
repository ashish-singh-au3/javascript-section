function chunkALgorithm(array, size) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([item]);
    } else {
      last.push(item);
    }
  }
  return res;
}

console.log(chunkALgorithm(["a", "b", "c", "d", "e"], 2));
