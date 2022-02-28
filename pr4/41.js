let diffNames = {
  first: "Ram",
  second: "singh",
};

let printNames = function (city, state) {
  console.log(
    "Hi, my name is " +
      this.first +
      " " +
      this.second +
      ". I am from " +
      city +
      " " +
      state
  );
};

printNames.call(diffNames, "Kanpur", "UP");

let diffNamesTwo = {
  first: "Shyam",
  second: "kumar",
};

printNames.call(diffNamesTwo, "Chandigarh", "Punjab");

printNames.apply(diffNamesTwo, ["Chennai", "TN"]);

let printUsingBind = printNames.bind(diffNames, "Kanpur", "UP");
printUsingBind();
