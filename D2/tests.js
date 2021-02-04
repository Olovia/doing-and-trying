let test = 0 - 1 ? "nice" : "bad"
console.log(test)

let user = {                //the object is user the properties are inside the object
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

const listOfNames = [{ name: "Olivia", surname: "Kantimm" }, { name: "Jonna", surname: "von der Linden" }, { name: "Alica", surname: "Schmidt" }] //The Elments are Objects they have properties
console.log(listOfNames[1].surname + " and " + listOfNames[0].surname) //displays the surname of Element 1 would be von der Linden and 0 would be Kantimm
listOfNames.push({ name: "Melina", surname: "Thies" })
console.log(listOfNames)
listOfNames.pop() //removes the last element
console.log(listOfNames)
listOfNames.shift() //removes the first element
console.log(listOfNames)

let number = 0

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
const arrayOfNumbers = [2, 32, 4, 5, 8, 5, 9, 33, 55, 12, 3]
const lastIndex = arrayOfNumbers.length -1
for (let index = 0; index <= lastIndex; index += 1) {
    arrayOfNumbers[index] = 0
    console.log(arrayOfNumbers[index])
}
console.log(arrayOfNumbers[index])

//ahhhh