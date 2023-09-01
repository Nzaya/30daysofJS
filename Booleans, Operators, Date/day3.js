//for alert in node
// const notifier = require('node-notifier');

//* Booleans
//! Boolean value is either true or false.

// let isLightOn = true
// let isRaining = false
// let istruVal = 4 > 3
// let falseVal = 4 < 3
// console.log(isLightOn, isRaining, istruVal, falseVal);

//* Truthy values
//! All numbers(positive and negative) are truthy except zero
//! All strings are truthy except an empty string ('')
//! The boolean true

//* Falsy values
// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string

//* Undefined
// let firstName
// console.log(firstName);

//* Null
// let empty = null
// console.log(empty);

//* Operators
// Assignment operators
// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b

// let numOne = 4
// let numTwo = 3
// let sum = numOne + numTwo
// let diff = numOne - numTwo
// let mult = numOne * numTwo
// let div = numOne / numTwo
// let remainder = numOne % numTwo
// let powerOf = numOne ** numTwo
// console.log(sum, diff, mult, div, remainder, powerOf);

// const PI = 3.14
// let radius = 100
//Area of a circle
// const areaOfCircle = PI * radius * radius
// console.log(areaOfCircle);

// const gravity = 9.81
// let mass = 72
//Weight of an object
// const weight = mass * gravity
// console.log(weight);

// const boilingPoint = 100
// const bodyTemp = 37
// console.log(`The boiling point of water is ${boilingPoint} while the human body temprature is ${bodyTemp}`);

//* Comparison Operators
// console.log(3 > 2)              // true, because 3 is greater than 2
// console.log(3 >= 2)             // true, because 3 is greater than 2
// console.log(3 < 2)              // false,  because 3 is greater than 2
// console.log(2 < 3)              // true, because 2 is less than 3
// console.log(2 <= 3)             // true, because 2 is less than 3
// console.log(3 == 2)             // false, because 3 is not equal to 2
// console.log(3 != 2)             // true, because 3 is not equal to 2
// console.log(3 == '3')           // true, compare only value
// console.log(3 === '3')          // false, compare both value and data type
// console.log(3 !== '3')          // true, compare both value and data type
// console.log(3 != 3)             // false, compare only value
// console.log(3 !== 3)            // false, compare both value and data type
// console.log(0 == false)         // true, equivalent
// console.log(0 === false)        // false, not exactly the same
// console.log(0 == '')            // true, equivalent
// console.log(0 == ' ')           // true, equivalent
// console.log(0 === '')           // false, not exactly the same
// console.log(1 == true)          // true, equivalent
// console.log(1 === true)         // false, not exactly the same
// console.log(undefined == null)  // true
// console.log(undefined === null) // false
// console.log(NaN == NaN)         // false, not equal
// console.log(NaN === NaN)        // false
// console.log(typeof NaN)         // number

// console.log('mango'.length == 'avocado'.length)  // false
// console.log('mango'.length != 'avocado'.length)  // true
// console.log('mango'.length < 'avocado'.length)   // true
// console.log('milk'.length == 'meat'.length)      // true
// console.log('milk'.length != 'meat'.length)      // false
// console.log('tomato'.length == 'potato'.length)  // true
// console.log('python'.length > 'dragon'.length)   // false

//* Logical Operators
//! The && operator gets true only if the two operands are true. 
//! The || operator gets true either of the operand is true. 
//! The ! operator negates true to false and false to true.

// && ampersand operator example
// const a = 4 > 3 && 10 > 5         // true && true -> true
// const b = 4 > 3 && 10 < 5         // true && false -> false
// const c = 4 < 3 && 10 < 5         // false && false -> false

// || pipe or operator, example
// const d = 4 > 3 || 10 > 5         // true  || true -> true
// const e = 4 > 3 || 10 < 5         // true  || false -> true
// const f = 4 < 3 || 10 < 5         // false || false -> false

// Negation examples
// let g = 4 > 3                     // true
// let h = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true

//* Increment Operator
// Pre-increment
// let count = 0
// console.log(++count);
// console.log(count);

// Post-increment
// let num = 0
// console.log(num++);
// console.log(num);

//* Decrement Operator
// Pre-decrement
// let countt = 0
// console.log(--countt);
// console.log(countt);

// Post-decrement
// let ccount = 0
// console.log(ccount--);
// console.log(ccount);

//* Ternary Operators
// let isRaining = true
// isRaining 
//     ? console.log('You need a raincoat')
//     :console.log('No need for a raincoat');
// console.log(isRaining);

