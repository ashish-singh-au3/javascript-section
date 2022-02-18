//ice cream prp

let stocks = {
  fruits: ["Apple", "Banana", "Strawberry", "Litchi"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[Fruit_name]} was selected`);
  }, 2000);
  call_production();
};

let production = () => {
  setTimeout(() => {
    console.log("Order received, production has started");

    setTimeout(() => {
      console.log(`The fruit has been chopped`);

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} is added`);

        setTimeout(() => {
          console.log(`The machine has started`);

          setTimeout(() => {
            console.log(`${stocks.holder[1]} is selected as holder`);

            setTimeout(() => {
              console.log(
                `${stocks.toppings[0]} & ${stocks.toppings[1]} are selected as toppings`
              );

              setTimeout(() => {
                console.log(`Icecream is ready to be served `);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

console.log(order(0, production));
