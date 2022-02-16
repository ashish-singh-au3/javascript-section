//Flatten the array
//flattening basically means
//this =>  let arr = [
//    [1,2],
//    [3,4],
//    [5,6],
//    [7,8,9,[10,11],12]
//   ]   => [1,2,3,4,5,6,7,8,9[10,11],12] //if level or depth is 1 and if it is 2 then 10 & 11 will
//also get flattened

let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, 9, [10, 11], 12],
];

//method 1
let flattenedArray = [].concat(...arr);
console.log(flattenedArray); //level or depth 1 falttening => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11 ], 12 ]

//method 2

console.log(arr.flat(2)); //Pre defined js method: level 2 flattening [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
