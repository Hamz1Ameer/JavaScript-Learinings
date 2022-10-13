//==>Operators in JavaScript


// 'use strict'



// Arithmetic Operators:

// + Addition,
// - Subtraction,
// / Division, 
// * Multiplication ,
// % Modular Division, 
// ** Exponential Division 
// ++ Increment: Prefix and Postfix
// -- Decrement: Prefix and Postfix

// let num = 5;
// console.log(num++);

// In Prefix Incr / Decr the increment or decrement is done before operation
// In Postfix Incr / Decr the increment or decrement is done after operation

// Comparison Operator:
// == Equals to
// != Equals to
// > Greater than
// < Less than
// >= Greater than or equal
// <= less than or equal
// REturns Boolean values

// ==> Logical Operators:
// && Logical AND Operator //RETURNS TRUE IF ALL OF ITS EXPRESSIONS ARE TRUE ELSE RETURNS FALSE
// || LOgiacal OR Operator  //RETURNS TRUE IF ANY OF ITS EXPRESSION IS TRUE ELSE RETURNS FALSE
// ! Logical Not Operator // returns the oppposite of the value : if true returns false and vise versa

// let a = 2, b = 5, c = 10;

// console.log((a < b) && (a > c) && (b > c)); //returns false as one value is false

// console.log((a < b) || (a > c) || (b > c)); //returns true as one value is true

// console.log((a < b));
// console.log(!(a < b));




// ==> String operator: concatination operator (+)
// console.log("Hello " + "world") // returns Hello World

// let name = 'Hamza';
// console.log('Ameer ' + name); 

// Exersice:
// console.log(4 ** 2);

// console.log(5 + "Hello");

// Swapping of two numbers
// let a = 10, b = 20, temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// Swappping two numbers without 3rd variable 
// let a = 10, b = 5;
// a = a + b;// a=15
// b = a - b;//b=10
// a = a - b;//a=5
// console.log(a, b)//returns value of a=5, and b=10
// let a = 8;
// for (let x = 1; x <= 10; x++) {
//     console.log(a + '*' + x + '=' + (a * x));
// }



// //=>Convert a String to a Number!
// let a = '40';
// let b = '4.01';
// let c = '40a';

// // Number() method //The Number() method converts a string to a number.
// console.log(Number(a));
// console.log(Number(b));
// console.log(Number(c));

// // parseInt() method //The parseInt() method converts a string into an integer.
// console.log(parseInt(a));
// console.log(parseInt(b));
// console.log(parseInt(c));

// // parseFloat() method //The parseFloat() method converts a string into an point number(decimal points).
// console.log(parseFloat(a));
// console.log(parseFloat(b));
// console.log(parseFloat(c));




// ===>Functions:
//Function is a reusable code which is defined once and used many times.

// Function is a first class citizen in JS
// 1. in JS we can assign a function to variable 
// 2. We can pass a Function as a argument   [callback]
// 3. We can return a function.

//syntax:
// function function_name(){
//     // statements goes here.
// }

// let a = 10; b = 20;
// function sum(a, b) {
//     console.log(a + b);
// }
// sum(a, b);
// sum(40, 20);
// sum(19.5, 0.5);
// sum('a', 'b');

// function sum(a, b) {
//     return (a + b);
// }
// let add = sum(10, 20);
// console.log(add);

// ==>Anonymous function:
// Function with no name is called anonymous functions.

// let sum = function (a, b) {
//     return (a + b);
// }
// console.log(sum(10, 20));


// ==>Higher order functions:
//  Functions which takes other functions as arguments (callBack Functions) or returns as the result

// ==> Call Back Functions:
// A Function that is passed as an argument of another function then is called as callback function.
// these are higher order functions

// Example :
// const funA = (name, funB) => {
//     setTimeout(function () {
//         console.log(`This function is funA and it took 2s to executed, it was busy with ${name}`);
//         funB();// funB is higher order function
//     }, 2000);
// }
// const funB = () => {
//     console.log(`this function is funB and is a call back function, it is called as argument in funcA`);
// }
// funA('Ameer', funB);


// Example of higher order function and call back function. [Calculator example]

// const add = (a, b) => {
//     return a + b;
// }
// const sub = (a, b) => {
//     return a - b;
// }
// const mul = (a, b) => {
//     return a * b;
// }
// const div = (a, b) => {
//     return a / b;
// }

// // here calc returns a function, hence it is higher order function.
// // and oper is passed as an argument hence it is call back function.
// const calc = (a1, b1, oper) => {
//     return oper(a1, b1);
// }
// console.log(calc(10, 2, add));



// IIFE: Immediately Invoked Function:
// It is a self executing anonymous Function, it has 2 major parts
// first is an anonymous function with in a grouping operator (), then second part is immediately invocation of this function expression
// using (), through which js will directly interpret the function.

// (function (a, b) {
//     console.log(`Hi there this is an IIFE, and the sum of ${a}, ${b} is ${a + b}`);// this is  the declaration of the IIFE function using () operator and anonymous function.
// })/*here ends the declaration */(7, 5);// here () is used to call the IIFE function



//call(), apply() and bind methods in functions:

// CALL() Method
// predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// Calls a method of an object, substituting another object for the current object.

// const person = {
//     firstName: 'Ameer',
//     lastName: 'Hamza',
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName
//     }
// }
// const person1 = {
//     firstName: 'Innova',
//     lastName: 'path'
// }
// const person2 = {
//     firstName: 'Jack',
//     lastName: 'Sparrow'
// }
// console.log(person.fullName.call(person2))


// .apply() 
// Calls the function, substituting the specified object for the this value of the function, 
// and the specified array for the arguments of the function.


// .bind()
// For a given function, creates a bound function that has the same body as the original function. 
// The this object of the bound function is associated with the specified object, and has the specified initial parameters.






//==> Control Statements:
// If...else Statements:

// let a = 20;
// if (a < 10) {
//     console.log("a is less than 10");
// } else {
//     console.log("a is greater than 10");
// }

