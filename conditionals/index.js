/*
?   Conditionals and Logic Gates
    * conditional statements check if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, a code within the statement executes
    * if it's falsey, nothing happens unless we specify otherwise

?   Expressions vs Statements
    * Expressions
        - Unprocessed value, typically grouped using ()
        - Evaluated to be truthy
        - Can also be empty
    ? Expressions evaluate
    * Statements
        - keyword
        - expression
        - {} - block of code
    ? Statements evaluate and execute code blocks when invoked
        ! Conditional is an example of a statement
*/

/*
?   If Statement
    * Checks if something is true and executes the code if so
*/

if (true) console.log("This will print");

let lightSwitch = "on";

console.log("The value of the light switch variable is:", Boolean(lightSwitch));
if (lightSwitch) console.log("The light switch is on.")
if (lightSwitch == "on") console.log("The light switch is on.")


/*
?   Else
    * do the opposite of what our initial expression is checking.
*/

let lightSwitch = "on";
if (lightSwitch == "on") {
    console.log("The light switch is on.")
} else {
    console.log("something went wrong or the switch is off?")
}

/*
?   Else If
    * allow us to add additional condition(s) if the one prior has not been satisfied
*/

let temp = 52;

if (temp >80) {
    console.log("It is very hot outside.")
} else if (temp > 70) {
console.log("It is warm outside.")
} else if (temp > 50) {
    console.log("It is decent outside.")
} else {
    console.log("Something went wrong.")
}

/*
    if(conditionIsTrue) {
        executes this code if the above condition has been met
    } else if (conditionIsTrue) {
        executes this code if the above condition has been met
    } else {
        if all else fails, run this code block
    }
*/

/*
?   Logical Operators NOT AND OR
    * OR Operator (||)
        - true if one of the conditions is true
            -ex: I'll be happy if I go to the movies or eat dinner
            (dinner or movies = true)
            (no dinner but yes movies = true)
            (yes dinner or no movies = true)
            (no dinner or no movies = false)
    * AND Operator (&&)
        - true if one of the conditions is true
            -ex: I'll be happy if I go to the movies and eat dinner
            (dinner & movies = true)
            (no dinner but yes movies = false)
            (yes dinner or no movies = false)
            (no dinner or no movies = false)
    * NOT Operators (! or in an expression with !=)
        - Flip the logical expression
*/

lightSwitch = 0;
if (!lightSwitch) {
    console.log("the light switch is off")
} 

lightSwitch = "off";
if (lightSwitch != "on") {
    console.log("the switch is off")
}

let sensor = "inactive";
let alarm = true;

if(sensor == "active" || alarm ) {
    console.log("The alarm may be on")
}

let sensor = "inactive";
let alarm = false;

if(sensor == "active" || alarm ) {
    console.log("The alarm may be on")
}

let sensor = "inactive";
let alarm = true;

if(sensor == "active" || alarm ) {
    console.log("The alarm may be on")
} else if (sensor == "inactive" && alarm) {
    console.log("Your sensor may be broken")
}



let myAge = 19;
if(myAge < 16){
    console.log("You cannot drive.")
} else if (myAge < 18) {
    console.log("You can drive but not drink")
} else if (myAge < 21) {
    console.log("You can Vote.")
} else if (myAge >= 21) {
    console.log("You can drink.")
}

/*
? Ternaries
    * an expression
    * quick way to write out if/else conditionals
    * commonly used to check a quick condition

? Syntax

condition ? expr if true : expr if false

? Chaining Syntax

conditional ? expr if true 
            : else if expr expr ? expr if true
*/

let ignition = true;

ignition ? console.log('ignition is on') : console.log('ignition is off')

let season = 3;

season == 1 ? console.log("Spring") 
: season == 2 ? console.log("Summer")
: season == 3 ? console.log("Autumn")
: season == 4 ? console.log("Winter")
: null;

let myAge = 15;

myAge < 16 ? console.log("you cannot drive")
: myAge < 18 ? console.log("you can drive but not drink")
: myAge < 21 ? console.log("you can vote")
: myAge >= 21 ? console.log("You can drink")
: null;

/*
?   Switch Statements
    * executes a block of code dependent upon a different case
*/

let x=5

switch (true){
    case x > 2:
        console.log("x is greater than 2");
    break; // prevents fallthrough
    case x > 3:
        console.log("x is greater than 3");
}

let month = new Date().getMonth();
console.log(month); // gives us 10, which is november (Starts at 0 = january)


let month = new Date().getMonth() + 1;
console.log(month);


let month = new Date().getMonth();

switch (month){
    case 1:
        console.log("Jan")
    case 2:
        console.log("FEB")
    case 3:
        console.log("MAR")
    case 4:
        console.log("APRIL")
    case 5:
        console.log("MAY")
    case 6:
        console.log("JUNE")
    case 7:
        console.log("July")
    case 8:
        console.log("Aug")
    case 9:
        console.log("SEPT")
    case 10:
        console.log("OCT")
    case 11:
        console.log("NOV")
    case 12:
        console.log("DEC")
}