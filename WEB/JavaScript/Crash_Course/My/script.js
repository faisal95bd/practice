/* coding examples */

// // let animals = ["cat", "dog", "cow", "hen"];

// // console.console.log(animals);

// // for (let i of animals) {
// //   console.console.log(i);
// // }

// // animals.forEach(function(n,index) {
// //   console.console.log(index + " - " + n);
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

// console.console.log("The result is: " +  result1);
// console.console.log("The result is: " +  result2);
// console.console.log("The result is: " +  result3);
// console.console.log("The result is: " +  result4);
// console.console.log("The result is: " +  result5);

// Objects

// let car = {
//   brand: "BMW",
//   color: "Black",
//   price: "350000000",
//   isUsed: false
// }

// console.console.log(JSON.stringify(car));
// console.console.log(Object.values(car));

// ARRAYS //

// let asia = ["Bangladesh", "Syria", "Malaysia"];
// let europe = ["France", "Germany"];

// for (value of asia) {
//   console.console.log(value)
// }
// let mix = [...asia, "X", "Z"];
// console.console.log(mix);

// function add(a, b) {
//   return a + b;
// }
// console.console.log(add(10, 20));

// LOOPS //

// for (let i = 0; i < 6; i++) {
//   console.console.log(i);
// }

// let persons = [
//   {name: "Faisal", age: 24},
//   {name: "Sakib", age: 9}
// ]
// console.console.log(persons.length);

// for (let i = 0; i < persons.length; i++) {
//   console.console.log(persons[i].name + " : " + persons[i].age)
//   console.console.log("------");
// }

// CONDITIONS //

// let age = Number(prompt("Enter your age: "));

// if (age >= 18 && age <= 59) {
//   console.console.log("You're an adult");
// } else if (age >= 60) {
//   console.console.log("You're old");
// } else {
//   console.console.log("You're not an adult");
// }

// SWITCH CONDITIONS

// let choice = prompt(
//   "Enter your choice: \nPress A for Addition, Press B for Subtraction, Press C for Multiplication, Press D for Division"
// ).toUpperCase();

// if (choice === "A" || choice === "B" || choice === "C" || choice === "D") {
//   let num1 = Number(prompt("Enter number 1: "));
//   let num2 = Number(prompt("Enter number 2: "));
//   let result = 0;

//   switch (choice) {
//     case "A":
//       result = num1 + num2;
//       console.log("Addition is: " + result);
//       break;
//     case "B":
//       result = num1 - num2;
//       console.log("Subtraction is: " + result);
//       break;
//     case "C":
//       result = num1 * num2;
//       console.log("Multiplication is: " + result);
//       break;
//     case "D":
//       result = num1 / num2;
//       console.log("Division is: " + result);
//       break;
//     default:
//       console.log("Something is wrong! Please try again.");
//       break;
//   }
// } else {
//   console.log("HEY!!! You entered the wrong value!! Try again.");
// }

// Even or Odd Number

// let num = -1;

// if (num < 0) {
//   console.log("The number isn't valid!");
// } else if (num % 2 == 0) {
//   console.log(num + " is an even number");
// } else {
//   console.log(num + " is an odd number");
// }

// map, filter, reduce

// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (n) {
//   return n * 2;
// });

// console.log(numbers1);

// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function(n){
//   return n % 2 === 0;
// })

// console.log(numbers2);

// let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(function(accumaltor, nextNumber) {
//   return accumaltor + nextNumber;
// })

// console.log(numbers3);

// CALLBACKS //

// function person(name, callback) {
//   console.log(callback(name));
// }

// let callback = function(name) {
//   return "Hello " + name;
// }

// person("Faisal", function (name) {
//   return "Hello " + name;
// });

// Array Traverse

// let divisions = ["Dhaka", "Chattagram", "Khulna", "Barisal", "Rajshahi", "Mymenshingh", "Sylhet", "Rangpur"];

// console.log(divisions.length);

// divisionsLength = divisions.length;

// for (let i = 0; i < divisionsLength; i++) {
//   console.log(divisions[i] + " is a division of Bangladesh.");
// }

// CALLBACKS //

// console.log("Hello World");

// let calculation = function (num1, num2, callback) {
//   let add = num1 + num2;
//   let sub = num1 - num2;
//   console.log("Number1 : " + num1 + " , Number2 : " + num2);

//   callback(add, sub);
// };

// calculation(20, 10, function (add, sub) {
//   console.log("Addition: " + add);
//   console.log("Subtraction: " + sub);
// });

// calculation(20, 10, function (add, sub) {
//   console.log("Multiply: " + add * sub);
// });

// let names = ["Faisal", "Arman", "Sakib"];

// function traverse(names, callback) {
//   for (let i = 0; i < names.length; i++) {
//     callback(names[i]);
//   }
// }

// traverse(names, function(names){
//   console.log(names.toLowerCase());
//   console.log(names.toUpperCase());
// })

// function operation(num1, callback) {
//   callback(num1);
// }

// operation(10, function (num1) {
//   let double = num1 * 2;
//   console.log(double);
// });

// operation(10, function (num1) {
//   let double = num1 / 2;
//   console.log(double);
// });

// OBEJECTS //

// "use strict";
// let obj = {
//   name: "Faisal",
//   age: 24,
//   print: function () {
//     console.log("Name: " + this.name + " Age: " + this.age);
//   },
// };
// obj.print();

// for (let i in obj) {
//   console.log(i);
//   console.log(obj[i]);
// }

// let numbers = [10, 20, 30, 40, 50];

