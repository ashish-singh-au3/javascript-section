//Ice cream factory example

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolates", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log(`Production has started`);

    setTimeout(() => {
      console.log(`The fruit has been chopped`);

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("The machine has started");

          setTimeout(() => {
            console.log(`${stocks.holder[0]} was selected`);

            setTimeout(() => {
              console.log(`${stocks.toppings[1]} are selected as toppings`);

              setTimeout(() => {
                console.log("The icecream is ready to be served");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

console.log(order(0, production));
