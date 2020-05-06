/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Switch");
/* coding examples */

// // let animals = ["cat", "dog", "cow", "hen"];

// // console.log(animals);

// // for (let i of animals) {
// //   console.log(i);
// // }

// // animals.forEach(function(n,index) {
// //   console.log(index + " - " + n);
// // });

// // Calculator

// let num1, num2, result1 = 0, result2 = 0, result3 = 0, result4 = 0, result5 = 0;

// num1 = Number(prompt("Enter your first number: "));
// num2 = Number(prompt("Enter your second number: "));
// result1 = num1 + num2;
// result2 = num1 - num2;
// result3 = num1 * num2;
// result4 = num1 / num2;
// result5 = num1 % num2;

// console.log("The result is: " +  result1);
// console.log("The result is: " +  result2);
// console.log("The result is: " +  result3);
// console.log("The result is: " +  result4);
// console.log("The result is: " +  result5);

// Objects

// let car = {
//   brand: "BMW",
//   color: "Black",
//   price: "350000000",
//   isUsed: false
// }

// console.log(JSON.stringify(car));
// console.log(Object.values(car));

// ARRAYS //

// let asia = ["Bangladesh", "Syria", "Malaysia"];
// let europe = ["France", "Germany"];

// for (value of asia) {
//   console.log(value)
// }
// let mix = [...asia, "X", "Z"];
// console.log(mix);

// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, 20));

// LOOPS //

// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

// let persons = [
//   {name: "Faisal", age: 24},
//   {name: "Sakib", age: 9}
// ]
// console.log(persons.length);

// for (let i = 0; i < persons.length; i++) {
//   console.log(persons[i].name + " : " + persons[i].age)
//   console.log("------");
// }

// CONDITIONS //

// let age = Number(prompt("Enter your age: "));

// if (age >= 18 && age <= 59) {
//   console.log("You're an adult");
// } else if (age >= 60) {
//   console.log("You're old");
// } else {
//   console.log("You're not an adult");
// }

// SWITCH CONDITIONS

let choice = prompt(
  "Enter your choice: \nPress A for Addition, Press B for Subtraction, Press C for Multiplication, Press D for Division"
).toUpperCase();

if (choice === "A" || choice === "B" || choice === "C" || choice === "D") {
  let num1 = Number(prompt("Enter number 1: "));
  let num2 = Number(prompt("Enter number 2: "));
  let result = 0;

  switch (choice) {
    case "A":
      result = num1 + num2;
      log("Addition is: " + result);
      break;
    case "B":
      result = num1 - num2;
      log("Subtraction is: " + result);
      break;
    case "C":
      result = num1 * num2;
      log("Multiplication is: " + result);
      break;
    case "D":
      result = num1 / num2;
      log("Division is: " + result);
      break;
    default:
      log("Something is wrong! Please try again.");
      break;
  }
} else {
  log("HEY!!! You entered the wrong value!! Try again.");
}
