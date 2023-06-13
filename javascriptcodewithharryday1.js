// LEC 1
console.log("hello world");

// ! one more method to use the js code by using the script tag in HTML

// ? creating a function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3) + "\n" + add("Vivek", "Prakash"));
// in the terminal it is not running the console.log(add(2, 3) + "\n" + add("Vivek", "Prakash")); but in the forefox console it is working perfectly

//  Lec 2 variables
/* can change the type of  variablein js during runtime not like in c++ that once defiend you can't change its type*/
//  makes it a  dynamically typed language
// t variables are containers that stores a value
// var a = 56 //? var is used to declare a variable dont use it instread use let
let a = 67;
console.log(a);
console.log(typeof a); // a number
a = "Vivek";
console.log(typeof a); // a string
// ! no specific type of variable and can be changed dynamically
var k = 34;
console.log(k + "\n" + typeof k); //  type of number

// js variables are case sensitive
