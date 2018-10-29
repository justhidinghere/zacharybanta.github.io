/*
 * OPERATORS:
 * 1. Javascript operators are used to perform actions on or with values.
 *
 * 2. There are many types of operators:
 *      -Assignment operators
 *      -Arithmetic operators
 *      -Comparison operators
 *      -Logical operators
 *      -Unary operators
 *      -Ternary operators
 */


 // Assignment operators assign values
 var twenty = 20; // the = operator assigns the number value 20 to the variable twenty
 
 // The next two statements work the same
 twenty += 20;
 twenty = twenty + 20;
 
 // The next two statements work the same
 twenty -= 20;
 twenty = twenty - 20;
 
 // The next two statements work the same
 twenty *= 20;
 twenty = twenty * 20;

 // The next two statements work the same
 twenty /= 20;
 twenty = twenty / 20;
 
 // The next two statements work the same
 twenty %= 20;
 twenty = twenty % 20;
 
 // Arithmetic operators perform math evaluations(the following statements all result in twenty becoming equal to 20)
 twenty = 10 + 10; // The + operator adds values
 
 twenty = 40 - 20; // The - operator subtracts values
 
 twenty = 100 / 5; // the / operator divides values
 
 twenty = 4 * 5; // the * operator multiplies values
 
 twenty = 44 % 24; // the % operator divides the values and gives you the remainder
 
 // Twenty will now change value
 twenty++; // the ++ operator increments the value by 1(twenty is now equal to 21)
 
 twenty--; // the -- operator decrements the value by 1(twenty is now equal to 20)
 
 
 
 
 // Comparison operators evaluate to boolean values
 var myBool = 1 > 0; // > is the greater than operator (myBool evaluates to true)
 
 myBool = 1 < 0; // < is the less than operator (myBool evaluates to false)
 
 myBool = 1 >= 1; // >= is the greater than or equal to operator (myBool evaluates to true)
 
 myBool = 1 <= 1; // <= is the less than or equal to operator (myBool evaluates to true)
 
 myBool = 1 == '1'; // == is the loosely equals operator (myBool evaluates to true)
 
 myBool = 1 === '1'; // === is the strictly equals to operator (myBool evaluates to false)
 
 myBool = 1 != '1'; // != is the loosely not equal to operator (myBool evaluates to false)
 
 myBool = 1 !== '1'; // !== is the strictly not equal to operator (myBool evaluates to true)
 
 
 // Logical operators are typically used with boolean values and when used with booleans will return booleans
 myBool = true && false; // && is the AND operator and will return false if either value is false. Otherwise it will return true (myBool is equal to false)
 
 myBool = true || false; // || is the OR operator and will return false if both values are false. Otherwise it will return true (myBool is equal to true)
 
 myBool = !true; // ! is the NOT operator and will return false if its operand can be converted to true. (myBool is equal to false)
 
 
/*
 * UNARY, AND TERNARY OPERATORS
 *
 * 1. Unary operators deal with 1 value
 *      - ! is the logical NOT unary operator
 *      - typeof is a unary operator that returns the value TYPE of its operand
 *      - - is a unary operator that returns the negative value of its operand
 *
 * 2. The ternary operator deals with 3 values(or operands)
 *
 *      - a ? b : c (this operator checks if a is true. if it is, it runs b, if it is false, it runs c)
 */
 myBool = !true; // myBool is evaluated to false
 
 myBool = typeof(myBool); // myBool is evaluated to the string 'boolean
 
 myBool = 20;      // myBool is equal to 20
 myBool = -myBool; // myBool is evaluated to -20
 
 myBool = true ? false : true; // myBool is evaluated to false (the ternary operator runs like an if-else statement)
 