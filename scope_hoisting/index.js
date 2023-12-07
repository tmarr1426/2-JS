// ? Scope & Hoisting

/*
?   Scope
    * Used to determine how information in different code blocks can be accessed
        ? Five Scope Types
        * Global/window
        * Block
        * Function
        * Module - if we use external files
        * Lexical
*/

/*
?   Global Scope
    * Outer most scope
    * Window Object when in the client/browser
    * In the js file when in Node
    * Accessible from every other scope
*/

// outside
let globalScopedVariable = "This is a global scope variable";
let x = 5;
{
    {
        {
            {
                {
                    {
                        {
                            console.log(globalScopedVariable);
                            console.log(x);
                            let innerScopedVariable = "This is an inner scoped variable"; // created within inner scope
                        }
                    }
                }
            }
        }
    }
}

// console.log(innerScopedVariable); //! ERROR: innerScopedVariable is not defined. Cannot reach inner nestings when outside.

//? Var vs Let in scope

{
    let x = 5; 
}

//console.log(x); //! ERROR undefined

{
    var y = 5;
}

console.log(y); //! Var can be read
/*
?   Function Scope
    * Accessible only inside of the function
*/

function scope() {
    let fxScopeVariable = "This is a function scope variable";
    console.log(fxScopeVariable);
}

scope();

/*
?   Block Scope
    * Anywhere there are {}
*/

{
    let blockScopedVariable = "Block Scoped Variable";
}

// console.log(blockScopedVariable); //! ERROR

/*
?   Lexical Scope
    * Variables are accessible by their nested position
    * Inner fx scope can access outer function scope
*/

function outerFx () {
    let ofxv = "Outer fx Scope Variable";

    function innerFx() {
        let ifxv = "Inner fx Scope Variable";
        return ifxv;
    }

    return innerFx ();
}

console.log(outerFx ());

/*
?   Hoisting
    * JS parsing engine reads top to bottom, left to right
    * JS interpreter runs the code twice
        - First, it looks for VARiables and fx declarations and hoists them
        - It allocates memory space for those declarations
        - It then executes the code line-by-line
*/

//console.log(myDog);//! ERROR cannot read a variable below it.

let myDog = "Spaniel";
console.log(myDog);

var age = 32;
console.log(age);

x (); // Traditional functions get hoisted. Able to call them before they are declared

function x () {
    console.log("fucntion x executed")
}

//y (); //! ERROR Function expressions do NOT get hoisted above everything.

let y = function () {
    console.log("function expression")
};

y ();

function run() {
    var foo = "foo";
    let bar = "bar";
    var fxVariable = "test";
    console.log(foo, bar, fxVariable);

    {
        var moo = "moo";
        let baz = "baz";
        console.log(moo, baz);
    }

    //console.log(baz); //! ERROR undefined, let does not get hoisted
    console.log(moo); // Able to print due to moo being a VAR
};

run();