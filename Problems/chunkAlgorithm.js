function chunkAlgorithm(array, size) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const lastItem = result[result.length - 1];

    if (!lastItem || lastItem.length === size) {
      result.push([item]);
    } else {
      lastItem.push(item);
    }
  }
  return result;
}

console.log(chunkAlgorithm(["a", "b", "c", "d"], 2)); //size is 2 hence the output will be [[a,b] , [c,d]]
console.log(chunkAlgorithm(["a", "b", "c", " d", "e", "f", 1, 3, 2, 5], 4));
