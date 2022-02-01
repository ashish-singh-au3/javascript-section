let name = {
  firstName: "Ashish",
  lastName: "Singh",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();

let name2 = {
  firstName: "Qwerty",
  lastName: "No",
};

//borrowing function from other objects using call
