function factorialOfANum(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    // if num is 3 it will multiply with 1 , then again it will go inside the loop and substract 1
    //and then multiply with the total
    total *= i;
  }
  return total;
}

console.log(factorialOfANum(3));
console.log(factorialOfANum(5));

//Using Recursion

function factorialOfANumRecursiveWay(num) {
  if (num === 1) return 1; //this is done to make a breakpoint else next statement will keep on multiplying in negative values
  return num * factorialOfANumRecursiveWay(num - 1);
}

console.log(factorialOfANumRecursiveWay(2));
console.log(factorialOfANumRecursiveWay(5));
