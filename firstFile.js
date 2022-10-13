//First Program:
// console.log("Hello World")


// ==> Data Types in JavaScript.
/*
basic of Data Types:
2 types

1)Primitive type
Number, String, Boolean, null, Symbol, Undefined

2) Non Primitive type
Object, Arrays
*/

/* 1)Numbers : Integers are limited by ±(253-1).*/
// there is bigit for arbitrary length.
// let n = 10;
// console.log(n);//integer
// n = 10.002;
// console.log(n);//floating

// console.log(1 / 0);
// console.log(0 / 1);
// console.log(Infinity);

// NaN stands for Not a Number.
// all of the below consoles prints NaN
// console.log(NaN + 1);
// console.log(NaN + NaN); 
// console.log(NaN * 5);
// console.log(NaN * NaN);

// console.log(NaN ** 0);//this prints 0

// let newName = "John";
// console.log(newName);

// 2) Strings: A string may have zero or more characters, there’s no separate single-character type.
// string values should be enclosed with single('') or double("") quotes. Strings can also be assigned in backticks using $ charecter : ${...}
// newName = "Ameer";
// console.log(newName);
// console.log(typeof (newName));

/* 3) Boolean : it is used for condition checks and displays true/false */
// let a = 4 != 5;
// let isGreater = 0 > 1;
// console.log(isGreater);
// console.log(typeof (isGreater));
// console.log(a);
// console.log(typeof (a));


/* 4) null : It is a standalone type that has a single value null*/
// let x = null;
// console.log(x);//here the x value is null as declared
// console.log(typeof (x)); // and its type of returns object

/* 5) Undefined : it is used for unassigned values.
// let myName; // here the variable is only declared not initialized.
// console.log(myName); //returns undefined
// console.log(typeof (myName)); // returns undefined

// myName = 'Ameer';//now assigning a values to the variable myName.
// console.log(myName);
// console.log(typeof (myName));

// myName = undefined;//now assigning the values as undefined to the variable myName.
// console.log(myName);// returns undefined
// console.log(typeof (myName));// returns undefined
*/

/* 6) Symbol
The symbol type is used to create unique identifiers for objects.
*/

//Non-Primitive Data Type:
/* Object is a non-primitive Data Type in js. It is used to store collections of data and more complex entities.*/


// Typeof operator gives the following results of different types. //Syntax : typeof(variable);
// typeof undefined // "undefined"
// typeof 0 // "number"
// console.log(typeof (10n)) "bigint"
// typeof true // "boolean"
// typeof "foo" // "string"
// typeof Symbol("id") // "symbol"
// typeof Math // "object"  (1)
// typeof null // "object"  (2)
// typeof alert // "function"  (3)


//==> few browser-specific functions.
// We covered 3 browser-specific functions to interact with visitors: alert, prompt and confirm.

// alert
// shows a message.
// alert('text')

// prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// varable = prompt(title, [default]); // here the default field is optional, [..] square brackets denotes optional.

// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
// varable = confirm(question);


// ==>Type Convertion of primiitive data types
// --> Strings: Using String(value) funtion
//A false becomes "false", null becomes "null", etc.

// let a = true;
// console.log(a);
// console.log(typeof (a));
// a = String(a);
// console.log(a);
// console.log(typeof (a));

// -->Numeric Conversion : Number(value) funtion is used to convert explicitly
// let a = ' 10 ';
// console.log(a);
// console.log(typeof (a)); //String
// a = Number(a);
// console.log(a);
// console.log(typeof (a)); // Nubmer

// Value	                Becomes…
// undefined	            NaN
// null	                    0
// true and false	        1 and 0
// string	                Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

// a = '12a';
// console.log((a));
// console.log((Number(a)));

// -->Boolean convertion: Boolean(value) function is used
// boolean convertion gives either true or false
// undefined, 0, null, NaN, ""(Empty String) and ofcourse False becomes false after conversion
// any other value returns True.

