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
      reject(console.log("Promise rejected"));
    }
  });
};

console.log(
  order(2000, () => console.log(`${stocks.fruits[2]} was selected as fruit`))
    .then(() => {
      return order(1000, () => console.log(`Fruit is selected, start prod`));
    })
    .then(() => {
      return order(2000, () => console.log(`Chop the fruit`));
    })
    .then(() => {
      return order(3000, () => console.log(`${stocks.liquid} was added`));
    })
    .then(() => {
      return order(1000, () => console.log(`start the machine`));
    })
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.holder[1]} was selected as holder`)
      );
    })
    .then(() => {
      return order(1000, () => console.log(`${stocks.toppings[0]} was added`));
    })
    .then(() => {
      return order(3000, () => console.log(`Ice cream is ready to be served`));
    })

    .catch(() => {
      console.log("Error");
    })
);
