const something = {
  name: "Ashish",
  last: "singh",
  address: {
    floor: 4,
    flat: "D-6",
    city: "Bangalore",
  },
  state: "Karnataka",
};

const flat = (object) => {
  let result = {};

  for (const [key, value] of Object.entries(object)) {
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

console.log(flat(something));
