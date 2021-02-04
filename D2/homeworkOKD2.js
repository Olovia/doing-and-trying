/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

const postiveNumbers = [1,2,3,4,5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let notMyIdentity = {
    name: "Harald",
    surname: "Miller",
    age: 67,
    email: "harald.miller@gmail.com",
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
notMyIdentity.driverLicense = true

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete notMyIdentity.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
const randomIdentity = {
    name: "Damon",
    surname: "Smith",
    age: 101,
    email: "damon.smith@gmail.com",
}

if (randomIdentity.email !== notMyIdentity.email) {
    console.log("Yeah you are right, they are diffrent.")
}

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/
const totalShoppingCart = 50
const shippingCost = 5
let total = totalShoppingCart +shippingCost
if (totalShoppingCart >= 50) {
    total -= shippingCost
    console.log("Please pay: " + total)
} else {
    console.log("Please pay:" + total + "(with shipping)")
}


/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

if (totalShoppingCart * 0.8 >= 50) {
    total -= shippingCost
    console.log("Please pay: " + total)
} else {

    console.log("Please pay:" + total + "(with shipping)")
}

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

const niceCar = {
    name: "Olivia",
    brand: "Kantimm",
    model: "goodlooking",
    licensePlate: "76666",
}

let niceCar2 = Object.assign({}, niceCar)
let niceCar4 = Object.assign({}, niceCar)
let niceCar5 = Object.assign({}, niceCar)
let niceCar6 = Object.assign({}, niceCar)
let niceCar7 = Object.assign({}, niceCar)
niceCar2.licensePlate = "96666"
niceCar7.licensePlate = "16666"
niceCar4.licensePlate = "26666"
niceCar5.licensePlate = "36666"
niceCar6.licensePlate = "46666"


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [niceCar2, niceCar4, niceCar6, niceCar5, niceCar7, niceCar]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift()
carsForRent.pop()

    /* EXERCISE 11
    Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
    */
   
console.log(typeof (niceCar.licensePlate), typeof (niceCar), typeof (niceCar.brand))
for (let i = 0; i < carsForRent.length; i++) {
  console.log( typeof carsForRent[i].licensePlate )
  
}
    
for (let car of carsForRent) {
    console.log(typeof car.licensePlate + " " + typeof car.brand)
}

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [niceCar4, niceCar6, niceCar5]
let totalCars = carsForSale.length + (carsForRent.length - carsForSale)


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale)

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/