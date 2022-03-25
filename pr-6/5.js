const course = {
  name: "Ash",
  lastName: "Singh",
  address: {
    floor: 4,
    flat: "D-6",
    city: "Bangalore",
  },
  state: "Karnataka",
};

const flatten = (object) => {
  let res = {};

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object") {
      for (const [internalKey, internalVal] of Object.entries(value)) {
        res[key + "." + internalKey] = internalVal;
      }
    } else {
      res[key] = value;
    }
  }
  return res;
};

console.log(flatten(course));

let obj1 = {
  first: "This is first statement",
  second: "second",
};

let obj2 = {
  third: "Hey,",
  fourth: "Hola",
  fifth: 10,
};

obj2.__proto__ = obj1;

console.log(obj2.third + " " + obj2.first + " " + obj2.fifth);
