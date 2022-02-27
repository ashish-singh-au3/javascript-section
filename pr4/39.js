//call basically helps in borrowing function and reuse it

let myname = {
  first: "Ashish",
  second: "Singh",
};

let personGetFullName = function () {
  console.log("Hi" + " " + this.first + " " + this.second);
};

console.log(personGetFullName.call(myname)); //this keyword will be pointed toward name obj

let anothername = {
  first: "Rish",
  second: "chauhan",
};

console.log(personGetFullName.call(anothername));
