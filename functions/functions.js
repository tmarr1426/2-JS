/*
?   Functions
    * Reusable blocks of code that performs a particular task
    * Can return data to kick it back outside of the function
    * Simplified program that runs a task when invoked/called
*/

/*
?   Function Declarations

    (1)     (2)
    function hi() {
        console.log("hi")
    }

    1. Keyword
    2. Name of the function
*/

function hi() {
    console.log("hi")
}

hi();

/*
?   Function Expressions

    (1)
    let hey = function hi(){
        console.log("hi")
    }

    1. The variable "hey" is now a representative of the function hi()
*/

function greetings (){
    console.log("Hello")
}

greetings();

// Create a function that, when invoked, lists out the numbers 1-20, name our function "counting".

function counting(){
    for(let i = 1; i <= 20; i++) {
        console.log(i)
    }
}

counting();

// Given an array, create a function that lists out the values individually, name the function arrList

let arr = ["This", "is", "really", "cool", true, 1, false];

function arrList (){
    for(let item of arr){ // for of loop best use practice for arrays
        console.log(item)
    }
}

arrList();

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba Inu",
    "Golden Retriever",
];

function callDogs (){
    for(let dogIndex in dogArray) {
        console.log(dogArray[dogIndex]);
    }
}

callDogs();

let num1 = 1;
let num2 = 2;

function addTwoNum () {
    let sum = num1 + num2;
    console.log(sum);
}

addTwoNum();

/*
?   Return Keyword
    * Allows the function to stop its execution and output a value
    * Useful for handling logic/computation/calculation and providing a single result
*/

let iHaveCoffee = true;

function returnToMeTheResultOfHavingCoffee () {
    if (iHaveCoffee) {
        return "Travis has had his coffee and is awake";
    } else {
        return "Sorry, no coffee available.";
    }
}

returnToMeTheResultOfHavingCoffee(); // == true

console.log(returnToMeTheResultOfHavingCoffee());

let resultOfCoffeeStatus = returnToMeTheResultOfHavingCoffee();
// the function call being assigned here is hanging onto the returned value that we see above

console.log(resultOfCoffeeStatus)

function divisible (dividend, divisor) {
    if (dividend % divisor === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  divisible (2, 2);
  
  console.log (divisible (2, 2));

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
  capitalize("tomato");
  console.log(capitalize("tomato"));