// Example for nested if-else statements:
// let year = 2022;
// debugger
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("this is a leap year");
//         } else {
//             console.log("this is not a leap year");
//         }
//     }
//     else {
//         console.log("this is a leap year");
//     }
// } else {
//     console.log("this is not a leap year");
// }

//Switch Statements:

// let area = 'square';
// let b = 10, h = 10, s = 5, ln = 10, br = 5, r = 3;
// switch (area) {
//     case 'rectangle':
//         console.log(`area of rectangle is ${ln * br}`); break;
//     case 'circle':
//         console.log(`area of circle is ${22 / 7 * r * r}`); break;
//     case 'square':
//         console.log(`area of square is ${s * s}`); break;
//     case 'triangle':
//         console.log(`area of triangle is ${1 / 2 * b * h}`); break;
//     default:
//         console.log(`Please enter valid data`); break;
// }


//while loop:
// let num = 0;
// while (num <= 10) {
//     console.log(`The number is ${num}`);
//     num++;
// }

// Do while loop
// let num = 5;
// do {
//     console.log(`the number is ${num}`); num++;
// } while (num < 10);

// Main difference between while and do-while loops is while checks the consition at start and
//do-while check condition at ending of first loop.

//For Loops:
// debugger;
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Using for loop for displaying a table of 8
// let a = 8;
// for (let x = 1; x <= 10; x++) {
//     console.log(a + '*' + x + '=' + (a * x));
// }






//===> EcmaScript : 6
// 1)let and Const          {}
// 2)Template String        {}
// 3)Destructing            {}
// 4)Rest Operator          {}
// 5)Spread Operator        {}
// 6)Default Arguments      {}
// 7)Arrow Function         {}
// 8)Object Property        {}

// =>Var,  Let and Const: ES6
// var is function scoped and let/const is block scoped

//var keyword:
// function name() {
//     var fname = "Ameer";
//     console.log(fname);
//     if (true) {
//         var lname = "Hamza";
//         console.log(fname);
//         console.log(lname);
//     }
//     console.log(lname);
// }
// name();

//let Keyword:
// function name() {
//     let fname = "Ameer";
//     console.log(fname);
//     if (true) {
//         let lname = "Hamza";
//         console.log(fname);
//         console.log(lname);
//     }
//     console.log(lname);
// }
// name();


// let a = 20, b = 30;
// console.log(`The value of a is ${a} and the valu of b is ${b}`);


// =>Template Literals: ES 6
// this uses `` backticks.
// and it uses ${/*variable value*/} for variable values

// for loops using template literals.

// let tableOf = 9
// for (i = 1; i <= 10; i++) {
//     console.log(`${tableOf}*${i}=${tableOf * i}`);
// }

// the above table program from for loops is displayed using template literals.


// => Default parameters in funtion: ES 6
// let mul = function (a, b) {
//     console.log(a, b);//the value of a is passed from the argument and a=5, but value of b is passed as undefined.
//     return (a * b);
// }
// console.log(mul(5)); // returns NaN, since default parameter is passed

// let mul = function (a, b = 5) {  //here we are passing a default parameter to b.
//     console.log(a, b);
//     return (a * b);
// }
// console.log(mul(5); // so this argument is passed to a.
//if we give 2 arguments then it is passed to the function  and the default parameter is not used in this case.

// Arrow Function: ES 6
// It uses[ => ] symbol in function defination and always first define the function and then call it.

// sample of a fat arrow funtion
// Arrow function dont support /*this*/ keyword
// let sum = () => {
//     let a = 5, b = 10; return (a + b);
// }
// console.log(sum());

// Arrow function in one line with template literals:
// const sum = () => `the sum of two numbers is ${(a = 5) + (b = 10)}`;
// console.log(sum());

// const greetings = (name = 'Peter') => {
//     let message = name + ', welcome to 30 Days Of JavaScript!'
//     return message
// }
// console.log(greetings())
// console.log(greetings('John'))


// =>Destructuring : ES6
//ARRAY destructuring:
// allows you to destructure properties of an object or elements of an array into individual variables.

// function getScores() {
//     return [10, 'Hundred', 50.6];
// }
// let [x, y, z] = getScores();
// console.log(x + '\n' + y + '\n' + z)

// In this above example we are destructuring an array of 3 elements into 3 individual variables [x,y,z] in array destructureing we use [] brackets for  individual variable 

// Object Destructuring:
// const name = {
//     fname: 'Mohammed',
//     mname: 'Ameer',
//     lname: 'Hamza',

// };
// let { fname, mname, lname, y = 20 } = name;
// console.log(fname);

// Object Properties: [ES6]

// 1.we can use dynamic properties using [] with keys of object items;

// let myName = 'Ameer';
// const myBio = {
//     [myName]: `Hey there ${myName}`, //Returns the value of [myName] => Ameer: 'Hey there Ameer'
//     [20 + 2]: `Age is 22` // Returns the result of [20+2] =>'22': 'Age is 22'
// };
// console.log(myBio);

// 2. Its not necessary to write both key and value if the key and value is same:
// let myName = 'Ameer';
// let age = 22;
// const myBio = {
//     myName, // here we have both key and value same, so we are going to only write once.
//     age // here we have both key and value same, so we are going to only write once.
// };
// console.log(myBio);


// Spread Operator: It uses  (...)  in syntax.
// Spread Operator is used 
// In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(...arr1, ...arr2); //we can use spread operator for concatinate

// function sum(a, b, c) {
//     console.log(a + b + c);
// }
// sum(...arr1);// here we can get the array elements of arr1 using (...) spread operator in sum function
// sum(...arr2);// here we can get the array elements of arr2 using (...) spread operator in sum function

// console.log(...arr1, 4, 5); // we can also add more elements into the array or object using  spread(...) operator

//Spread in objects:
// const obj = {
//     name: 'Ameer',
//     age: 22,
//     class: 'be'
// }
// let obj1 = { ...obj, isAct: true }; //here we are coping object obj to obj1 and also addding a new item seperaing with comma(,)
// console.log(obj1);

