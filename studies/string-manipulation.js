/*
 * STRING MANIPULATION
 *
 * 1. Strings can be manipulated with string methods and operators.
 */
 
 
/*
 * String methodes include:
 * 1. .slice(start, end) : the .slice() method returns a chunk of a string from the start index to the end index
 *
 * 2. .toUpperCase() : the .toUpperCase() method converts the string to upper case and then returns it as a new string
 *
 * 3. .toLowerCase() : the .toLowerCase() method converts the string to lower case and then returns it as a new string
 *
 * 4. .replace(wordToReplace, wordToReplaceWith) : replaces the first instance of wordToReplace with wordToReplaceWith
 *
 * 5. .split(divider) : the .split() method takes a string and divides it into multiple substrings everytime it reaches the divider (returns as an array of strings)
 */
 var myString = 'Hello World!';
 
 console.log(myString.slice(6)); // will log to console 'World!' (if the end argument is not passed it will go to the end of the string)
 
 console.log(myString.toUpperCase()); // will log to console 'HELLO WORLD!'
 
 console.log(myString.toLowerCase()); // will log to console 'hello world!'
 
 console.log(myString.replace('Hello', 'Goodbye')); // will log to console 'Goodbye World!'
 
 console.log(myString.split(' ')); // will log to console an array containing the strings 'Hello' and 'World!'
 
 
 // Strings can also be manipulated with operators
myString = myString + ' You\'re a computer!'; // the + sign is the concatenation operator when used with strings and myString is evaluated to "Hello World! You're a computer!"
