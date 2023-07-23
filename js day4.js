// starting from lec 9 for in loops
// types of for loops-:
//% 1) for loop     -> loops a block of code n number of times
//% 2) for in loops -> loops through keys of an object
//% 3) for of loop  -> loops through the values of an object
//% 4) while loop   -> loops through loops a block based on condition
//% 5) do while loop-> loops exactly like while loops but will loop atleast once
//$ for loop in java script has same syntax as in c++
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//@ printed all the numbers between 1 to 10
// @ i++  i.e it is a statemnt executed after the loop has run after loop has run if condition is true then loop run and then 3rd staemnt comes into play

// $ for in loop used in object
let a = {
  krish: 54,
  rabbit: true,
  ash: "ketchum",
};
for (let p in a) {
  console.log(p);
}
// accessing the key to access the value simply use a[p]
for (let p in a) {
  console.log(a[p]);
}
// $ now for of loop
// for (let p of a[2]) {
//   console.log(p);
// }
// // not iterable but
let r = "harry";
for (let p of r) {
  console.log(p);
}
// prints harry

// ! difference between for in and for of loops
//// for of is specifically made for objects to retrieve or able to use the key pair of the object
// // for of loop directly displays the vakues,in array , in strings, directly the value but does not iterate in object
/*
Certainly! The difference between the "for...in" and "for...of" loops lies in how they iterate over elements in JavaScript.

 "for...in" loop is used to iterate over the properties of an object. It works by looping through all the 
enumerable properties of an object and assigns each property key to a variable on each iteration. This is useful when you want to work with the keys or properties of an object.

On the other hand, the "for...of" loop is used to iterate over iterable objects, such as arrays, strings,
or other collections. It directly accesses and retrieves the values of each element in the collection, 
rather than the keys or properties. It provides an easier way to work with the actual values of the elements
in the collection.

To summarize:

    "for...in" loop is used to iterate over object properties (keys).
    "for...of" loop is used to iterate over iterable objects and access their values directly.

Here's a simple example to illustrate the difference:

javascript

const myObject = {
  a: 1,
  b: 2,
  c: 3
};

for (let key in myObject) {
  console.log(key); // Prints: a, b, c
}

const myArray = [1, 2, 3];

for (let value of myArray) {
  console.log(value); // Prints: 1, 2, 3
}

In the "for...in" loop, we access the keys of the object (a, b, c),
 while in the "for...of" loop, we directly access the values of the array (1, 2, 3).*/

//  .
//  .
//  .
//  .
//  .
//  .
//  .
/*Iterable objects are objects that implement the iterable protocol in JavaScript. They are objects that can be iterated over using the "for...of" loop or other constructs that expect iterables, such as the spread operator or the "Array.from()" method.

In simpler terms, an iterable object is something you can loop through or iterate over. It provides a way to access its elements one by one.

Some examples of iterable objects in JavaScript include:

    Arrays: Arrays are ordered collections of elements that can be iterated over.

javascript

const myArray = [1, 2, 3];
for (let element of myArray) {
  console.log(element);
}

    Strings: Strings are sequences of characters and can be iterated over.

javascript

const myString = "Hello";
for (let char of myString) {
  console.log(char);
}

    Maps: Maps are collections of key-value pairs and can be iterated over.

javascript

const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
for (let entry of myMap) {
  console.log(entry);
}

    Sets: Sets are collections of unique elements and can be iterated over.

javascript

const mySet = new Set([1, 2, 3]);
for (let element of mySet) {
  console.log(element);
}

These are just a few examples, and there are other built-in and custom objects that can be iterable as well. The key is that iterable objects provide a way to loop through their elements in a predictable and ordered manner.
 */
