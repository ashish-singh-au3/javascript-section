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

//Pr

let data = {
  firstData: "random",
  secondData: "last",
};

let getData = function (extraData) {
  console.log(this.firstData + " " + this.secondData + " " + extraData);
};

getData.call(data, "& this is extra data"); //calling

let data2 = {
  firstData: "random data2",
  secondData: "last data2",
};

getData.call(data2, "& this is from data2");
