/*
 * CONTROL FLOW
 *
 * 1. Control flow is made by using conditional statements.
 *
 * 2. Conditional statements check to make sure a given conditional is true and then
 *    perform a block of code.
 *
 * 3. Conditional statements can be made with if-elseif-else or with switch statements.
 */
 
 var myConditional = 1;
 
 // if-elseif-else statement below
 if (myConditional > 0) { // an if statement checks to see if the parenthesized part evaluates to true
     console.log('True!');
 } else if (myConditional === 0) { // an if else statement checks the same way an if statement does but is found after and if statement
     console.log('They are equal!');
 } else { // an else statement will only run its block of code if no if or if-else statements in the same chain ran their code
     console.log('False!');
 } // this if-elseif-else chain logs to console 'True!' because the if conditional returned true and ran it's block of code and then ignored the rest of the chain
 
 
 // switch statement below
 switch (myConditional) { // a switch sets a single conditional and each case within the switch statement checks to see if the conditional returns true
    case 45:
        console.log('myConditional is equal to number 45'); // does not print
    case 1:
        console.log('myConditional is equal to number 1'); // does print
    case true:
        console.log('myConditional is equal to boolean true'); // does print
        break; // switch statements keep checking new cases until a break statement is hit
 }
 