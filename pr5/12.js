// const bigDesc = {
//   name: "david",
//   city: "NYC",
//   birth: 1950,

//   addres: {
//     temp: "this is temp add",
//     perm: "this is perm add",

//     more: {
//       city: "downtown",
//       country: "USA",
//     },
//   },
// };

const course = {
  name: "Introduction to JavaScript",
  isPaid: true,
  cost: {
    amount: 999,
    currency: "INR",
  },
};

const letsFlattenThis = (object) => {
  let res = {};

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object") {
      for (const [internalkey, internalvalue] of Object.entries(value)) {
        res[key + "." + internalkey] = internalvalue;
      }
    } else {
      res[key] = value;
    }
  }
  return res;
};

console.log(letsFlattenThis(course));

const some = {
  one: "first statement",
  two: "sec statement",
  three: "third statement",
};

const someTwo = {
  new: "this",
  another: "this is some2's another",
};

someTwo.__proto__ = some;

console.log(
  someTwo.one +
    " belongs to some obj & " +
    someTwo.new +
    " belongs to sometwo obj"
);