// let isWindy = false
// isWindy 
//     ? console.log('You need boots')
//     : console.log('No need for boots');

// console.log(isWindy);

// let number = 5
// number > 0
//     ? console.log(`${number} is a positive interger`)
//     : console.log(`${number} is a negative interger`);

// let num = -5
// num > 0
//     ? console.log(`${num} is a positive number`)
//     : console.log(`${num} is a negative number`);

//* Operator Precedence
// console.log(3 + 4 * 5);
// console.log(4 * 3 ** 2); // 3 to power of 2 then * 4
// let a;
// let b;
// console.log((a = b = 5));

// console.log(3 + 10 * 2);
// console.log(3 + (10 * 2));
// console.log((3 + 10) * 2);

// const c = 4 ** 3 ** 2; //Same as 4 ** (3 ** 2)
// const d = 4 / 3 / 2 ; //  Same as (4 / 3) / 2
// console.log(c, d);

// const e = 1
// const f = 2
// num = typeof e + f //Equivalent to (typeof e) + f;
// console.log(num);

//* Window Methods
// Window alert() method
// alert(message)
// alert('Welcome to 30DaysOfJavaScript')

// Window prompt() method
// prompt('required text', 'optional text')
// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// Window confirm() method
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

//* Date Object
// We use  getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()
// Creating a time object
// const now = new Date()
// console.log(now);

// Getting full year
// const noww = new Date()
// console.log(now.getFullYear());

// Getting month
// const nnow = new Date()
// console.log(nnow.getMonth());

// Getting date
// const noow = new Date()
// console.log(noow.getDate());

// Getting day
// const nnoow = new Date()
// console.log(nnoow.getDay());

//Getting Hours
// const now = new Date()
// console.log(now.getHours());

// Getting minutes
// const nnow = new Date()
// console.log(nnow.getMinutes());

// Getting seconds
// const noow = new Date()
// console.log(noow.getSeconds());

//* Getting time
// Using getTime()
// const now = new Date()
// console.log(now.getTime()); //this is the number of seconds passed from January 1, 1970

//Using Date.now()
// const allSeconds = Date.now()
// console.log(allSeconds);

// const timeInSeconds = new Date().getTime()
// console.log(timeInSeconds);
// console.log(allSeconds == timeInSeconds);

// const now = new Date()
// const year = now.getFullYear()
// const month = now.getMonth()
// const date = now.getDate()
// const hours = now.getHours()
// const minutes = now.getMinutes()
// console.log(`${date}/${month}/${year}/${hours}:${minutes}`);


//! 💻 Day 3: Exercises
//? Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// firstName = 'Jane'
lastName = 'Doe'
country = 'Egypt'
city = 'Cairo'
isMarried = true
year = 2023

// console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log('10' == 10);

// Check if parseInt('9.8') is equal to 10
num = '9.8'
numm = parseInt(num)
console.log(numm == 10);

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
planet = 'Mars'
number = 43 
arr = [34, 45, 76]
emptyArr = []
obj = {name: 'John'}
emptyObj = {}
const regex = /pattern/

// Write three JavaScript statement which provide falsy value.
const isFalse = false
const zero = 0
const emptyString = ''
const nullValue = null
let undefinedValue;
const notANumber = NaN
const negativeZero = -0


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3)  //? true
console.log(4 >= 3)  //? true
console.log(4 < 3 )  //? false
console.log(4 <= 3)  //? false
console.log(4 == 4)  //?  true
console.log(4 === 4 ) //?  true
console.log(4 != 4 ) //? false
console.log(4 !== 4)  //?  false
console.log(4 != '4')  //? false
console.log(4 == '4')  //? true
console.log(4 === '4') //? false


// Find the length of python and jargon and make a falsy comparison statement.
const a = 'python'
const b = 'jargon'
console.log(a.length != b.length);
console.log('----------------------------');
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12 )//true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true

// There is no 'on' in both dragon and python
let word = 'python , dragon'
available = word.match('on')
available
    ? console.log('On is available')
    : console.log('On is not available');
console.log(available);

// Use the Date object to do the following activities
const now = new Date()

// What is the year today?
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth());

// What is the date today?
console.log(now.getDate());

// What is the day today as a number?
console.log(now.getDay());

// What is the hours now?
console.log(now.getHours());

// What is the minutes now?
console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());


//?  Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

