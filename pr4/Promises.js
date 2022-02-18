let stocks = {
  fruits: ["Apple", "Banana", "Strawberry", "Litchi"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Msg: Shop is closed"));
    }
  });
};

console.log(
  order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
    .then(() => {
      return order(0000, () => console.log(`Production has started`));
    })
    .then(() => {
      return order(2000, () => console.log(`The fruit was chopped`));
    })
    .then(() => {
      return order(1000, () =>
        console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was added`)
      );
    })
    .then(() => {
      return order(1000, () => console.log(`The machine has started`));
    })
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.holder[2]} was selected as container`)
      );
    })
    .then(() => {
      return order(3000, () =>
        console.log(
          `${stocks.toppings[0]} && ${stocks.toppings[1]} were selected as toppings`
        )
      );
    })
    .then(() => {
      return order(2000, () => console.log(`Icecream is ready to be served`));
    })
);
