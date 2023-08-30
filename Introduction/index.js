//Single line quotes
console.log('John');

//Double Line quotes
console.log("Software");

//Backticks
console.log(`Hello`);

//!ARITHMETICS
/*
console.log (2 + 3); // Addition
console.log (3 - 2); // Subtraction
console.log (2 * 3); // Multiplication
console.log (3 / 2); // Division
console.log (3 % 2); // Modulus - finding remainder
console.log (3 ** 2); // Exponentiation 3 ** 2 == 3 * 3 
*/

//!INTRODUCTION TO DATA TYPES
//**JavaScript primitive data types: String, Number, Boolean, undefined, Null, and Symbol.

//**Strings
/*
'a';
'Asabeneh';
'Asabeneh';
'Finland';
*/

//**Booleans;
// A boolean data type is either a true or false value.
/*
true; // if the light is on, the value is true
false; // if the light is off, the value is false
*/

//**Undefined
// if we don't assign a value to a variable, the value is undefined. In addition to that, if a function is not returning anything, it returns undefined.
/*
let firstName;
console.log (firstName); // undefined, because it is not assigned to a value yet
*/

//**Null
// means an empty value.
/*
let emptyValue = null;
*/

//!CHECKING DATA TYPES
//we use the typeof operator
console.log(typeof 'Sharon');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

//!VARIABLES
//**For a variable that changes at a different time, we use let. If the data does not change at all, we use const.
/*
A valid JavaScript variable name must follow the following rules:

A JavaScript variable name should not begin with a number.
A JavaScript variable name does not allow special characters except dollar sign and underscore.
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name should not have space between words.
*/
let Name = 'John'
let last_name = 'Doe'
let num1 = 10;
let num_2 = 20;
let _num_3 =30;
let $num4 = 40;

console.log(Name, last_name, num1, num_2, _num_3, $num4);

//Declaring variables in a single line
let name = 'Jane' , _age = 30, profession = 'teacher'
console.log(name, _age, profession);

//*TODO: DAY 1 EXERCISES

//** Write a single line comment which says, comments can make code readable

console.log('Comments can make code readable');

//** Write another single comment which says, Welcome to 30DaysOfJavaScript

console.log('Welcome to 30DaysOfJavascript');

//** Write a multiline comment which says, comments can make code readable, easy to reuse and informative

console.log("Comments can make code readable, easy to reuse and informative");

//** Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

let first = 'John';
let is_sunny = true;
// let last_
// console.log(last);
let emptyValue = null;

console.log(first, is_sunny, emptyValue);


//** Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

console.log (typeof 'Jane');
console.log (typeof true);
console.log (typeof undefined);
console.log (typeof null);


//** Declare four variables without assigning values

// let _first_name = '';
// const gravity = 
// $num3= 
// is_windy =

// console.log(gravity, firstName, $num3, is_windy);

//** Declare four variables with assigned values

const planet = 'Earth';
let first_name = 'Jane';
num1 = 12;
is_windy = false;

console.log(planet, first_name, num1, is_windy);


//** Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = 'Jane';
let lastName = 'Doe';
let maritalStatus = 'single';
let country = 'Kenya';
let age = 20
console.log(firstName, lastName, maritalStatus, country, age);

//** Declare variables to store your first name, last name, marital status, country and age in a single line

let _first_name_ = 'Jane', _last_name = 'Doe', marital_status = 'single', _country = 'Kenya', _age_ = 20

console.log(_first_name_, _last_name, marital_status, _country, _age_);

//** Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
// I am 25 years old.
// You are 30 years old.

myAge = 'I am 25 years old.';
yourAge = 'You are 30 years old.'

console.log(myAge, yourAge);