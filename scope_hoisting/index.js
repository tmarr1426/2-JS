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





















