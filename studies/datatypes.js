/* 
 * DATATYPES:
 *
 * 1. Primitive data types:
 *      -number: numeric data
 *      -string: character data
 *      -boolean: true or false
 *      -unidentified: no value, incept, uninitialised
 *      -NaN: Not a Number
 *      -null: no value, nullified by programmer
 *
 * 2. Complex data types:
 *      -array
 *      -object
 *      -function
 */
 
 var myNum = 5; // This variable represents a number value
 var myNum2 = 5.5; // This variable also represents a number value
 var myString = 'Zach'; // This variable also represents a string value
 var myBool = true; // This variable represents a boolean value
 var myUnid; // This variable represents unidentified(an uninitialised variable is equal to unidentified)
 var myNaN = NaN; // This variable represents NaN
 var myNull = null; // This variable represents null
 
 
 
/*
 * PRIMITIVE:
 *
 * 1. Primitiives are atomic, immutable, they do not hold collect or aggregate
 *    other values, and operations on simple values return new simple values, they do not alter the original.
 *
 * 2. Copy by value. When assigning or passing simple data types are copied from variable to the next.  
 */
 
var animal = 'dog';
var animalTwo = animal;
animal = 'cat';
console.log(animalTwo); // will log to console dog because it passes by value
 
/*
 * COMPLEX:
 *
 * 1. Complex values aggregate other values and therefore are of indefinite size. 
 *
 * 2. Copy by reference. When assigning or passing complex data types are passed by reference.
 */
 
var objectOne = {one: 'first'};
var objectTwo = objectOne;
objectTwo.one = 'not first';
console.log(objectOne.one); // will log to console 'not first' because both array and arrayTwo reference the same location
 
/*
 * ARRAY:
 *
 * 1. Arrays can hold any number of different data values. 
 *
 * 2. Arrays are 0-indexed meaning that the first position in an array is indexed by 0
 *    and it counts up from 0 per item.
 *
 * 3. Arrays can be accessed by bracket notation as in the example below.
 *
 * 4. Arrays are surrounded by [].
 */
var myArray = [1, 2, 3];

console.log(myArray[1]); // logs to console 2 because it is at index 1 in the array.

/* 
 * OBJECT:
 * 
 * 1. Objects can hold any number of different data values.
 *
 * 2. Objects are stored in key-value pairs.
 *
 * 3. Objects can be accessed by bracket AND dot notation.
 *
 * 4. Objects are surrounded by {}.
 */
var myObject = {name: 'Zach', age: 2};

console.log(myObject.name); //will log to console 'Zach'
console.log(myObject['name']); //will also log to console 'Zach'

/*
 * FUNCTION:
 *
 * 1. Functions are blocks of code that can be reused.
 *
 * 2. Functions are called by typing the name of the function followed by parenthesis.
 *
 * 3. Functions can have parameters.
 *
 * 4. Functions can take any number of arguments.
 *
 * 5. Functions can have a return. That is what gives the functions value.
 */
 function isGreaterThan(a, b) {
     return a > b; // returns true if a is greater than b and false if b is greater than a.
 }
 
 console.log(isGreaterThan(2, 5)); // will log to console false because 2 is not greater than 5
 
/*
 * 1. Infinity is a number bigger than all other numbers.
 *
 * 2. -Infinity is a number smaller than all other numbers.
 *
 * 3. Mathematically this value behaves like infinity.
 */
 
 console.log(5 / Infinity); // will log to console 0 because anything divided by infinity is 0
 console.log(-Infinity + 12); // will log to console -Infinity because -Infinity + anything is -Infinity 
 