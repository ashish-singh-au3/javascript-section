let object1 = { name: "ash", last: "singh" };
let object2 = { name: "ash", last: "singh" };

console.log(object1 === object2); //false because it is not comparing the key and values inside the onject
//It is jut comparing the names of objects hence ret false

console.log(object1.name === object2.name); //t
