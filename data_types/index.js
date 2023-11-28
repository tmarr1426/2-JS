console.log("hello world")


/*
?    -  Javascript
    - found in 1996 by Brandon Eich
    - client sided language (runs in the browser)
    - interpreted language (not compiled)
    - functional language
    - object oriented (OOP)
    - prototype based
    - weakly typed (dynamic)
    - multi paradigm language
    - ECMA script -- organization for setting the language standards
*/


/*
?    - Console Object
        - gives us access to the browser or node's debugging console
        - allows the developer to view the output from their program
*/
//! 2+2 does not show us the output
console.log(2 + 2); // Shows the output of 4

/*

JS Data Types:
    Primitives
        *string
        *numbers
        *boolean
        *null
        *undefined
        *NaN (Not a Number)
    Reference
        *arrays
        *objects
        *maps
        *sets
*/

/*
?   Strings
        - primitive data type representing characters
        - enclosed in ' ', " ", or ` `

    Examples:
*/

console.log("This is a test");
console.log('This is a test');
console.log(`This is a test`);

// Striung representation of number
console.log("2023")

// We can concatenate different strings (adding them together)
console.log("Hello, I'm Traivs " + "and I like Tacos.");

// Strings are also indexed starting from (0)
console.log("dsadsadsaodbnoiabni" [4]);


// String interpolation (``)
    // - process of including space for an expression
    // Syntax:
        // -`string ${5+5}`

        let myFav = 10;
console.log(`My fav number is: ${myFav}`);

/*
? String
    - .length
    - .slice()
    - .toUpperCase ()
    - .toLowerCase ()
*/

console.log("some string".length);

// Multi Line Strings

console.log("Hello \n this \n is \n multi \n lined ");
console.log(typeof "blah blah blah");
console.log(typeof "9");

/*
? Booleans
    - binary value
    - either true (on) or false (off)
    - Examples of falsey values:
        * 0
        * undefined
        * null
        * NaN
        * ""
*/


console.log(2 == 2);
console.log(2 == 5);

// Boolean() interface that can return true or false, or if a value is truthy or falsey
console.log(Boolean(1));


/*
?   Type Coercion
    - JS is a weakly typed programming language
    - doesn't require any data type definitions
    - comparison operator (==) performs type coercion before resolving the expression
        - will check the data vaules, but NOT their types
    - strictly equals (===) used to avoid type coercion
        - will check the data values and types
*/

console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 === "2"); // false

/*
? Not a Number (NaN)
    - triggered when performing operations with numbers and non numbers
    - used when making mathematical computations that don't make sense
*/

console.log(undefined + 5); // NaN

console.log(Math.sqrt(-1)); // NaN

/*
? Operators
    - addition (+)
    - subtraction (-)
    - multiplication (*)
    - division (/)
    - exponent (**)
    - dot (.)
    - modulo (%)
    - assignemnt (=)
    - comparison (==)
    - strict comparison (===)
    - is not equal (!=) or is strictly not equal (!==)
*/

// Dot or Member Access Operator

console.log("Amit Mangat".toUpperCase);

// Modulo Operator

console.log(10 / 2); //5
console.log(10 % 2 === 0); //true (It's divisible with no remainder)
console.log(10 % 3 === 0); //false (It's not divisible with no remainder)

// Assignment

let myName = "Travis"

console.log(myName);
console.log(myName == "Travis");

let myVal = 10;

console.log(myVal === "10");

// Real life example
if (!myName) {
    console.log("Name doesn't exist");
} else {
    console.log("Hello ", myName);
}

// ? Arrays
let empty = new Array(); // This is an older way of doing Array
let arrayOfStuff = ["item1", "item2", "", true, 10];// Newer way

//? Objects

let userProfile = new Object();
userProfile.name = "Travis";
userProfile.favColor = "Green";

console.log(userProfile);