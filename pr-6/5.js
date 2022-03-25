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
