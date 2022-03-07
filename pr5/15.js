const course = {
  name: "Introduction to JavaScript",
  isPaid: true,
  cost: {
    amount: 999,
    currency: "INR",
  },
};

const flattenObj = (obj) => {
  let res = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      for (const [internalKey, internalValue] of Object.entries(value)) {
        res[key + "." + internalKey] = internalValue;
      }
    } else {
      res[key] = value;
    }
  }
  return res;
};

console.log(flattenObj(course));
