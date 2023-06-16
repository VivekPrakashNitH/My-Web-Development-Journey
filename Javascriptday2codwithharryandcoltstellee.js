// $
// $
// $
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// %-----------------------------------------------LEC 3----------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $
// $
// $
// Before ES6 var was used to declare varables but now let keyword is used
// const is used to declare variables whose value we cannot change throughout the code
// nowdays var is not used because bug can be introduced into our code
// Let is used for declaring block scope variable
// var a = 45;
// var b = "Vivek";
// var c = null;
// var d = undefined;
//  before var was used to declare variable in js
// var is globally scoped by ES6 (ecma script 6)
// ! Var vs Let in Java Script
// t  Var is globally scoped while let and const are block scoped
// t  var can be updated & redeclared within it's scope
// t  let can be updated but not redeclared
// t  const can neither be updated nor be redeclared
// t  if we redeclare b inside a block like this
// var b= 65
// console.log(b) //? answer = 65
// {
//var b= "this"
// console.log(b) // ?answer = this
// }
// console.log(b) //? answer = this
/* so the scope of var is global and to counter that we have let and const*/
// ? in let it is locally scoped
// eg
let a = "SA";
console.log(a);
console.log(typeof a);
{
  //   console.log(a); //! reference error because variable a is accessed before it is initialised
  let a = 56;
  console.log(a); //  ans 56
  console.log(typeof a);
}
console.log(a);

let b = "vivek ";
console.log(b);
// let b = 5 ; //! will show an error coz let b can't be declared again but
b = 5; //! is correct
console.log(b);
// t let variables can be reassigned but not redeclared
// const variables must always be initialized
// eg const k; // // will throw an error must be declared here
// $
// $
// $
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// %-----------------------------------LEC 4-- DATA TYPES--------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $
// $
// $
// 7 PRIMITIVE TYPES OF DATA
//NNSSBBU
//?Number
//?Null
//?String
//?Symbol
//?Boolean
//?Bigint
//?Undefined
//! 7 types of primitive data type and non primitive data type is object in console.log(b);your js
let k = null;
let l = 345;
let c = true; //? boolean
let d = BigInt("456") + BigInt("4");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
let h;
console.log(k, l, c, d, e, f, g, h);
// // both g and h has type as undefined when not initialised the value is automatically undefined
console.log(typeof d);
// ! OBJECTS are key value pairs and are non primitive data types same as dictionary in pyhton
const item = {
  // kind of dictionary
  Hary: true,
  Shbh: 56,
  bhu: undefined,
};
console.log(item["bhu"]);
console.log(item["bjksbdfk"]); // will also giev undefoned as i has not been created
// $
// $
// $
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
//% --------------------------------LEC 5 practice set for js code with harry //----------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $
// $
// $
// * Create a variable of type string and try to add a number to it
let y = "snklwdj";
t = y + 34;
console.log(t); // output = snklwdj34
console.log(typeof t); // output = string

/* adding a  number makes it a string 34 is treated as string */

// * create a const "object" in js. Can you change it to hold a number later?
const gh = {
  dsljvnh: "sjkvfb",
  snvjk: "sfvkj",
  klwfn: 65,
};
console.log(gh);
//  the above is an object now changing the variable to hold a number
// gh = 54; // ? TypeError: Assignment to constant variable.
gh["but"] = "we can add an element to the constant object";
console.log(gh);

// $
// $
// $
// $ --------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------
// % ---------------------LEC 6 CODE WITH HARRY expressions and operators-----------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $
// $
// $
// ! a fragment of code that produces value is called expression
// ! every value written is an expression like "vivek" or 7 they all are expression
//  * arthemetic operators
// + / % etc like c++ and pyhton
// increment operators

let by = 65;
console.log(by++); // * first use then increase
console.log(by); // * the value is increased
console.log(--by); // * the value is first decreased then used

// dt now about == and === & != and !== operators
let cy = "65";
console.log(cy == by); //$ returns true coz both has same value
console.log(cy === by); //$ returns false cause cy is string and by is number
console.log("\n\n\n");
let dy = "45";
console.log(dy == by);
console.log(dy != by);
console.log(dy === by);
console.log(dy !== by);
// $
// $
// $
//$ --------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------
// % ---------------------LEC 7 CODE WITH HARRY conditional expressions -----------------------------
// $--------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------
// $-------------------------------------------------------let re = prompt("is this used for taking input");-------------------------------------------
// $
// $
// $
// if          -         if  else           - if  else if  else-

//%  let re = prompt("is this used for taking input or for asking questoins as a dialog box in browser"); only to be used in browser consoles wont work in vscode
// % let re = alert("jdbvksjv") this is used to give a message or just as an alert or warning like this site is ot secure or are you sure like this
//% when we take prompt it is by default takes input in string
// to conver it into number we use re = Number.parseInt(re);

//! the following code is used to take in put in vscde node.js environment
//! If you want to take input from the command line in a Node.js environment,
//! you can use the process.stdin stream. Here's an example:

process.stdin.setEncoding("utf8");

console.log("Enter your input:");

process.stdin.on("data", (data) => {
  const u = data.trim(); // Remove newline character
  if (u < 20) {
    console.log("You are below 20 and your age is :", u);
  } else if (u > 20 && u < 25) {
    console.log("You are below 25 and above 20  and your age is :", u);
  } else {
    console.log("ivalid age");
  }

  // Exit the program
  process.exit();
});
// ternary operators
// console.log(age>18?  "drive":"not drive")