/* ologies for the confusion. Here are the built-in iterable objects in JavaScript:

    Arrays: Ordered collections of elements.

    Strings: Sequences of characters.

    Maps: Collections of key-value pairs.

    Sets: Collections of unique elements.

    Arguments: Represents the arguments passed to a function.

    NodeList: Collections of nodes returned by DOM methods like querySelectorAll().

    Typed Arrays: Arrays with specified element types like Int8Array, Float64Array, etc.

    Generators: Functions that can be paused and resumed, producing a sequence of values.

    Built-in Iterators:
        entries(): Returns an iterator for key-value pairs in an object.
        values(): Returns an iterator for values in an object.
        keys(): Returns an iterator for keys in an object.
        Symbol.iterator: Symbol used to access the default iterator method for an object.

    Other built-in objects with iterable behavior:
        Array-like objects: Objects that have a length property and indexed elements, like arguments, HTMLCollection, NodeList, etc.
        String.prototype: String objects have iterator methods like charAt(), charCodeAt(), etc., that can be used for iteration.

These are the primary built-in iterable objects provided by JavaScript. Custom objects can also be made iterable by implementing the iterable protocol, which involves defining the Symbol.iterator method on the object.*/
// lec 11 functions
//! way to create function in java script
//% function function name(parameters to be passed){
//% any opertation to be performed
//% return kvbfkvk;
//%}
// ! one more way tp create a function
// % const hello =(p,q)=>{}

// lec 12 practice set
let marks = {
  harry: 34,
  giraffe: 45,
  sixty: 94,
};
for (i in marks) {
  console.log(`key is ${i} and it's value is ${marks[i]} `);
}
// ! on more way to print the objects
console.log(`\n`);
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    `the student is ${Object.keys(marks)[i]} and their marks are ${
      marks[Object.keys(marks)[i]]
    }`
  );
}
// $ write a function to find mean of 5 numbers
const ave = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
console.log(ave(1, 2, 3, 4, 5));
// # very important point always use const while declaring function in this way coz with the let u can reassgn the fucntion later on and const is a good practice
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
// %--------------------lec 18 splice very important learn it again
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
// structure of splice a.splice(index number,number of elements to be deleted including the index, elements can be of any length)
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
// %-------------------lec 19 using for, for in and for of loops in arrays
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
let k = [true, 1, "molten", undefined]; // nnbbssu - number,null,bigint , boolean , string,symbol,undefined,
// %---------------------for loop
console.log(`\nfor  loop-\n`);
for (let i = 0; i < k.length; i++) {
  console.log(k[i]);
}
//%----------------- for each loop

//%---------syntax of for each loop
//%---------- arrayname.forEach((element)=>{
//%---------- process to be followed and it will be executed for every element
//%---------- })
console.log(`\nfor each loop-\n`);
k.forEach((element) => {
  console.log(element);
});
// $ object or string  can be converted to array using the function Array.from
// @ The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// @ iterable means that it can be terated or it's element can be accessed using the name[index] form if we put index the paricular elemnt appears
//$ console.log(Array.from('foo'));
//$ Expected output: Array ["f", "o", "o"]

//$ Expected output: Array [2, 4, 6]
// % ---- for of and for in loop in array
console.log(`\nfor of loop-\n`);
for (let a of k) {
  //$ console.log(Array.from([1, 2, 3], x => x + x));
  console.log(a);
}
console.log(`\n\n\n`);

//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------lec 20 Map filter and reduce
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
// ! very important methods which are used to save time
//?------
//?------
//?------
//? array map method -> creates a new array by perforing some operations on each element of the array and it doesn't effect the original array
//?------
//?------
//?------
// eg:-
let ak = [3, "data", true, undefined, null];

ak.map((value, index) => {
  console.log(
    `${value} ${index} `
  ); /*prints all the values along side ttheir index */
  /* now for each also deos the same thing we can access alll the individual elments using the for each loop also 
  ! but what map does is create a new array with it  using let bp = ak.map((value)=>{dchdh}) now we can access bp also  use this for for each also but a different and easy metod jus lie this */
});
//?------
//?------
//?------
// ? array filter method -> we can get a new array based on some conditons and it doesn't effect the original array eg
//?------
//?------
//?------
let a2k = [23, 34, 54, 12, 56, 65, 35, 27, 98, 86, 62];
let a2 = a2k.filter((a) => {
  return a > 32;
});
console.log(a2);
//?------
//?------
//?------
//?------ array reduce method -> reduces an array to a single value or used to return a single value form an array
//?------
//?------
//?------
let arr3 = [2, 5, 6, 2, 4, 78, 54, 6, 5, 34, 6];
let arr4 = arr3.reduce((h1, h2) => {
  //h1 is a recursive value here return h1*h2 means h1 = h1*h2
  return h1 * h2;
});
console.log(arr4);

//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------lec 21 Practice set on arrays
//%---------------------
//%---------------------
//%---------------------
//%---------------------
//%---------------------
// done 22,23,24,25,26 done lec 27
// ! document.write(variable name or number or string )
// ! it will show the name on the browser page