//Rest Parameters
// Rest parameters allows us to represent indefinite number of  arguments as an array

// function names(a, b, ...c) {
//     console.log(a, b, c);
// }
// names('a', 'b', 'c', 'd', 'e', 'f');


// ==> ES 7 Features (2016):
// 1.array includes
// 2. (**) Exponentiation operator 


// 1.array includes  [ES 7]

// Determines whether an array includes a certain element, returning true or false as appropriate.

// const num = [1, 2, 3, 4, 5];
// const isPresent = num.includes(5); //checks if requested element is present or not
// console.log(isPresent); // returns either true or false

// 2. (**) Exponentiation operator [ES 7]

// let num = 10;
// console.log(num ** 2); // here ** raises num to power of 2.


// ==> ES 8 Features(2017)

// 1.String Padding
// 2.Object.values()
// 3. Object.entries()
// Async Await


// 1.String Padding: ->padStart() and ->padEnd() Methods  [ES8]  can work well on browser console
// Pads the current string with a given string and The padding is applied from the start (left) of the current string.
// Pads the current string with a given string and The padding is applied from the end (right) of the current string.
// let str = `Hey, my name is Anonymous`;
// console.log(str); // this will give normal string
// const a = str.padStart(50); // this will add white spaces from the start of string, 
// const b = str.padEnd(30); // this will add ehite spaces at the ending of string,
// console.log(a); // sting padded at start
// console.log(b);// string padded at end
// console.log(b.length);// here we can confirm the length is increased

// 2.Object.values() and Object.entries() Method / ES8 /
// const person = {
//     name: `nick`,
//     age: 25
// };
// console.log(Object.values(person)); //this method returns the values of all the elements in an object;
// console.log(Object.entries(person));// this will return all the elements after converting it into array; and treat each key value pair as individual array elements.


// ES 9 Features(2018)
// 1.Rest and spread properties for object

// const obj = {
//     first: 1,
//     second: 2, third: 3,
//     fourth: 4
// }
// console.log({ zero: 0, ...obj });// this (...obj) spread is used to combine object properties.
// const obj2 = { first, second, ...others } = { first: 0, second: 2, third: 4 };// here rest parameter is used to accept all the remaining values in to others.
// console.log(obj2);

// another example:
// const person = { name: 'name', age: 'age' };
// const person2 = { ...person }; //this will copy all the properties from person object to person2 object
// console.log(person);
// console.log(person2);


// ES 10 (2019)

// 1. Array.prototype.flat() method: [ES9]
// It is used to convert 3-d array to 2- d array and 3-d array to single - dimensional array
// by defalt it flat to only single level, but we can add any level value and even to infinity which will convert into single - dimensional array

// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, [6, 7]],
//     [8, [9, [0, [1, [2]]]]]    //this is a multidimentional array
// ];
// let fArr = arr.flat(Infinity); // 
// console.log(fArr);


// 2. Object.fromEntries()

// this will return all the elements after converting it into array; and treat each key value pair as individual array elements.

// const person = {
//     name: `nick`,
//     age: 25
// };
// let objArr = Object.entries(person); //this will convert the object properties into array elements 
// console.log(objArr); 
// console.log(Object.fromEntries(objArr)); // this will convert back into object properties from array

// 3. trimStart() and trimEnd()
// trimStart()// trims the current string's whitespaces  and The trimming is applied from the start (left) of the current string.
// trimEnd() // trims the current string's whitespaces and The trimming is applied from the end (right) of the current string.

// str = `   Hey there   `;
// console.log(str.trimStart()); //returns 'Hey there   ', without  whitespaces at start
// console.log(str.trimStart()); //returns '   Hey there', without  whitespaces at end


//  1.BigInt  Data Type [ES 10]
// It help performing operations on numbers greater that MAX_SAFE_INTEGER i.e., max value of integer
// let num = Number.MAX_SAFE_INTEGER; // 9007199254740991 is the maximum safe inger, 
// console.log(num); //BigInt allows us to perform 
//  we add 'n' at the ending of variable value, then it is treated as big int
// example:

// const num1 = 9007199254740991 + 22; //this will give wrong result
// const num2 = 9007199254740991n + 22n; //this will give correct result and n is used to specify bigint
// console.log(num1);
// console.log(num2);

// 2. Nullish Coalescing Operator (??)
// It checks if left side value to the operator is either null or undefined, if left is either null or undefined then it returns right hand side value (operand) otherwise it returns the left side operand
// const NullishOperator = null ?? `default String`;
// console.log(NullishOperator);

// 3. "Use Strict"
// When it is located at the top of a script, the whole script works the “modern” way.
// "use strict" should be always at the top of a Script
// There’s no way to cancel use strict


// a = 10;
// console.log(a); 

// a = 10; // this time we used 'use strict' at the top of the script
// console.log(a);// hence we will get an error: a is not defined, we have to use let var or const




// Excercise On Functions:

// 1)Declare a function fullName and it print out your full name.
// function fullName() {
//     return `Mohammed Ameer Hamza`;
// }
// console.log(fullName());

// 2)Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function name(fname, lname) {
//     return `${fname} ${lname}`;
// }
// console.log(name('Ameer', 'Hamza'));

// 3)Declare a function addNumbers and it takes two two parameters and it returns sum.
// let addNumbers = (a, b) => {
//     return `${a + b}`;
// }
// console.log(addNumbers(10, 2));

// 4)An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// let areaOfRectangle = (length, width) => {
//     return `${length * width}`;
// }
// console.log(areaOfRectangle(20, 30));

// 5)A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// const perimeterOfRectangle = (length, width) => {
//     return `${2 * (length + width)}`;
// }
// console.log(perimeterOfRectangle(2, 3));

// ==> Arrays in JavaScript
// they can store any type of elements, seperated by commas. and these elements are numbered starting from 0 to its (length -1). these are called index values
// All of the array elements are placed between [ square Brackets ]

// example of an array: 
// let names = ['john', 'mike', 'Charlie', 'jack'];
//length of the array is given by
// console.log(names.length);
//To access specific element of array:
// console.log(names[0]);//retuns the first element.
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// the last Element can be also accessed by:
// console.log(names[names.length - 1]);


