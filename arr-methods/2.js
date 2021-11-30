let myFish = ["angel", "clown", "drum", "sturgeon"];
let removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

console.log(myFish);
console.log(removed);
