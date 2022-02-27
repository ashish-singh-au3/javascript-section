//call basically helps in borrowing function and reuse it

let myname = {
  first: "Ashish",
  second: "Singh",
};

let personGetFullName = function (hometown, state) {
  console.log(
    "Hi" +
      " " +
      this.first +
      " " +
      this.second +
      " from" +
      " " +
      hometown +
      " whose state is " +
      state
  );
};

console.log(personGetFullName.call(myname, " Kanpur", "UP")); //this keyword will be pointed toward name obj

let anothername = {
  first: "Rish",
  second: "chauhan",
};

console.log(personGetFullName.apply(anothername, ["Indore", "MP"]));

let printMyName = personGetFullName.bind(myname, "Kanpur", "UP");
console.log(printMyName());