// 1 Array traversal: using for loop:
// let names = ['john', 'mike', 'Charlie', 'jack'];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// Using for-in and for-of loop:
// let names = ['john', 'mike', 'Charlie', 'jack'];
// for (let elements in names) {
//     console.log(elements);// for in returns the index numbers in the array.
// }

// let names = ['john', 'mike', 'Charlie', 'jack'];
// for (let elements of names) {
//     console.log(elements);// for of returns elements of the array
// }

// forEach loop: 
// let names = ['john', 'mike', 'Charlie', 'jack'];
// names.forEach(function (element, index, names) {
//     console.log(element + ` is at index` + ' ' + index + ' ' + `of the array: ` + names);
// });

// forEach using arrow function:
// let names = ['john', 'mike', 'Charlie', 'jack'];
// names.forEach((Element, index, names) => {
//     console.log(`the element ${Element} is at index ${index} of the array: ${names}`);
// });


// replacing elements in an Array:

// let names = ['john', 'mike', 'Charlie', 'jack'];
// console.log(names[2]);
// names[2] = 'nick';
// console.log(names[2]);

// ==> 2 Array searching and filter.:
// #1 indexOf() Method
// let names = ['john', 'mike', 'Charlie', 'jack'];
// console.log(names.indexOf('mike')); // here it returns the index value of 'mike' starting from the 0th posotion in forward search. And it will return -1 of none found.

// #2 lastIndexOf() method is similar to above but it starts from last and do backward search and returns the index value of that element. And it will return -1 of none found.
// let names = ['john', 'mike', 'Charlie', 'jack', 'mike'];
// console.log(names.lastIndexOf('mike'));
// console.log(names.lastIndexOf('mike', 3)); // this will start searching from third element and do backward search and returns the output 1.


// Example indexOf() and lastIndexOf() methods:
// let names = ['john', 'mike', 'Charlie', 'jack', 'mike'];
// console.log(names.indexOf('mike')); //1
// console.log(names.lastIndexOf('mike'));//4
// console.log(names.indexOf('mike', 3));//4
// console.log(names.lastIndexOf('mike', 3));//1

// #3 includes() method
// returns boolean { true or falase} after checking for the given element is present in the array or not.
// let names = ['john', 'mike', 'Charlie', 'jack', 'mike'];
// console.log(names.includes('mike')); //true
// console.log(names.includes('john', 1));// returns false as 'john' is at 0th index and the method is searching from 1 index number.

// #4 find() Method:
// it returns the element which we are searching for in the array. find() method can return only one value.
// let nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(nums.find((val) => val > 6)); // 
// console.log(nums.find((val) => val > 7)); //returns undefined if not found


// #5 findIndex() Method:
// let nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(nums.findIndex((val) => val > 2));// 
// console.log(nums.findIndex((val) => val > 7));returns -1 if not found

// #6 filter() Method:
// let nums = [1, 2, 3, 4, 5, 6, 7]
// let newNums = nums.filter((ele, index) => (ele > 2));
// console.log(newNums); //returns a new array with elements > 2 present in arrat nums: [3,4,5,6,7]

// // #7 sort() Method:
// sorts the given array and returns the array, it checks the first letter of each element and sort into ascending order after converting them into string
// sorting a number array does not give correct order. as it only checks the first letter of each element and sort into ascending order.
// let names = ['mike', 'john', 'Alen', 'dobby', 'Ron', 'Zake'];
// console.log(names.sort());
// let nums = [5, 3, 6, 9, 8, 2, 1, 10, 20, 30, 1000, 40003];
// console.log(nums.sort());// [1, 10, 1000, 2,20, 3, 30, 40003, 5, 6, 8,9]

// for sorting with call back function 
// a-b will return 
// let nums = [5, 3, 6, 9, 8, 2, 1, 10, 20, 30, 1000, 40003];
// console.log(nums.sort((a, b) => a - b));// [1, 2, 3, 5, 6, 8, 9, 10, 20, 30, 1000, 40003]






// ==> #3 CRUD Create Read Update and Delete

// #1 Push() method:
// It is used to add elements at the end of the array
// and it returns the new length of the array names
// let names = ['mike', 'john', 'Alen', 'Ron', 'Zake'];
// let count = names.push('dobby', 'zeke');
// console.log(names);// returns Array with new elements at end
// console.log(count);// returns the new length of the array names

// with numbers
// let nums = [1, 2, 5, 6, 8, 3];
// let count = nums.push(3, 5);
// console.log(nums);// returns Array with new elements at start
// console.log(count);// returns the new length of the array names


// #2 unshift() Method
// It is used to add elements at the start of the array
// and it returns the new length of the array names
// let names = ['mike', 'john', 'Alen', 'Ron', 'Zake'];
// let count = names.unshift('dobby', 'Zake');
// console.log(names);// returns Array with new elements at start
// console.log(count);// returns the new length of the array names

// with numbers
// let nums = [1, 2, 5, 6, 8, 3];
// let count = nums.unshift(3, 5);
// console.log(nums);// returns Array with new elements at start
// console.log(count);// returns the new length of the array names

// #3 POP() Method
// It is used to removes last element from the end of the array and changes the length of array
// and it returns the removed element.
// let names = ['mike', 'john', 'Alen', 'Ron', 'Zake'];
// let value = names.pop();// removes the last element from the array
// console.log(names); console.log(value);// returns the element which is removed
// console.log(names.length)// returns the length after poping

// #4 shift() Method
// It is used to removes the first element from the start of the array and changes the length of array
// and it returns the removed element.
// let names = ['mike', 'john', 'Alen', 'Ron', 'Zake'];
// let value = names.shift();// removes the last element from the array
// console.log(names); console.log(value);// returns the element which is removed
// console.log(names.length)// returns the length after poping

// ==> # Splice Method:
// This method is used to add or delete at any index of the array
//syntax:
// arrayName.splice(indexNumber,deletingValue,insertingValue);

