/*
? Variables
    - containers that store data in memory
    * declaration
        - allows memory space to be reservced by using an identifier
        - starts with the keywords of (let, var, or const)
        - cannot start with a number, other than characters (_ $)
        - if no value is assigned, it will be 'undefined' by default
    * initialization
            - assignment of a data value
            - can be any value or data type (str, int, arr, fx, class, etc.)
            - can be reassigned (Except for the const)
*/

// Variable declaration

let myVar;

console.log(myVar);
// Variable initialization
let myFirstName = "Travis";
let myLastName = "Marrocco";

console.log("The value of the first name is: ", myFirstName)

let fName = "Travis ";
let lName = "Marrocco ";
let houseNum = 9618 ;
let street = "W 124th St ";
let city = "Overland Park ";
let state = "KS ";
let postCode = 66213;

console.log(fName + lName + houseNum + street + city + state + postCode)
