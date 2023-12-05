/*
?   Parameters & Arguments

                (1)
    function hi (name) {
        console.log(`Hi, ${name}`)
                            (2)
    }

    (3)
    hi ("Bruce");
    hi ("Travis")

        1. The Parameter(s) that the function is accepting or holding.
        2. Using string interpolation, we can refer to the parameter that was given to the function.
        3. This is where we define what the parameter's value will be.
            - Known as an argument
*/

function order (item) {
    console.log(`I exchanged my ticket for a ${item}`)
}

order("Cheese Pizza");
order("Burger");
order("Milk Shake");

let myFavFood = "Pepperoni Pizza";

order(myFavFood);

/*
! Challenge
    - Write a function that takes two parameters
        - One parameter for a first name
        - The 2nd for a last name
    - Have them come together in a variable inside the function
    - console.log 'hello, my name is <your name>
    - call/invoke our function
*/

function hello (first, second) {
    let fullName = first + " " + second;
    console.log(`Hello, my name is ${fullName}.`)
}

hello ("Travis", "Marrocco")

let test = function test1() {
    console.log("hi");
}

test();

let x = 1;

function one(){
    let x = 2;
}

one();

console.log(x)

function calc(x, y, operator) {
    switch(operator){
        case "+":
            console.log("Add", x, y);
            return x + y;
        case "*":
            console.log("Multiply", x, y);
            return x * y;
    }
}

calc(2,2,"+")
calc(2,2,"*")

console.log(calc(2,2,"*"));

// !Never reassign or make variable called 'Console'

// A function inside of an object is called a method

//! ALWAYS USE CONSOLE.LOG TO HAVE STUFF SHOW UP IN CONSOLE. FOR FUNCTIONS, LOG THE FUNCTION NAME + PARAMETERS IN PARENTHESIS.