// let names = ['mike', 'john', 'Alen', 'Ron', 'Zake'];
// let value = names.splice(2, 1, 'dobby');// this will start from given index number and removes one element on 2nd index i.e., Alen and insert 'dobby'
// console.log(names)// this will return the updated array.
// console.log(value); //his will return the removed element from the Array.

// Exercise on splice
// add element at end with splice

// let week = ['Monday', 'Tuesday', 'Wednesday', 'friday'];
// week.splice(week.length, 0, 'Sunday');//adding sunday at last;
// console.log(week);

// let week = ['Monday', 'Tuesday', 'Wednesday', 'Friday'];
// let dayIndex = week.indexOf('Friday');
// week.splice(week.length, 0, 'Sunday');//adding sunday at last;
// week.splice(dayIndex, 0, 'Thursday');// adding thursday before friday:
// console.log(week);

// Below is a program to add saturday after friday using splice method:
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
// daysIndex = days.indexOf('Friday');
// if (daysIndex != -1) {
//     days.splice(daysIndex + 1, 0, "Saturday");
//     console.log(days);
// }
// else {
//     console.log('"Friday" is not found in the array');
// }

//delete a wednesday from array of week:
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'];
// let daysIndex = days.indexOf('Wednesday');
// if (daysIndex != -1) {
//     removedDays = days.splice(daysIndex, 1);// to remove all the elements after the given index we use infinity in delete field insted of 1 or 2 or 3;
//     console.log(days);
//     console.log(removedDays);// returns the removed elements from the array;
// }
// else {
//     console.log('"Wednesday" is not found in the array');
// }

// ==>Map(), reduce() and Filter() methods

// #1 Map() Method
// It returns a new array containning  results of all elements in the array. It uses a function and calls this function for all the elements in the array. It doesn't change the original array and creates a new array to return.
// let names = ['mike', 'john', 'Alen', 'Ron', 'Zake'];
// let newArr = names.map((elem, ind, arr) => {
//     return `Element : "${elem}" is at index value : ${ind} belongs to the array: [${arr}]`
// })
// console.log(newArr);

// Exercise for Map() Method

// let arr = [1, 4, 9, 16, 25];
// let arrsqrt = arr.map((ele) => Math.sqrt(ele));// math.sqrt() Method is used to give the square root of  the elements in the given array.
// console.log(arrsqrt);

// let arr = [2, 3, 4, 6, 8,];
// let nums = arr.map((elem) => elem * 2).filter((elem => elem > 10)) // here we are chaining filter method with map method for filtering the results.
// console.log(nums);

// using reduce method to get no. of times elements are repeating.
// let name = 'Ameer Hamza';
// bebugger
// let arr = name.split(' ').join('').split('');
// let a = arr.reduce((acc, ele, index, array) => {
//     if (!acc[ele]) {
//         acc[ele] = 1;
//     }
//     else {
//         acc[ele]++;
//     }
//     return acc;
// }, {})
// console.log(a);


//==> Dates in javascript:
// Date object represents single moment in time in platform independent format.

// Dates can be created in 4 ways in JS:
// 1= new Date() //constructor
// 2= new Date(year, month, date, hours, minutes, seconds, milliseconds)
// 3= new Date(milliseconds)
// 4= new Date(date String)

// we use new Date() constructor  to create a date construcot
// let dt1 = new Date();
// console.log(dt1); //returns date and time in international form
// let dt2 = new Date().toString();
// console.log(dt2); // returns date and time in IST 
// let dt3 = new Date().toLocaleString();
// console.log(dt3); // returns date and time in local format

// //USing all the 7 parameters in Date():
// let dt = new Date(2022, 6, 15, 14, 44, 60, 0).toLocaleString(); // this will return date and time in local format:
// console.log(dt);

// Date.now() method is used to return milliseconds from 1/1/1970 to till date:
// let dt = Date.now();// returns milliseconds from 1/1/1970 to till date
// console.log(dt);

// Giving milliseconds as parameter (milliseconds)
// let dt = new Date(1657917595606);
// console.log(dt);


// Other different methods to GET different values:
// let dt = new Date();
// // console.log(dt.toString()); // returns in IST format
// // console.log(dt.getFullYear()); // REturns the Year
// console.log(dt.getMonth()); // returns 0-11 as month
// console.log(dt.getDate()); // returs todays date
// console.log(dt.getDay()); // returns todays Day

// Setting individual dates in js
// let dt = new Date(); // returns milliseconds from 1/1/1970
// console.log(dt.setDate(2022, 8, 15));// returns milliseconds from 1/1/1970
// console.log(dt.setFullYear(2025));// returns milliseconds from 1/1/1970
// console.log(dt.setMonth(08));// returns milliseconds from 1/1/1970
// console.log(dt.toString()); // REturns in IST

//Getting Time individually :
// let time = new Date();
// console.log(time.getTime());// returns milliseconds from 1/1/1970
// console.log(time.getHours());//returns hours now from 0-23 hrs
// console.log(time.getMinutes());//returns minutes
// console.log(time.getSeconds());//returns Seconds
// console.log(time.getMilliseconds());// returns Milliseconds

// Setting time individually
// let time = new Date();
// // console.log(time.setTime());
// console.log(time.setHours(2));//returns milliseconds from 1/1/1970
// console.log(time.setMinutes(3));//returns milliseconds from 1/1/1970
// console.log(time.setSeconds(4));//returns milliseconds from 1/1/1970

// Date Only and Time Only 
// let t = new Date();
// console.log(t.toLocaleTimeString());
// console.log(t.toLocaleDateString());

//==> MATHS Objects:
// It allows us to perform Mathematical tasks on numbers:

// 1) PI Math.PI Property: Uses value of PI
// console.log(Math.PI);


// 2) Math.round() Method: Gives the nearest rounded value(round figure)
// let a = 10.3456
// console.log(Math.round(a));// REturns 10

// 3)Math.pow() : Gives the exponential power. Same as (**)
// console.log(Math.pow(2, 3)); // returns 2**3 (2 raise to power of 3)