/* base = prompt("Enter base")
height = prompt("Enter height")
area = 0.5 * base * height
console.log(area); */


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

/* a = prompt("Enter side a ")
b = prompt(" Enter side b")
c = prompt(" Enter side c")
perimeter = a + b + c
console.log(perimeter)
*/

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

/* length = prompt("Enter length")
width = prompt("Enter width")
area = length x width
perimeter = 2 x (length + width)
console.log(`The area of the rectangle is ${area} and the perimeter is ${perimeter}`)
*/

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

/* 
const PI = 3.14
radius = prompt("Enter radius")
area = pi x r x r
circumfrence = 2 x pi x r
console.log(`The area of a circle is ${area} and the circumfrence is ${circumfrence}`)
*/

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

const slope = 2
const xIntercept = 2 / slope
const yIntercept = -2

console.log(`Slope (m): ${slope}`)
console.log(`X-Intercept: ${xIntercept}`)
console.log(`Y-Intercept: ${yIntercept}`)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

const x1 = 2
const y1 = 2
const x2 = 6
const y2 = 10
const sloppe = (y2 - y1) / (x2 - x1)
console.log(`The slope between (${x1}, ${y1}) and (${x2}, ${y2}) is: ${slope}`);


// Compare the slope of above two questions.
console.log(slope == sloppe);

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

/* hours = prompt("Enter hours")
rate_per_hour = prompt("Enter Rate per Hour")

weekly_pay = hours * rate_per_hour
console.log(weekly_pay)
*/


// If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = 'Sharon'
if(name.length > 7){
    console.log("Your name is long");
} else{
    console.log("Your name is short");
}

let isName = 'JaneDoes'
isName.length > 7
    ? console.log("Your name is long")
    : console.log("Your name is short");

// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let familyName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName = 'Asabeneh'
let familyName = 'Yetayeh'

if(firstName.length > familyName.length){
    console.log(`Your first name ${firstName} is longer than ${familyName}`);
} else{
    console.log("This is incorrect");
}

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

let myAge = 250
let yourAge = 25
diff = myAge - yourAge
console.log(`I am ${diff} years older than you`);


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

let age = 12
let dif = 18  - age
if (age > 18){
    console.log(`You are ${age}. You are old enough to drive`)
} else {
    console.log(`You are ${age}. You will be allowed to drive after ${dif} years`);
}

let birthYear = 1992
let currentYear = 2023
let agee  = currentYear - birthYear
let ddif = 18 - agee

if(agee >= 18){
    console.log(`You are ${agee}. You are old enough to drive`)
} else{
    console.log(`You are ${agee}. You will be allowed to drive after ${ddif} years`);

}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.

agge = 100
daily_seconds = 86400
yearly_seconds = 365 * daily_seconds
lived_for = agge * yearly_seconds
console.log(`You've lived for ${lived_for} seconds`);


// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

const currentDate = new Date();

const addLeadingZero = (number) =>{
    return number < 10 ? `0${number}` : number
}
// Format 1: YYYY-MM-DD HH:mm
const format1 = `${currentDate.getFullYear()}-${addLeadingZero(currentDate.getMonth() + 1)}-${addLeadingZero(currentDate.getDate())} ${addLeadingZero(currentDate.getHours())}:${addLeadingZero(currentDate.getMinutes())}`;

// Format 2: DD-MM-YYYY HH:mm
const format2 = `${addLeadingZero(currentDate.getDate())}-${addLeadingZero(currentDate.getMonth() + 1)}-${currentDate.getFullYear()} ${addLeadingZero(currentDate.getHours())}:${addLeadingZero(currentDate.getMinutes())}`;

// Format 3: DD/MM/YYYY HH:mm
const format3 = `${addLeadingZero(currentDate.getDate())}/${addLeadingZero(currentDate.getMonth() + 1)}/${currentDate.getFullYear()} ${addLeadingZero(currentDate.getHours())}:${addLeadingZero(currentDate.getMinutes())}`;

console.log(`Format 1: ${format1}`);
console.log(`Format 2: ${format2}`);
console.log(`Format 3: ${format3}`);

//? Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const newDate = new Date();

const addZero = (number) => {
    return number < 10 ? `0${number}` : number
}
const format = `${currentDate.getFullYear()}-${addLeadingZero(currentDate.getMonth() + 1)}-${addLeadingZero(currentDate.getDate())} ${addLeadingZero(currentDate.getHours())}:${addLeadingZero(currentDate.getMinutes())}`;
console.log(format);