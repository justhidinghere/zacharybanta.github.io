/*
 * LOOPS
 *
 * 1. Loops are used to iterate code multiple times.
 *
 * 2. The types of loops are:
 *      -while loops (loops that take only a conditional)
 *      -for loops (loops that initialise a starting point; have a stop condition; and then have an incrementor)
 *      -for-in loops (loops that are designed to iterate through each key value pair of an object)
 *
 * 3. When using loops make sure to include stop conditions or else you will run into infinite loops crashing your program.
 */
 
 var counter = 0;
 
 while (counter < 10) { // as long as the conditional counter < 100 returns true it will repeat the block of code
     counter++; // this while loop will iterate 10 times
     console.log(counter);
 }
 
 
 // for loops are especially useful for iterating through arrays because arrays are 0-indexed
 var myArray = [1,2,3,4,5,6,7,8,9,10];
 for (var i = myArray.length - 1; i >= 0; i--) { // this for loop iterates through myArray backwards starting at its last position
    console.log(myArray[i]); // this for loop will log to console 10 to 1 descending
 }
 
 for (var i = 0; i < myArray.length; i++) {
     console.log(myArray[i]); // this for loop will log to console 1 to 10 ascending
 }
 
 
 // for-in loops are used to iterate through objects who use key value pairs
 var myObj = {name: 'bill', age: 27, alive: true};
 for (var key in myObj) {
    console.log(key); // prints the key per iteration
    console.log(myObj[key]); // prints the value associated with the key per iteration
 }
 
 
 // for loops can iterate forward any number of times as well as backwards
 
 
 // forwards loop is below
 var end = 20;
 for (var i = 0; i < end; i++) { // this for loop will iterate forward a number of times equal to the variable end
     console.log(i);
 }
 
 // backwards loop is below
 var start = 20;
 for (var i = start; i > 0; i--) { // this for loop will iterate forward a number of times equal to the variable end
     console.log(i);
 }