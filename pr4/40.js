let fullName = {
  firstName: "Rishabh",
  secondName: "Singh",
};

let printFullName = function (hometown, state) {
  console.log(
    "Hi my first name is " +
      this.firstName +
      " and my last name is " +
      this.secondName +
      " . I am from " +
      hometown +
      "," +
      state
  );
};

console.log(printFullName.call(fullName, "Kanpur", "UP"));

let myOtherNames = {
  firstName: "Rishi",
  secondName: "Chauhan",
};

console.log(printFullName.apply(myOtherNames, ["Chandigarh", "Punjab"]));

let printDifferentNamesUsingBind = printFullName.bind(
  fullName,
  " Kanpur",
  "Up"
);

printDifferentNamesUsingBind();
