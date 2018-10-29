/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * TYPES OF VARIABLES:
 *
 * 1. var: The keyword used to declare a variable that can be unassigned and re-assigned.
 *      -var DECLARATIONS are hoisted to the top of the function scope, or global scope if they are outside of a function.
 *
 * 2. let: The keyword used to declare a variable that is BLOCK scoped and can be unassigned and re-assigned within the block.
 *      -lets are not hoisted to the top of the block of code to which they are declared.
 *
 * 3. const: The keyword used to declare a variable that is BLOCK scoped and can NOT be unassigned or re-assigned.
 *      -consts are not hoisted to the top of the block of code to which they are declared.
 */
 
var hoistToTopOfGlobal;

function weirdPrint(string) {
  var lameString = string.toLowerCase(); // as a var this variable can be reassigned
  const funString = string.toUpperCase() + '!!!'; // as a const this variable can not be reassigned
  let weirdString = ''; // as a let this variable can be reassigned
  
  for (var i = 0; i < string.length; i++) {
    if (i % 0 === 0) {
     weirdString += string[i].toUpperCase(); // this works because let variables can be reassigned and children can access the parent scope
    } else {
     weirdString += string[i].toLowerCase();
    }
  }
  console.log(lameString); // prints the input string in all lowercase
  
  console.log(funString); // prints the input string in all caps and with !!! appended to the end
  
  console.log(weirdString); // prints the input string varying uppercase and lower case letters
} 
 
 
 
 // NOTE: Hoisting is javascripts defualt behaviour of moving declarations to the top.
 // NOTE: Variables hoist only name, Functions hoist name AND body.
legs = true;
console.log(legs);
var legs;

 // The above example produces the same result as the below example because of hoisting.
 
var legs;
legs = true;
console.log(legs);
 
 
 
 