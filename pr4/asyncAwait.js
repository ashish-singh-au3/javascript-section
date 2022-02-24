//Skeleton

// async function test() {
//   try {
//     await notDeclaredFunction;
//   } catch (error) {
//     console.log("Error found");
//   } finally {
//     console.log("Finally will run whether try passes or fails");
//   }
// }

// console.log(test());

let isShopOpen = true;

let toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping would you like to choose?"));
    }, 3000);
  });
};

async function kitchenTasks() {
  console.log("Taking the orders from customers and passing it to kitchen");
  console.log("cleaning the tables");
  console.log("washing the dishes");
  await toppingsChoice();
  console.log(
    "Customer wanted chocolate as topping.Chef is back after asking the customer regarding topping"
  );
  console.log("Chef is prep the icecream");
}

console.log(kitchenTasks());
