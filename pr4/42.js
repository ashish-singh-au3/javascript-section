//Method 1

let object1 = {
  name: "Kyiv",
  country: "Ukraine",

  printNames: function (params) {
    console.log(this.name + " is capital of " + this.country);
  },
};

object1.printNames();

let object2 = {
  name: "Delhi",
  country: "India",
};

object1.printNames.call(object2);

//Method2

let object3 = {
  fruit: "Apple",
  taste: "sweet",
};

let printUsingDiffMethod = function (city) {
  console.log(
    this.fruit + " is " + this.taste + " in taste ." + "It is found in " + city
  );
};
printUsingDiffMethod.call(object3, "Kashmir");

let object4 = {
  fruit: "Orange",
  taste: "sour",
};

printUsingDiffMethod.call(object4, "Nagpur");

printUsingDiffMethod.apply(object4, ["J&K"]);

let printUsingCall = printUsingDiffMethod.bind(object4, "Kashmir");
printUsingCall();