// 4) Math.sqrt(): gives the square root value of the given number.
// console.log(Math.sqrt(9)); // returns 3

// 5)Math.abs(): gives the absolute value of the given number:
// console.log(Math.abs(-55)); // returns 55

// 6)Math.ceil(): Gives the upper rounded integer of given number
// console.log(Math.ceil(10.2)); //returns 11
// console.log(Math.ceil(10));// returns 10  as already integer

// 7) Math.floor():Gives the lower rounded integer of given number:
// console.log(Math.floor(10.2)); //returns 10 as floor value
// console.log(Math.floor(10));// returns 10  as already integer

// 8) Math.min(): gives the lowest value in the list of arguments:
// console.log(Math.min(100, 3000, 2, -5, 0, -222)); //returns -222,

// 9) Math.max(): gives the highest value in the list of arguments:
// console.log(Math.max(100, 3000, 2, -5, 0, -222)); //returns 3000

//10) Math.random(); always gives random number between 0 and 1 inclusive 0.
// console.log(Math.random());// returns any random number between 0 and 1.
// console.log(Math.floor(Math.random() * 10)); // this will return values from 0 to 9 (0,9 both inclusive)

// 11)Math.trunc(): It gives the interger part of the given number (it can be positive or negative)
// console.log(Math.trunc(4.9)); // returns 4
// console.log(Math.trunc(-4.9));//returns -4


// Practice:
// let a = Math.trunc(4.5);// equal to Math.floor()
// let b = Math.floor(4.5);// equal to Math.trunc()
// let c = Math.trunc(-4.5);//equal to Math.ceil()
// let d = Math.ceil(-4.5);//equal to Math.trunc()
// if (a == b && c == d) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }



// // Starting 20 numbers which are divisible by 7 and return 1 if divided by 2:
// let arr = [];
// for (let i = 1; arr.length < 20; i++) {
//     if (i % 7 == 0 && i % 2 == 1) {
//         arr.push(i)
//     }
// }
// console.log(arr);
// arr.forEach((ele) => console.log(ele));
// // console.log(arr.length);



// DOM : Document Object Model

// The Document Object Model(DOM) is a programming interface for web documents.It represents the page so that programs can change the document 
// structure, style, and content.The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// Window is the main container or we can say the global Object.
// And the DOM is the child of Window Object.

// Since window is the global object    
// so you do not have to write down window It will be figured out by the runtime.
// window.location and location both gives the current URL.

// But in case of DOM if we want to use the document object, methods or properties:
// document.getElementById() Should always use Document 

// Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.
//Example
// change the background color to red
// document.body.style.background = "red";

// DOM practicle example  in HTML

//refer file DOM manipulation for Events in JavaScript:

// Events in JavaScript:
// Event can be anything that browser does,or happens to browser, or user does

// Examples of HTML events:
/* Browser completes it loading
An input feild has changed
Button is clicked

JS lets us exucute codes when events are detected
*/

// We can use HTML event handlers with JS to handle events and perform tasks with events

/*we can write events in JS in following ways:
1) Using alert(); //simple inline
2) By calling a function (one of the most common way of writing events) //calling function
3) By using inline events (HTML onclick="" propertty and element.onclick)
4) By using event listners ( addEventListner and IE's attachEvent)
*/

// => Object Event is parent of all the event objects
// example: Mouse Events, Keyboard Events, input Events ...
//  we can check details of the event using :
//  event, event.target, event.type etc...

// => Mouse Events;
// Events related to mouse are mouse events, it occurs when mouse interacts with html
// few mouse events are as follows:
// onmousedown(), onmouseup(), onmouseente(), onmouseleave() etc...

// => KeyBoard events:
// Events related to keyboard interaction, it occurs when user presses keys on the keyboard
// few KeyBoard events are as follows:
// onkeypress(), onkeyup(), onkeydown() etc...

// input Events:
// It is related to any input in the html.
// onchange event is an example of input event


// InlineEvent (Onclick) vs  addEventListener
// the addEventListener does not override existing event handler whereas the onclick overrides any exiting event handler = function event handlers
//another significant diffeerence is:
//onclick will always work  whereas addEventListener does not work in Internet Explorer before version 9;

//Refer DOM_Manipulation.HTML File for code Examples

//JS timing Events:
// Window Object allows execution of codes at specified time  intervals,
// these time intervals are called as timeing Events:
// There are 2 key methods.

// setTimeout(function, milliseconds)
// It executes the function after waiting for the specified number of milliseconds

// setInterval(function, milliseconds)
// IT executes the function similar to setTimeOut() but repeats the execution contineously.

// There are 4 methods in timing Events
// 1) setTimeOut()
// 2)setInterval()
// 3)clearTimeOut()
// 4)clearInterval()

// Refer the DOM_Manipulation.HTML file for practicle example




// Object oriented JavaScript:
// Object literal is simply key:Value pair data structure
// objects can store different types of variable and functions in one container

// creating an object:

// 1st way:

// let bioData = {
//     name: 'Ameer',
//     age: 22,
//     location: 'Hyderabad',
//     getData: function () {
//         console.log(`my name is ${bioData.name} and my age is ${bioData.age} and I live in ${this.location}`);
//     }
// }
// console.log(bioData.name)
// bioData.getData();

//2nd Way:
// Its not required to write function keyword in the function in objects:

// let bioData = {
//     name: 'Ameer',
//     age: 22,
//     location: 'Hyderabad',
//     getData() {
//         console.log(`my name is ${bioData.name} and my age is ${bioData.age} and I live in ${this.location}`);
//     }
// }
// console.log(bioData.name)
// bioData.getData();

// 3rd way:
// object in an object:
// let biodata = {
//     name: {
//         fName: 'Ameer',
//         lName: 'Hamza'
//     },
//     age: 25,
//     location: 'Hyderabad',
//     getData() {
//         console.log(`my name is ${this.name} and my age is ${this.age} and I live in ${this.location}`);
//     }
// }
// biodata.getData();
// console.log(biodata['name']['lName']);// we can access the values using [] brackets,
// console.log(biodata.name.fName);// we can also get the values using .



