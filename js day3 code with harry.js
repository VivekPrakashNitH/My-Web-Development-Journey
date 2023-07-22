// $
// $
// $
//$ --------------------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------------------
// % -----------------------------------LEC 9 FOR LOOPS ----------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------------------
// $
// $
// $
// Three types of loops in js for loop, for in loop,for of loop
//  syntax of for loop
// // exactly same syntax as in c++
// % for (statement1;statement2;statement3){
// % code to be executed
// %} eg-
for (let i = 0; i < 56; i++) {
  console.log(i);
}
// for (var i = 0; i < 56; i++) {
//   console.log(i);
// }
// ! if var is declared even inside for loop it's scope doesn't end there we can access it after for loop has ended that's why it has global scope
// console.log(i);
let k = {
  key: "chain",
  main: "lfmkl",
  hit: "lkfnslk",
};
for (let a in k) {
  console.log(a);
  console.log(k[a]);
  console.log("value of '" + a + "' in dictionary is '" + k[a] + "'"); // // used to print words of dictionary
}
// for (let b of k) { // // TypeError: k is not iterable  must be a string or character for it to be iterable
//   console.log[b];
// }
for (let b of "VIvek") {
  console.log(b);
}
// $
// $
// $
//$ ---------------------------------------------------------------------------------------------------------------------------------
//$ ---------------------------------------------------------------------------------------------------------------------------------
//$ ---------------------------------------------------------------------------------------------------------------------------------
// % -----------------------------------LEC 10 WHILE LOOPS --------------------------------------------------------------------------
// $---------------------------------------------------------------------------------------------------------------------------------
// $---------------------------------------------------------------------------------------------------------------------------------
// $---------------------------------------------------------------------------------------------------------------------------------
// $
// $
// $

let i = 0;
while (i < 12) {
  console.log(i);
  i++;
}
// $
// $
// $
//$ ----------------------------------------------------------------------------------------------------------------------
//$ ----------------------------------------------------------------------------------------------------------------------
//$ ----------------------------------------------------------------------------------------------------------------------
// % ---------------------------------------------LEC 11 Functions -------------------------------------------------------
// $----------------------------------------------------------------------------------------------------------------------
// $----------------------------------------------------------------------------------------------------------------------
// $----------------------------------------------------------------------------------------------------------------------
// $
// $
// $
function ave(a, b) {
  return (a + b) / 2;
}
console.log(ave(5, 6));
//  function can be made without arguments also
const sum = (p, q) => {
  return p + q;
};
console.log(sum(4, 7));

// $
// $
// $
//$ --------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------
// % --------------------------------LEC 12 Practice on loops and functions --------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $
// $
// $
// //  print the marks of students in a object
let obj = {
  harry: 98,
  rohan: 70,
  aakash: 7,
};
for (a in obj) {
  console.log("\n", obj[a]); //! in js we don't use the + sign like pyhton rather , u is used to separate just like
}
// ? A new way to print in obj (Object.keys(obj).length) it is used o find the length of the object
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(obj[Object.keys(obj)[i]]);
}
//? create a function to find average of 5 numbers
const sum5 = (a, b, c, d, e) => {
  return a + b + +c + d + e;
};
console.log(sum5(1, 2, 3, 4, 5));

// $
// $
// $
//$ --------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------
// % -----------------------------------------LEC 13 Strings --------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $
// $
let nam = "Vibhu";
console.log(nam.length); // *answer  = 5;
console.log(nam); // *answer  = Vibhu;
console.log(nam[2]); // *answer  = b;

/*
 Modeern Java Script starts from here 
 */
//  ! Tempelate lieterals
console.log(`My name is ${nam} \t \r \n`); // was only possible because the string was written inside the back tick ` ` quotes the one below esc
// $
// $
// $
//$ --------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------
//$ --------------------------------------------------------------------------------------------------------------------
// % -----------------------------------------LEC 14 String Methods --------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $
// $
console.log(nam.toUpperCase()); // it is a method
console.log(nam.slice(1, 4));
console.log(nam.slice(0, 3));
console.log(nam.slice(1));
console.log(nam.replace("ibhu", "ivek"));
nam.replace("ibhu", "ivek");
friend = "Prakash";
console.log(nam.concat(" " + friend));
// strings are immutable in js
// $
// $
// $
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// % -----------------------------------------LEC 15 Practice sets on strings --------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $
// $
// ? q explore the includes,starts with and ends with function of a string
// in html we can directly write the code in side the body tag or can give a link in the head tag
// if we write in the body tag we have to write using the script tag in the body
// ! now using the include function
a = "this is an awesome playlist to follow";
let resuts = a.includes("playlist");
console.log(resuts); //* returns true
console.log(a.endsWith("Follow")); //* returns false
console.log(a.endsWith("follow")); //* returns true
console.log(a.startsWith("This")); //* returns false
console.log(a.startsWith("this")); //* returns true

