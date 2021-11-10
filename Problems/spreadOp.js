let numberCollection = [1, 2, 3];
let numberToBeAdded = 12;
let newNumberCollection = [...numberCollection, numberToBeAdded]; //push the value

console.log(newNumberCollection);

//In react redux
//increases robustness
/* let state = {
    name : "abcd",
    age : {
        gender : "M"
    }
}

let newState = {...state , {...state.age} } */
