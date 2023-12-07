/*
?   Promises
    * An object that may produce a singular value in the future

    ? Three States
        * Pending (unfinished)
        * Fulfilled (Completed with a value)
        * Rejected (error)
        
        * Promises allow other code to execute without having to wait for their completion
*/

function standard() {
    return "No promises here";
}

console.log(standard());

function getData () {
    setTimeout(() => {
        console.log("running after 3 seconds");
        return "Data";
    }, 3000);
}

let data = getData();
console.log(data); //! ERROR data is undefined for 3 seconds as it takes 3 seconds to return

function promiseFx(value){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value) {
                resolve("data in promise");
            } else {
                reject("Cannot complete request");
            } 
        }, 3000);
    });
};

//console.log(promiseFx());//! PENDING STATE

//? In order to get tangible data out of the Promise object, we MUST resolve it
//. then . catch syntax below

promiseFx(5)
.then((msg) => console.log(msg))
.catch((err)=>console.log("Hey you hit an error"));

/*
?   Asynchronous Functions
    * Introduced in ES7
    * Alternative way to write promises
    * A function that returns a promise object
    * Allows us to resolve or reject a promise

    ? Syntax
    
    async function myFx() {} //? Traditional Function
    const myFx = async function () {} //? Function Expression
    const myFx = () => {} //? Arrow Function
*/

async function asyncFx(){
    return "Hello Learners";
}

console.log(asyncFx());

//? How do we get values out of async functions

// 1. Use a resolver
asyncFx().then((val) => console.log(val));

// 2. Use await keyword
async function start() {
    const results = await asyncFx();
    console.log(val);
}

start();

let networkStatus = false;

function promiseEx(networkConnection) {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            if(networkConnection) {
                resolve("This is data, woot woot!!");
            } else {
                reject("Sad Day. Please check network connection.")
            };
        }, 5000);
    });
}

//? Async

async function handlePromiseAsync() {
    try {
        console.log(await promiseEx(networkStatus));
        console.log("Data received");
    } catch (err) {
        console.log(err);
    };
}

handlePromiseAsync();