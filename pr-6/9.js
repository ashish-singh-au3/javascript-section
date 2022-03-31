const stock = {
  liquid: ["water", "milk"],
  spices: ["tea leaves", "cinnamon", "masala", "sugar"],
  holder: ["kulhad", "cup"],
};

let shopOpen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Promise rejected");
    }
  });
};

console.log(
  order(2000, () => {
    console.log(`Order placed by customer`);
  })
    .then(() => {
      return order(2000, () =>
        console.log(`${stock.liquid[0]} was added in the container`)
      );
    })
    .then(() => {
      return order(3000, () =>
        console.log(
          `${stock.spices[0]} , ${stock.spices[2]} , ${stock.spices[3]} was added`
        )
      );
    })
    .then(() => {
      return order(4000, () =>
        console.log(
          `${stock.liquid[1]} was added , Let it get boiled for 4 sec`
        )
      );
    })
    .then(() => {
      return order(2000, () =>
        console.log(
          `chai is ready to be served. ${stock.holder[1]} was selected.`
        )
      );
    })
    .then(() => {
      return order(1000, () => console.log("chai is served"));
    })
    .catch(() => {
      console.log("Shop is closed");
    })
);
