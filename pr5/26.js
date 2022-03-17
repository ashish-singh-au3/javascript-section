const course = {
  name: "Introduction to JavaScript",
  isPaid: true,
  cost: {
    amount: 999,
    currency: "INR",
    further: {
      two: 100,
      three: "three",
    },
  },
};

const flat = (obj) => {
  let result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      for (const [internalKey, internalVal] of Object.entries(value)) {
        if (typeof internalVal === "object") {
          for (const [intKeyTwo, intValTwo] of Object.entries(internalVal)) {
            result[key + "." + internalKey + "." + intKeyTwo] = intValTwo;
          }
        } else {
          result[key + "." + internalKey] = internalVal;
        }
      }
    } else {
      result[key] = value;
    }
  }
  return result;
};

console.log(flat(course));
