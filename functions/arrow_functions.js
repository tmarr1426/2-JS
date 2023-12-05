/*
?   Arrow Functions

    (1)         (2)
    let hi = () => {
        console.log("hi")
    }

    1. We need to set the fat arrow function variable.
    2. We use the 'fat arrow' to signify its a function

    * Arrow funcs or (fat arrow functions) were introduced in ES6.
    * Basically a more concise way to write out function expressions. NOT declarations.
        *  DOES NOT GET HOISTED
*/

// ? Concise Body

let hi = () => {
    console.log("something")
};

hi();

let hi2 = () => console.log("something2");

hi2();

let hello = () => {
    let greeting = "hello";
    let moreInfo = "steve";
    return `${greeting}, ${moreInfo}`;
}

console.log(hello());

// ? Implicit Return

let apples1 = (x) => `There are ${x} apples`;

apples1(12);

console.log(apples1(12));

//? Explicit Return

let apples2 = (y) => {
    // additional code here...
    return `There are ${y} apples.`;
}

console.log(apples2(5));

let myFName = (fName) => console.log(fName);

myFName("Travis");

const tipCalc = (subTotal) => {
    let tip = subTotal * 0.2;
    let total = subTotal + tip;
    return total.toFixed()
};

tipCalc(10);

console.log(tipCalc(10));