// This keyword in objects:
// this keyword specifies the current Context, at start it refers the window i.e., global object.
// this is used in the above example:

// examples of 'this':
// 1)
// console.log(this); // run this in browser, will return the window object.

// 2)
// function name(){
//     console.log(this);
// }
// name(); //  when we run this in browser console, it will still return the window onject;

//3)
// var myname='ameer'
// function name(){
//     console.log(this.myname);
// }
// name();// now when we run this in browser console, it will return the value of myname, since myname is global scoped and this refers window object

//4)
// const obj = {
//     age: 22,
//     name() {
//         console.log(this.age);
//     }
// }
// obj.name(); // when we run this in browser console, it will return the value of age from the function, here the this refers to the current object.

// 5)
// this object will not work with arrow function:

// const obj = {
//     age: 22,
//     name: () => {
//         console.log(this);
//     }
// }
// obj.name();  // when we run this in browser console, it will return the {}, we cant use this in arrow functions


// in oop '"object is an instance of class"', objects have methods and properties.

// object
// properties                                       // methods
// attributes OR states                             // Does something 
// function & procedure


// class is a  user defined blueprint or protype from which objects are created. We use keyword 'class' to initiate it:]
// syntax:
// class class-name{
//methods and properties
// }


// example of a class
// class MyFunc {
//     constructor(name, age, locat) {
//         this.myName = name;
//         this.myAge = age;
//         this.myLocat = locat;
//     }
//     discrip() {
//         console.log(`Hi, my name is ${this.myName} and i am ${this.myAge} years old, I live in ${this.locat}`);

//     }
// }
// let obj1 = new MyFunc('Ameer', 22, 'HYD');
// let obj2 = new MyFunc('Hamza', 22, 'HYD');
// obj1.discrip();
// obj2.discrip();



// Inheriting from another class
// class MyFunc {
//     constructor(name, age, locat) {
//         this.myName = name;
//         this.myAge = age;
//         this.myLocat = locat;
//     }
//     discrip() {
//         console.log(`Hi, my name is ${this.myName} and i am ${this.myAge} years old, I live in ${this.locat}`);

//     }
// }
// class Player extends MyFunc {
//     constructor(name, age, locat, game) {
//         super(name, age, locat); //super keyword is used here to inherit the properties from parent class.
//         this.myGame = game;
//     }
//     discrip() {
//         console.log(`Hi, my name is ${this.myName} and i am ${this.myAge} years old, I live in ${this.locat}, and I play ${this.myGame}`);

//     }

// }
// let obj1 = new Player('Ameer', 22, 'HYD', 'Soccer');
// obj1.discrip();




// ==>> Advanced JavaScript:

//-> Event Propagation : (Event Bubling and event Capturing)
//  refer the HTML DOM manipulation file


// -> Higher order function and call back function

// const add = (a, b) => {
//     return a + b;
// }
// const sub = (a, b) => {
//     return a - b;
// }
// const mul = (a, b) => {
//     return a * b;
// }
// const div = (a, b) => {
//     return a / b;
// }
// // here calc returns a function, hence it is higher order function.
// // and oper is passed as an argument hence it is call back function.
// const calc = (a1, b1, oper) => {
//     return oper(a1, b1);
// }
// console.log(calc(10, 2, add));



//=> Asynchronous JavaScript:
// ->Hoisting:
// It is a mechanism in JS where variables and functions declarations are moved to top of their scopes before execution of the code

// Variables declared with let  are not hoisted!

// In creation phase before execution, all function and variables declarations are moved to top of their scopes.
// mul(2, 3);

// function mul(a, b) {
//     let mult = a * b;
//     console.log(mult)
// }  
// here we are calling the mul function before declaring it, but we are still getting the correct output, this is because of HOISTING

// hoisting dont work in Arrow funtion
// mul = (a, b) => {
//     let mult = a * b;
//     console.log(mult)
// }
// mul(2, 3);

// in Variable hoisting the variable declarations are also moved to top, and its value will be undefined

// console.log(a);
// var a = 10; // returns undefined


// -> lexical scoping and Scope chain:
// It is a convention used with many programming languages that sets the scope of variable.
// lexical scoping means, the inner function can access the parent function's variable but it is not possible in reverse.
// the outer variable is global scope or it can be called window object 

// Example:

// Below we used two functions and we got correct output.
// let a = `Hello world`; // this var is global scoped
// console.log(a);
// const funcA = () => {
//     let b = `This var is in function A`; // this is function A scoped
//     console.log(b);
//     const funcB = () => {
//         let c = `This var is in function B`;// this is function B scoped
//         console.log(c);
//         console.log(a + b + c);// we can access their parent function or global scoped variables in inner functions.
//     }
//     funcB(); // we can't call funcB out side of function A.
// }
// funcA();

// here we using same above code to check if we can call variables out side of functions scope

// let a = `Hello world`; // this var is global scoped
// console.log(a);
// const funcA = () => {
//     let b = `This var is in function A`; // this is function A scoped
//     // console.log(b);
//     const funcB = () => {
//         let c = `This var is in function B`;// this is function B scoped
//         // console.log(c);
//     }
//     funcB(); // we can't call funcB out side of function A.
// }
// funcA();

// console.log(a);
// console.log(b); // here we get error: b is not defined. hence we can't access variables out side the scope
// console.log(c); // here we get error: c is not defined. hence we can't access variables out side the scope



// -> "Use Strict"
// When it is located at the top of a script, the whole script works the “modern” way.
// "use strict" should be always at the top of a Script
// There’s no way to cancel use strict

// a = 10;
// console.log(a); 

// a = 10; // this time we used 'use strict' at the top of the script
// console.log(a);// hence we will get an error: a is not defined, we have to use let var or const


// ->Closures:
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
// closures are created every time a function is created, at function creation time.

// // Example
// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();