// for (let i of numbers) {
//   console.log(i);
// }

// numbers.forEach((element) => {
//   console.log(element);
// });

// JAKAT FETRA

// let text1 = ["J", "A", "K", "A", "T"];
// text1Result = "";
// text1.forEach((element) => {
//   text1Result += element;
// });

// // console.log(text1Result);

// let text2 = ["F", "E", "T", "R", "A"];

// let finalText = text1Result + "-";
// // console.log(finalText);
// text2.forEach((element) => {
//   finalText += element;
// });
// console.log(finalText);

// console.log("Hey! Keep it in mind: ");

// let moral = "SHAME";
// // console.log(moral.length);

// // for (let i = moral.length; i >= 0; i--) {
// for (let i = 0; i < moral.length; i++) {
//   console.log(moral[i]);
// }

// JS Challenge

// function numberIncreaseFirstTry(totalNumber) {
//   let result = 5;
//   for (i = 0; i < totalNumber; i++) {
//     console.log(result);
//     result = result + 4;
//   }
// }

// numberIncreaseFirstTry(3);

// function numberIncrease(totalNumber) {
//   let result = [];
//   let base = 5;

//   for (let i = 0; i < totalNumber; i++) {
//     result.push(base);
//     base += 4;
//   }
//   return result;
// }
// console.log(numberIncrease(5));

// JS Challenge

// Biggest Number

// let numbers = [10, 80, 50, 30, 90];

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// let max = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     // console.log("Current number: " + numbers[i]);
//     // console.log("Current MAX number: " + max);
//     max = numbers[i];
//   }
// }
// console.log("The largest number is: " + max);

// Reverse

// function reverse(str) {
//   let splitString = str.split("");
//   console.log(splitString);
//   let reverseString = splitString.reverse();
//   console.log(reverseString);
//   let finalResult = reverseString.join("");
//   console.log(str);
//   console.log(finalResult);
// }

// reverse("Hello");

// using simple for loop for reversing

// function reverse(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(reverse("Hello"));

// function reverse(str) {
//   let reversed = "";
//   for (let char of str) {
//     reversed = char + reversed;
//     // console.log(char);
//     console.log(reversed);

//   }
//   return reversed;
// }
// console.log(reverse("Hello"));

//+ Var, Let, Const

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// for (let j = 0; j < 10; j++) {
//   console.log(j);
// }
// console.log(j);

// const name = "Faisal";
// name = "Sakib";
// console.log(name);

// const person = {};
// // person["name"] = "Faisal";
// person.name = "Faisal"
// console.log(person.name);

//+ Template Literals

// const name = "Sakib";
// const age = 10;
// const gender = "Male";

// console.log(`Name ${name.length} Age ${age} Gender ${gender}`);

//+ Arrays and Spread Operators

// const nameOne = ["Faisal", "Arman", "Sakib"];
// const nameTwo = ["Khalek", "Malek", "Jalaluddin", "Sanaullah", "Kabir"];

// const concatArray = [...nameOne, ...nameTwo];

// concatArray.forEach((name) => {
//   console.log(name);
// });

// const nameThree = "Rokeya";

// const concatArrayThree = [...nameThree];

// concatArrayThree.forEach((letter) => {
//   console.log(letter);
// });

// calculation = (n1, n2, n3) => {
//   return n1 + n2 + n3;
// };

// numbers = [10, 20, 30];
// // console.log(calculation(10, 20, 30));

// const addition = calculation(...numbers);
// console.log(addition);

// spread operator in objects

// const name = {
//   firstName: "Faisal",
//   lastName: "Ahmed",
// };

// const address = {
//   country: "Bangladesh",
//   city: "Dhaka",
//   postCode: 1361,
// };

// const person = { ...name, ...address };

// console.log(JSON.stringify(person, null, 2));

//+ Arroy Function

// const add = (num1, num2) => num1 + num2;

// console.log(add(10, 20));

// const person = {
//   name: "Faisal",
//   cars: ["BMW", "Audi", "Ferrari"],
//   toString: function () {
//     this.cars.forEach(car => console.log(`${this.name} has ${car} `));
//   },
// };

// person.toString();

//+ OOP

// class People {
//   constructor(name, age) {
//     this.nameTest = name;
//     this.ageTest = age;
//   }

//   eat() {
//     console.log(`${this.nameTest} is eating now`);
//   }
//   sleep() {
//     console.log(`${this.ageTest} year's ${this.nameTest} is sleeping now`);
//   }
// }

// const person = new People("Rana", 20);
// person.eat();
// person.sleep();

//+ Inheritance

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} is eating now`);
//   }
//   sleep() {
//     console.log(`${this.name} is sleeping now`);
//   }
//   play() {
//     console.log(`${this.name} is playing now`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
//   catSleep() {
//     super.sleep();
//   }
//   displayColor() {
//     console.log(`${this.age} years old ${this.name} is a ${this.color} cat`);
//     // console.log(`${this.color} cat`);
//   }
// }

// const myCat = new Cat("Billi", 2, "White");
// myCat.catSleep();
// myCat.play();
// myCat.displayColor();

//+ Static Method - class er ekta method ke class er baire object declare na kore e call krte parsi

// class Shop {
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }
//   displayContact() {
//     console.log("This is contact");
//   }
//   static cart(productID, totalAmount) {
//     // this.productID = productID;
//     // this.totalAmount = totalAmount;
//     console.log(`${productID} is TK${totalAmount}`);
//   }
// }

// Shop.cart("A111", 650);


