//  1) Simple Hello World:
// console.log('Hello World'); // returns 'Hello World'

// 2) Addition of two numbers:
// let a = 2, b = 4, c;
// c = a + b;
// console.log(c); //returns 6


// 3) Square Root of a number:
// let a = 9, b;
// b = Math.sqrt(a);
// console.log(b); // returns 9

// 4) Area of triangle: 
// [When base and height is given as b,h] 1/2*b*h
// let b = 10, h = 5, area;
// area = 1 / 2 * b * h;
// console.log(area); //returns 25

// [when three sides are given as a,b,c]  Math.sqrts*(s-a)*(s-b)*(s-c)

// let a = 4, b = 5, c = 4, area, s;
// s = (a + b + c) / 2;
// console.log(s);
// area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(area);

//5) Swapping two numbers:
//using a temp variable.
// let a = 2, b = 3, temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// without using third variable.
// let a = 3, b = 2;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);


// 6) convert kms in to miles:
// const convert = (kms) => {
//     return 0.62137 * kms;
// }
// console.log(`50 kms in miles are ${convert(50)}`); // converts into miles


//7) convert celcius into fahrenheit
// let celc = 37;
// const convert = (cels) => {
//     return (cels * 9 / 5) + 32;
// }
// console.log(`${celc} celcius in fahrenheit is ${convert(celc)}`); // returns the temp in fahrenheit.

// 8) check if the given no is positive negative or zero
// let num = -1;
// if (num == 0) {
//     console.log(`Number is zero`);  // return this zero
// }
// else if (num > 0) {
//     console.log(`Number is Positive`); // return this Positive
// }
// else {
//     console.log(`Number is Negative`); // return this Negative
// }


//9) JavaScript Program to Generate a Random Number using Math.random() Function
// let a;
// a = Math.random(); // this will return a random number betweeen 0 and 1 in decimal values
// console.log(a*100); //to get numbers between 0 to 100 we multiplited it with 100

// 10) JavaScript Program to Check if a Number is Odd or Even

// let x = 6;
// if (x % 2 == 0) {
//     console.log(`The given number ${x} is Even`);
// }
// else {
//     console.log(`The given number ${x} is Odd`);
// }

// we can also use ternary  opereator;
// let x = 3;
// let oddOrEven = x % 2 == 0 ? 'Even' : 'Odd';
// console.log(oddOrEven);

// 11) JavaScript Program to Check if a Number is a Prime Number
// let x = 11;
// if (x == 1) {
//     var res = `Given number ${x} is neigther prime or composite number`;
// }
// else if (x < 1) {
//     var res = `Given number ${x} is not a prime number `;
// }
// else if (x == 2) {
//     var res = `Given number ${x} is Prime Numbr`;
// }
// else {
//     for (let i = 2; i < x; i++) {
//         if (x % i == 0) {
//             var res = `Given number ${x} is not a prime number`;
//             break;
//         }
//         else {
//             var res = `Given number ${x} is Prime Number`; // this will return When the number is prime number
//         }
//     }
// }
// console.log(res);

// 12) JavaScript Program to Find Largest Number Among Three Numbers:

// let a = 20, b = 30, c = 24;
// if (a > b && a > c) {
//     console.log(`${a} is greater than ${b} and ${c}`);
// }
// else if (b > a && b > c) {
//     console.log(`${b} is greater than ${a} and ${c}`);
// }
// else {
//     console.log(`${c} is greater than ${a} and ${b}`);
// }

// we can use Math.max()

// let a = 20, b = 30, c = 24, x;
// x = Math.max(a, b, c);
// console.log(`MAximum of (${a},${b},${c}) is ${x}`);

// 13) JavaScript Program to Find the Factorial of a Number:
// let num = 10, factor = 1;

// const factorial = (num) => {
//     if (num == 0) {
//         console.log('The Factorial of the number is 1');
//     }
//     else if (num < 1) {
//         console.log(`the factorial of Negative number is not possible`);
//     }
//     else {
//         for (let i = 1; i <= num; i++) {
//             factor = factor * i;
//         }
//         console.log(`The factorial of given number ${num} is ${factor}`);
//     }
// }
// factorial(num);

// without using function:
// let num = 10, factor=1;
// if (num == 0) {
//     console.log('The Factorial of the number is 1');
// }
// else if (num < 1) {
//     console.log(`the factorial of Negative number is not possible`);
// }
// else {
//     for (let i = 1; i <= num; i++) {
//         factor = factor * i;
//     }
//     console.log(`The factorial of given number ${num} is ${factor}`);
// }



// 14)