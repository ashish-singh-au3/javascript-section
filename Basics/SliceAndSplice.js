//Slice

var animals = ["ant", "lion", "zebra", "tiger", "antelope"];

console.log(animals.slice(2)); //removed two values

console.log(animals.slice(2, 4));

//Splice

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
