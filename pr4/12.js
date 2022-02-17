//flatten the arr

let arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9, [10, 11], 12],
];

//const flattened = [].concat(...arr);

const flattened = arr.flat(2);

console.log(flattened);
