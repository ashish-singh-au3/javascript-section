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
