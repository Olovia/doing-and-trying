/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
*/

//The datatype null means it doesn't have a proper value.
//undefined means that the content hasn't been defined yet.
//Booleans true and false are logic operators

/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

console.log("A variable is something where you can store values to use them later.")


/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/

console.log(12 + 20) 

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x = 12

/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/

name = "John Doe"

/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/
console.log(x - 12)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/ //do it in words till 100 how to convert a number into string ?
x = 5
if (x < 10) {
    console.log(x)
} //you can use arrays for solution


/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/
let age = 15
let canWatchHorrorMovies = (age > 18) ? "Can watch" : "Can't watch"
console.log(canWatchHorrorMovies)

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT 
*/