const printEvenNumbers = require('./question/evenNumber'); // adjust filename
console.log("Print Even Number");

const list = [11, 22, 33, 44, 55, 66];
printEvenNumbers(list); 
// Print Even numbers

const findFactorial = require('./question/fact');
console.log("Factorial of 5 :");
findFactorial(5);
// Factorial Number
 
const printTable = require('./question/multiplicationTable');
console.log("Multiplication Table of 7 : ");
printTable(7);
// Multiplication Table

const sumNumbers = require('./question/sumOfNumbers');
console.log("Sum of Numbers : ");
sumNumbers([10,20,40,50]);
// Sum of Numbers 

const largest = require('./question/largest');
console.log("Largest Number is : ");
largest([30,76,10 , 90]);
// largest number among all 

const isLeapYear = require('./question/leapYear');
console.log("Is 2024 a Leap Year : ");
isLeapYear(2024);
// leap Year finder