/*
?   While loop structure

    while (expression) {
        ...code to run if expression is true
    }

    - The main purpose for while loops are when iteration is uncertain
    - EX: If we wanted to guess a spade from a randomized amount of cards, we can use a while loop to continuously go through until the condition is met.
*/

let numArr = [1, 5, 35, -23, 0, 3, 10, 4.34];
let index = 0;
let sum = 0;

while (index < numArr.length){
    console.log(numArr[index]);
    numArr[index] > 0 ? (sum+= numArr[index]) : null;
    index++;
}

console.log(`The sum of all the positive integers is: ${sum}`)

let city = [
    "building",
    "sign",
    "window",
    "bridge",
    "lighthouse",
    "light pole",
    "tree",
    "empty street",
];

let structure = city[0];
let pos = 0;

while (structure != "empty street"){
    console.log(`Spiderman swings from the ${structure}`)
    pos++;

    structure = city[pos];
}

console.log(`Spiderman is landing in the ${structure}`);

let spideyHP = 20;
//dataset below
let badGuys = [
    {
        baddie: "Green Goblin",
        hp: 15,
    },
    {
        baddie: "Venom",
        hp: 25,
    },
    {
        baddie: "Stilt-man",
        hp: 5,
    },
    {
        baddie: "Thug",
        hp: 0,
    },
];
/*
?   Do While
    do {
        ...code block
    } while (expression)

    - works just like a while loop with the exception that it will run our code block at least once.
*/

//randomly grab someone from dataset, below

let random = Math.floor(Math.random() * badGuys.length);
//console.log(random);
let villain = badGuys[random];
//console.log(villain);

console.log(`${villain.baddie} has appeared.`)

do {
    if(villain.baddie === "Thug"){
        console.log("Spider-Man webs the Thug. EZPZ")
        break;
    }

    console.log(`${villain.baddie} hits Spider-Man!`);
    spideyHP--;
    console.log("Spider-Man HP:", spideyHP);

    let spideyHit = Math.floor(Math.random() * 3)
    villain.hp -= spideyHit;
    console.log(`Spider-Man hits ${villain.baddie} for ${spideyHit} damage.`);
    console.log("Villain HP", villain.hp);

    if(spideyHP === 0) {
        break;
    }

} while (villain.hp > 0);

villain.hp <= 0 ? console.log(`Spider-Man captures the ${villain.baddie}`) : console.log(`${villain.baddie} has taken down Spider-Man.`);

for(let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FIZZ BUZZ")
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ")
    } else {
        console.log(i)
    }
}