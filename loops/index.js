/*
? Loops

? For
    * Takes in 3 parameters
        * initial expression
        * condition
        * increment expression
        
    Structure:

        for (initial expression; condition; increment expression;) {
            * code to execute if loop condition is satisfied
        }
*/

//?      1     2     4
for(let i=0; i<=10; i++){
    console.log(i); //? 3
}

/*
?   1. Reserving a new variable named (i) to store an inital value
?   2. If this condition is met(true), run the following code execution in {}
?   3. Code Executes
?   4. Increase our variable ocunt by 1

        Repeat steps 2-4
*/

for(let i =0; i<=20; i+=2;) {
    console.log(i);
}


for(let i =10; i>=0; i--) {
    console.log(i);
    if(i ==5) {
        console.log(i)
        // break will allow us to exit the loop
        break;
    }
}

for(let i=10; i>=0; i--)console.log(i);



// Display each character of a string

let firstName = "Timmy";

for(let index = 0; index < firstName.length; index++) {
    console.log(firstName[index])
}


// Add collected sum of numbers
let sum = 0;

for(let i = 1; i<=50; i++) {
    sum+=i;
    console.log(sum)
}

for(let i = 1; i <=20; i++) {
    if (i % 2 === 0){
        console.log(i)
    }
}

let folders = ["Documents", "Desktop", "Pictures", "Downloads"];

for(let arrayIndex = 0; arrayIndex < folders.length; arrayIndex++){
    console.log(folders[arrayIndex]);
}

// Objects
let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    // week: 1
};

//? For In
//      - Great to use on Objects

console.log(student["awesome"]); //The quotes in the [] checks for any key in the object that matches. Otherwise it is checking for a new object/index outside of our original object.

for (let item in student){
    //console.log(item); Displays the items in the student object (name, awesome, degree)
    //console.log(student[item]); Displays all values of items in an object. (Peter, true, Javascript)
    console.log("Key: ", item, "Value: ", student[item]);

}

let catArray = [
    "tabby",
    "British Shorthair",
    "Burmese",
    "Maine Coon",
    "Rag Doll",
];

for (let cat in catArray) {
    console.log(catArray[cat])
}


//? For Of
//  - Great to use on Arrays
for (let cat of catArray) {
    //console.log(cat);
    if(cat === "tabby") {
        console.log("This cat is a tabby");
    } else {
        console.log("This cat is not a tabby")
    }
}