//==>> Promises and Fetch api
// Promises are used to handle the asyncronous operations in JavaScript. A promise is an Object that keep tract about whether a certain event has happend already or Not
// And determines what happens after the events has happend.
// A Promise has Three states:
// fulfilled: Action related to the promise succeeded.
// rejected: Action related to the promise failed.
// pending: Promise is still pending i.e not fulfilled or rejected yet.

// Promises can be consumed by registering functions using .then and .catch methods.

// then()
// then() is invoked when a promise is Fulfilled.

// catch()
// catch() is invoked when a promise is either rejected or some error has occurred in execution.

// Example of a promise handling 
// const pObj1 = new Promise((fulfill, reject) => {
//     setTimeout(() => {
//         let numbers = [1, 2, 3, 4, 5];
//         fulfill(numbers);
//         // reject('There was an error in compilation');
//     }, 2000);
// })
// pObj1.then((numbers) => {
//     console.log(numbers);
// });
// pObj1.catch((error) => {
//     console.log(error);
// });


// // Another example of promises:
// const pObj1 = new Promise((fulfill, reject) => {
//     setTimeout(() => {
//         let roll_no = [1, 2, 3, 4, 5];
//         fulfill(roll_no); // this will executed on fulfillment
//         // reject('There was an error in compilation'); // this is for rejection case
//     }, 2000);
// })

// const getBio = (data) => {
//     return new Promise((fulfill, reject) => {
//         setTimeout((data) => {
//             let bio = {
//                 name: 'Ameer',
//                 age: 25
//             }
//             fulfill(`Hi there! my name is ${bio.name}, my number is ${data} and my age is ${bio.age}`); // this will executed on fulfillment
//             // reject(`This is man made error :)`);  // this is for rejection case
//         }, 2000, data)
//     });
// }
// pObj1.then((roll_no) => {
//     console.log(roll_no);
//     getBio(roll_no[1]).then((elem) => {
//         console.log(elem); //It will show the fulfilled part.
//     })
// }).catch((error) => {
//     console.log(error); // It will show the error
// })













// // Reverse a String
// let str='Ameer';
// let str2=str.split('').reverse().join('') //Split converts str to array then array.reverse() method reverses the array then arrray.join method converts back to string
// console.log(str2);

// let num=10;
// console.log(num*2);


// // Rock Paper Scissors Logic using if else:

// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return "Draw!";
//     }
//     else if (p1 == 'rock') {
//         if (p2 == "paper") {
//             return "Player 2 wom";
//         }
//         else {
//             return "Player 1 won"
//         }
//     }
//     else if (p1 == "paper") {
//         if (p2 == "scissors") {
//             return "Player 2 won";
//         }
//         else {
//             return "player 1 won"
//         }
//     }
//     else {
//         if (p2 == "rock") {
//             return "player 2 won"
//         }
//         else {
//             "Player 1 won"
//         }
//     }
// }
// let a=rps("rock","scissors");
// console.log(a);


// population increase problem from code wars
// function nbYear(p0, percent, aug, p) {
//     percent = percent * 0.01;
//     //new population will be given by
//     for (i = 0; Math.floor(p0) < p; i++) {
//         let perc = percent * p0;
//         p0 = p0 + perc + aug;
//     }
//     return i;
// }

// let a = nbYear(1500000, 0.25, 1000, 2000000); 
// console.log(a);




// // positive counter and negetive sum
// let input = [-8]
// let arr = [], a = 0, count = 0;
// if (input == [] || input == null) {
//     return [];
// }
// else {
//     for (i = 0; i < input.length; i++) {
//         if (input[i] > 0) {
//             count++;

//         }
//         else if (input[i] < 0) {
//             a = a + input[i];

//         }
//         arr[0] = count;arr[1] = a;
//     }
// }
// console.log(arr);



// // reversing words in a sentense:
// let str = "This is an example";
// let arr = str.split(" ").reverse().join(' ').split("").reverse().join("");
// console.log(arr);



// // sorting a number's digits in decending order.
// let n = 10834429;
// n = String(n);
// let x = n.split("");
// let y = x.sort().reverse().join('');
// y = parseInt(y)
// console.log(y);


// // sum of array elements of mixed type
// let arr=[9, 3, '7', '3'];
//     let a = arr.map((ele)=>{
//     return parseInt(ele);
//     }).reduce((acc,ele)=>{
//     return acc=acc+ele;
//     },0);
// console.log(a);





// function to reverse a string
// const revString = (str) => {
//     return str.split(' ').reverse().join(' ');
// }
// console.log(revString('ameer hamza'));



// function to check if the string is palindrome or not
// const revString = (str) => {
//     return str.split('').reverse().join('');
// }
// let x = 'racecar';
// y = revString(x);
// if (x === y) {
//     console.log('It is a Palindrome');
// }
// else {
//     console.log('It is not a palindrome');
// }

// return sum of numbers between given array of 2 numbers(inclusive), 

// const sumAll = (arr) => {
//     let arr1 = arr.sort((a, b) => {
//         return a - b;
//     });
//     console.log(arr1); //returns sorted given array

//     let sum = 0;
//     for (let i = arr1[0]; i <= arr1[1]; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sumAll([10,11])); //returns the sum of [1,2,3,4] =>10;




// Function to get difference of 2 arrays 
// function diffArray(arr1, arr2) {
//     return arr1.concat(arr2).filter(item => {
//         return !arr1.includes(item) || !arr2.includes(item)
//     });
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

 
// Prime number or not.

// let n = 51;
//  for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         var a = true; break;
//     }
// }
// if (a == true) {
//     console.log('Not a Prime');
// } else {
//     console.log('Prime Number');
// }


// //Another method:
// function primeNumber(n){
//     if(n > 1){
//         let result = [null]
//         for (let i = 1; i <= n; i++) {
//             if(n%i === 0){
//                 result[i] = n/i
//             }
//         }
//         let filteredResult = result.filter(el => el)
//         if(filteredResult.length === 2){
//             console.log(`${n} is a Prime number`)
//         } else {
//             console.log(`${n} is not a Prime Number`)
//         }

//     } else {
//         console.log("The given number must be greater than 1")
//     }
// }

// primeNumber(1.3)
