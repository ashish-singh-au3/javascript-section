let names = {
  firstName: "Ashish",
  lastName: "Singh",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

names.printFullName();

let name2 = {
  firstName: "Qwerty",
  lastName: "No",
};

//borrowing function from other objects using call

names.printFullName.call(name2);

//adding parameters

let names3 = {
  firstName: "Ashish",
  lastName: "Singh",
};
let printFullName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown);
};

printFullName.call(names3, "Delhi");

let name4 = {
  firstName: "Qwerty",
  lastName: "No",
};

printFullName.call(name4, "Kashmir");
