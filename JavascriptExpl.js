console.log("hello world"); //u don't need a synicolon
console.log(`hello world`) //backtick press alt + 96 at the same time
console.log("Hello world".toUpperCase())
console.log("Hello world".toLowerCase())
console.log(parseInt("1000")) //converts string into a number
console.log(parseInt("Hello world")) //doenst work can't convert it into a number
//when u press the up key in terminal u can reuse what you typed in
//NaN => Not a Number
//&& => and
//null => it means it doesnt have a proper value
//undefined => the content hasnt been defined yet
//Booleans // logic operators
//Infinity //
//-Infinity // I don't know it yet
console.log(2 === 2) //
console.log(2 >= 3) //to check if sth is equal, geater or smaller than sth, output will be true or false
console.log(true && true) // checks if true and true are both true, if one is false output is false
console.log(2 ===2 || 2 < 3) //checks if one of the conditions is true, the output is true, if both conditons are false it output will be false
console.log(!true)
console.log(!false) //checks if sth is not the condition, if its not output will be true
console.log("Text", 1 + 1)
let variableName = "blubb" //just use let when you declare a variable after its declared just use the name
//typeof => tells which type sth is 
console.log(5 % 2) //gives out the remainder

if(1 > 5) {
    console.log("Condition was true")
}else{
    console.log("When it's not true than print this")
}
let a //if a condition like here is undefined the output will be false
console.log("String interpolation is replacing placeholders with values in a string literal.")
//The string interpolation in JavaScript is performed by template literals (strings wrapped in backticks `) and ${expression} as a placeholder. For example:

const number = 42;
const message = `The number is ${number}`;

console.log(message) // => 'The number is 42'

let age = 15
let canWatchHorrorMovies = (age > 18) ? "Can watch" : "Can't watch" // befor ? is true after is used, :  else 
console.log(canWatchHorrorMovies)

//0 evaluated as falsy and undefined is also evaluated as false an empty String is also false " "

let user = {                    //the object is user the properties are inside the object
    name: "Mustafa",
    age: 27,
    "isStudent" : true,
    firstName : "olovia"
}

console.log(user.name)
console.log(user["isStudent"])
if (user.firstName !== undefined) {
    console.log(user.firstName.toUpperCase())
} else {
    console.log("Firstname is undefined")
}
user.surName = "Kantimm"
console.log(user.firstName + " " + user.surName)

let user2 = Object.assign ({}, user) //to copy properties from user to user2
//other way would be:
//let user2 = {}
//Object.assign(user2, user)
//let user2 = user" //dont do that if you manipulate user 2 you would also manipulate user
//You can change Porperties but you cant change Object if the Object is const user2 = user wouldnt work
//, but user2.firstName = "Olaf" would work
const listOfNumbers = [1, 5, 3, 0, 7, 9] //if possible use const
console.log(listOfNumbers[0]) //gives out the element from position 0 Index starts from zero
console.log("Number of elements", listOfNumbers.length)
console.log(listOfNumbers[listOfNumbers.length - 1]) //will get us the last index element

const listOfNames = [{ name: "Olivia", surname: "Kantimm" }, { name: "Jonna", surname: "von der Linden" }, { name: "Alica", surname: "Schmidt" }] //The Elments are Objects they have properties
console.log(listOfNames[1].surname + " and " + listOfNames[0].surname) //displays the surname of Element 1 would be von der Linden and 0 would be Kantimm
listOfNames.push({ name: "Melina", surname: "Thies" })
console.log(listOfNames)
listOfNames.pop() //removes the last element
console.log(listOfNames)
listOfNames.shift() //removes the first element
console.log(listOfNames)

/*let number = 0

while (number < 100) {      //while condition is true it will display the numbers
    console.log(number)
    number += 10             //if you do + 10 the last number which will be shown is 90
}

let result = 1
let counter = 0
while (counter < 10) {
    result = result * 2
    counter = counter + 1
}                                           //to extract the root of 2^10
console.log(result)                           

for (let counting = 0; counting < 10; counting += 1){            
    console.log("Current counter: ", counting)              //for(initial expression; condition; increment)
}

//to stop an infinite loop press Ctrl + C, sometimes it crashes the terminal :D 
/*const arrayOfNumbers = [2, 32, 4, 5, 8, 5, 9, 33, 55, 12, 3]
const lastIndex = arrayOfNumbers.length -1
for (let index = 0; index <= lastIndex; index += 1) {
    arrayOfNumbers[index] = 0
    console.log(arrayOfNumbers[index])
}
console.log(arrayOfNumbers[index])*/

//need to learn .split() and join()

const square = function (x) {            //in () we put parameters, in {} we put the body (code) / could also put String as a parameter in this function it doesnt makes sense though
    const result = x * x                   
    return result                          //result as an output
}

console.log(square(2))
