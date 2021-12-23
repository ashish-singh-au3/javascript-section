function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIndex]) {
        swapIndex = j;
      }
    }
    swap(arr, i, swapIndex);
  }
  return arr;
}

console.log(selectionSort(7, 5, 8, 6, 2, 3, 1, 9));
