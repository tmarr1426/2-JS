/*
?   Input/Output & Callbacks
    * Process
        * An event that runs in the background of foreground of your machine
    * NodeJS allows access to its processes via a process object
    * This allows us to process external input and internal input (I/O)
    * We do this by using process.stdin and process.stdout
*/

// Import Statement

const process = require("process");//Imports a library from available NodeJS libraries
//console.log(`This is an output. From Node process PID ${process.pid}`);

/*
?   Callback Function
    * fx that is passed as an argument to another fx or method
    * Is a fx that runs when something occurs
        - Anonymous Functions
            ex) function (parameter) {} OR (parameter) => {}
                * Typically used in callbacks
                * Short lived
                * Non-reusable
*/

//console.log("Please enter some input")

//? Anonymous arrow function
//process.stdin.once("data", (input) => {
//    console.log(input.toString());
//});
//? Anonymouse traditional function
//process.stdin.once("data", function (input){
//    console.log(input.toString());
//});

//const myFunction = (question, callback) => {
//    console.log("Question", question);

//    process.stdin.once("data", (input) => {
//        callback(input.toString().trim()); // .trim removes excess white space
//    })
//};

//myFunction("What is your name?",(word) => {
//    console.log(word);
//    process.exit();
//});

//? Passing function by reference

//function handleInput(input) {
//    console.log(input.toString());
//};

//process.stdin.once("data", handleInput)//targeting function by name

/*
      (1)     (2) (3)  (4)     (5)
    process.stdin.on("data", (input) => console.log(input.toString)))
    ! if you have only 1 parameter, you can ignore parenthesis IE: input => {}

        1: Node's process interface
        2: In data stream
        3: Event listener method
        4: Event that we are listening for
        5: Callback function which runs when event occurs
*/

//process.stdout.write("What is your username \n");
//process.stdin.on("data", (input) => {
//    let value = input.toString().trim();
//    console.log(value);
//    value === "tmarr1426" ? process.stdout.write("Username Recognized") : process.stdout.write("Username not recognize");
//    process.exit();
//});

//? Readline
const readline = require ("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question("What is your favorite color? \n", (input) => {
//     rl.setPrompt(`Your favorite color is: ${input}`);
//     rl.prompt();
//     rl.close();
// });

// function ask (questionText){
//     return new Promise ((resolve, reject) => {
//         rl.question(questionText + "\n", (input) => {
//             resolve(input);
//         });
//     });
// }

// const start = async () => {
//      .get data
//     let response = await ask("what is your favorite car?");
//     console.log("Our data", response);
//      continue task
// };

// start();

// function ask (questionText){
//     return new Promise ((resolve, reject) => {
//         if (questionText) {
//             rl.question(questionText + "\n", (input) => 
//                 resolve(input));
//             } else {
//                 reject ("Provide a question please.");
//                 rl.close();
//             }
//         });
// }

// const start = async (question) => {
//     try {
//         // .get data
//         let response = await ask(question);
//         response = response.toString().toLowerCase();

//         if (response.length === 0) {
//             console.log("Please provide an answer!");
//             await start();
//         }

//         if(response === "y") {
//             console.log("YAY!")
//         } else {
//             console.log("Aw shucks!")
//         }
//         // continue task
//     } catch(err){
//         console.log("Hey you hit an error", err);
//     }
// };

// start("Do you like pie? (Y/N)");

async function ask (question){
    return new Promise((resolve, reject) => {
        rl.question(question + "\n", (userInput) => {
            resolve(userInput);
        });
    });
}

// Using async to allow waiting for our value to be present.

async function start() {
    const firstQAnswer = await ask("What is your name?");
    console.log("Answer to first question is:", firstQAnswer);

    const secondQAnswer = await ask("What is your age?");
    console.log("Answer to second question is:", secondQAnswer);

    rl.close();
}

start();