// q3 convert string to upper case
console.log(a.toUpperCase());
// $
// $
// $
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// % -----------------------------------------LEC 16 Introductions to array --------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $
// $
// // arrays are variable which hold more than one variable of different  types
let marks_12 = [
  12,
  34,
  56,
  false,
  "in Js string or any data tyoes all data types can be different also  can also be stored in arrays",
];

console.log(marks_12[2]);
console.log(marks_12); // dt prints all the values
marks_12[2] = 43;
console.log(marks_12); // dt prints all the values and values can be changed directly it is mutable
//can also add values
console.log(marks_12);
marks_12[5] = "we can add after the array is declared ";
console.log(typeof marks_12); // * object

// $
// $
// $
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// % -----------------------------------------LEC 17 Array methods --------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $
// $
// *let num = [1, 2, 5, 6, 56, 78, 45];
// //  // tostring is used to convert all the elemts of array to string;
// console.log("\n" + "\n", typeof num.toString()); // ans string
// console.log(typeof num[5]); // ans number
// let op = num.toString();

// console.log(typeof num); // ans object
// console.log(typeof op[5]); // ans string
// console.log(typeof op); // ans string
// console.log(typeof num[5]); // ans number tostring doesn't change the original array but creates a copy of it we need to store it in a new variable
// num.pop(); // removes the last element
// console.log(num, r); // ans = [ 1, 2, 5, 6, 56, 78 ]
// let r = num.pop(); // removes the last element
// console.log(num , r); // ans = [ 1, 2, 5, 6, 56,  ] and 78

let num = [1, 2, 5, 6, 56, 78, 45];

// Using toString() to convert all elements of the array to string
console.log("\n" + "\n", typeof num.toString()); // "string"

// Checking the type of the element at index 5
console.log(typeof num[5]); // "number"

// Storing the result of toString() in a variable called op
let op = num.toString();

// Checking the type of the original array
console.log(typeof num); // "object"

// Checking the type of the character at index 5 in the string op
console.log(typeof op[5]); // "string"

// Checking the type of the string op
console.log(typeof op); // "string"

// Checking the type of the element at index 5 in the original array
console.log(typeof num[5]); // "number"

// Removing the last element from the original array
num.pop();

// Printing the modified array
console.log(num); // [1, 2, 5, 6, 56]

// Removing the last element from the original array and storing it in variable r
let r = num.pop();

// Printing the modified array and the removed element
console.log(num, r); // [1, 2, 5, 6] 56
// $
// $
// $
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// $ --------------------------------------------------------------------------------------------------------------------
// % -----------------------------------------LEC 18 Array methods continued --------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $--------------------------------------------------------------------------------------------------------------------
// $
// $
delete num[2]; // //  one empty item at the place where we ave deleted the item
console.log(num.length);
console.log(num);

console.log(num.length); //// length remains same even after deletion
let num2 = [23, "vivek", true, null, undefined];
let num3 = [23, "vivek", true, null, "symbol", 454];
console.log(num.concat(num2, num3));
// * nnbbssu - null,number , big int, boolean, string,symbol,undefined

// % sort methods
num = [23, 123, 5.6, 78, 2, 5, 3, 4, 234, 2, 5, 986, 5667, 465, 34, 678]; // t alphabetically sorted

console.log(num.sort());
// ! to sort them numerically we need to write a function like this
console.log(num.sort((a, b) => a - b));
// colt steele from lec 148

// % now an important propoerty of string
let j = 1;
let kj = "   fldjnvlk     ";
console.log(kj + j); // // ans = fldjnvlk1 here 1 is treated as string even though it is a number
//  dt trim is another method that will automatically delete
//dt  all the white space from the string at the end and start of the string will be deleted
//* we can do this also give multiple methods together like
console.log(kj.trim().toUpperCase());
console.log(kj.indexOf("d")); // ans = 5
console.log(kj.indexOf("d1")); // ans = -1
console.log(kj.indexOf("dj")); //ans = 5
// lec 159 colt steelee string tempelates {` bactitck usage basically}
// //lec 163 colt steelee making descision with js (done)

// //lec 164 comparison operators
//* >  greater than
//* <  less than
//* >= greater than
//* <= less than
//* == equality
//* != not equal to
//* === strictly equality
//* !== strictly non equal
// // lec 166 console alert & prompt
// alert("hi"); error in node js environment but in consoleit shows in browser so it works there
// prompt is used to tae in out in the web browser in the form of a dialog box
// parseint is used tro convert string to number
//yay now it's time to run our java script code
// // lec 168 if statements used in coonected.js file and connected.html file
