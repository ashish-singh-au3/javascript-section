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

const flatten = (obj) => {
  let result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      for (const [internalKey, internalVal] of Object.entries(value)) {
        result[key + "." + internalKey] = internalVal;
      }
    } else {
      result[key] = value;
    }
  }
  return result;
};

console.log(flatten(course));
