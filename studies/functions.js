/*
 * FUNCTIONS
 *
 * 1. To use a function it must first be declared/defined.
 *
 * 2. To call/invoke a function you simply type the function name followed by () with any arguments you want to pass. 
 */
 
 
 function myFunction(parameterOne, parameterTwo) { // this is the function declaration of a named function saying that the function myFunction() takes two parameters (these are optional)
    console.log(parameterOne);
    console.log(parameterTwo); // functions that take parameters SHOULD operate code based on the arguments passed
 }
 
 myFunction(2,3,4,5,6); // this is  function call passing the arguments 2, 3, 4, 5, and 6. arguments 2 and 3 become parameterOne and parameterTwo respectively. The other arguments are ignored.
 
 // Parameters are what we typically have operations relating to within the function. Arguments are whatever get passed to the function when called.
 
 
 
 // functions can also be assigned to variables
 var print = function(parameterOne, parameterTwo) { // print works as myFunction()
    console.log(parameterOne);
    console.log(parameterTwo);
 };
 
 print(2,3,4,5,6);
 
 
 
 // Functions can also output, or return, values.
 
 function add(a, b) {
     return a + b;
 }
 
 var addedNums = add(1,2); // addedNums is equal to 3 because the add function returns 3
 
 
 
 // Functions have access to their parent scope but the parent scope does not have access to the function scope
 function addToAddedNumsAndTen(a) {
     const x = 10;
     console.log(a + x);
     console.log(a + addedNums); // can access addedNums because it was made in the parent scope and children can see parents
 }
 
 addToAddedNumsAndTen(12); // will log to console 22 and 15
 
 // console.log(x); this would produce a reference error because x can't be read by the parent scope since it was made in a child scope
 
 
 
 
 // Functions form closures around the data they house. If that data is referenced elsewhere the closures stay alive(continue to be able to be used)
 function closure() {
     var num = 10;
     
     return function() {
         console.log(num); // num can be accessed because it was made in the parent scope
     };                    // this keeps num alive, although only able to be used by nest and its children
 }
 
 var printTen = closure(); // printTen is now equal to the function() { console.log(num); } num is equal to 10
 
 printTen(); // will log to console 10
 
 