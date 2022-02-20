let stocks = {
  fruits: ["Apple", "Banana", "Strawberry", "Litchi"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Event rejected"));
    }
  });
};

console.log(
  order(2000, () => console.log(`${stocks.fruits[2]} was selected`))
    .then(() => {
      return order(0000, () => console.log(`Order received, start prod`));
    })
    .then(() => {
      return order(2000, () => console.log(`${stocks.fruits[2]} was chopped`));
    })
    .then(() => {
      return order(3000, () =>
        console.log(`${stocks.liquid[0]} && ${stocks.liquid[1]} was added`)
      );
    })
    .then(() => {
      return order(1000, () => console.log(`machine has started`));
    })
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.holder[0]} was selected as holder`)
      );
    })
    .then(() => {
      return order(1000, () =>
        console.log(`${stocks.toppings[0]} was added as toppings`)
      );
    })
    .then(() => {
      return order(2000, () => console.log(`Icecream is ready to be served`));
    })
    .catch(() => {
      console.log("Promise rejected");
    })
);