// let b = 1
// console.log(b);
// console.log(Boolean(b));

// let x = ''; y = 'text'
// console.log(x);
// console.log(Boolean(x));
// console.log(y);
// console.log(Boolean(y));


//==>Basic operators, maths
// Arithmetic Operators OR Maths Operator.
// Addition +
// Subtraction -
// Multiplication *
// Division /
// Remainder % (Modular Divition)
// Exponentiation ** (power)

// when + operator is applied to numbers, It gives the sum as result.
// But if this is applied to Strings then it concatenates (merges) with each other. 
//Hence if any of the operand is string then the others will be also converted to String.
// let a = 10 + 12.9;
// console.log(a);
// let a = 10 + '12.9';
// console.log(a);
// let b = 1 + 2 + '0' + 10 + 12.9;// here 1 and  2 is added and after string is spotted it treats reamaining as string.
// console.log(b);

// let c = '10' - 2;// it converts back the string into number.
// console.log(c);
// let a = '10' / '2';// here it / operator makes it to convert both into numbers.
// console.log(a);

// console.log(5 % 3);// gives the remainder.
// console.log(5 ** 3); //gives Exponent/raises 5 to power of 3

// Assignment (=) operator is used to assign a value to the variable. 
// let a = 100;
// console.log(a);


// Bit Wise Operators in js
// AND (&)
// OR (|)
// << (LEFT SHIFT)
// >> (RIGHT SHIFT)
// ^ (XOR)
// ~ (NOT) 

// let a = (5 + 5, 1 + 1);
// console.log(a);

// let a = 1, b = 1;
// let c = ++a;;
// let d = b++;
// console.log(a)
// console.log(b); console.log(c); console.log(d);

// Exercise:

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a);
// console.log(x);

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3")
// console.log("2" * "3")
// console.log(4 + 5 + "px")
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log("  -9  " + 5)
// console.log("  -9  " - 5)
// console.log(null + 1) //null becomes 0 after the numeric conversion.
// console.log(undefined + 1) //undefined becomes NaN after the numeric conversion.
// console.log(" \t \n" - 2)

// ==>Comparisons:
// == Equals to
// != Equals to
// > Greater than
// < Less than
// >= Greater than or equal
// <= less than or equal

//Number Comparison
// console.log(5 < 4);


// let a=10;
// let b='10';
// console.log(a==b);
// console.log(a===b);

//String comparison:
// console.log('5' < '4');
// console.log('a' > 'z');
// console.log(1 === '1');

//Comparisons of different types:
// console.log(1 == true)
// console.log('' == false); //returns true
// console.log('0' == true);// returns false

// there is another operator for this problem
//=== operator is used to check strict equality check.
// console.log('' === false) // this will return false.
// The values null and undefined equal == each other and do not equal any other value.

//Exercise: // Comparisons
// console.log(5 > 4) //returns true
// console.log("apple" > "pineapple"); //returns False
// console.log("2" > "12")// true asa per thier first charecters
// console.log(undefined == null) //true
// console.log(null == "\n0\n")// null only equals null and undefined




// Objects:

// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     }
// };
// console.log(person.name);
// console.log(person.age);
// person.bio();
// person.introduceSelf();


// const person = {
//     name: ['Bob', 'Smith'],
//     age: 25,
//     bio() {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name[0]} ${this.name[1]}.`);
//     }
// };
// console.log(person['age']);
// person.introduceSelf();
// person.age = 30;
// console.log(person['age']);
// person['name'][1] = 'alen';
// person.introduceSelf();


// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = Object.assign({}, user);
// console.log(user.sizes === clone.sizes);
// user.sizes.width++;
// console.log(clone.sizes.width);
// clone.name = 'Ameer';
// console.log(clone.name);






// debugger
// function fibonacciRecursive(n) {
//     if (n < 2) {
//         return n
//     }
//     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
// }

// console.log(fibonacciRecursive(8));
