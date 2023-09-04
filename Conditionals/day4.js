// Conditions can be implementing using the following ways:
// if
// if else
// if else if else
// switch
// ternary operator

//* If
// if is to used check if a condition is true and to execute the block code.
// let num = 3;
// if(num > 0) {
//     console.log(`${num} is a positive number`);
// }

// let isRaining = true;
// if(isRaining){
//     console.log('Remember to take a raincoat');
// }

//* If Else
// If condition is true the first block will be executed, if not the else condition will be executed.
// let numm = -3;
// if(numm > 0){
//     console.log(`${numm} is a positive number`);
// } else{
//     console.log(`${numm} is a negative number`);
// }

// let isRaining = false;
// if(isRaining){
//     console.log('You need a raincoat');
// } else {
//     console.log('No need for a raincoat');
// }

//* If Else if Else
// We use else if when we have multiple conditions.
// let a = -7;
// if(a > 0){
//     console.log(`${a} is a positive number`);
// } else if (a < 0){
//     console.log(`${a} is a negative number`);
// } else if ( a == 0){
//     console.log(`${a} is zero`);
// } else {
//     console.log(`${a} is not a number`);
// }

// let weather = 'sunny'
// if(weather == 'rainy'){
//     console.log('You need a raincoat');
// } else if (weather == 'cloudy'){
//     console.log('It might be cold, you need a jacket');
// } else if (weather == 'sunny'){
//     console.log('Go out freely');
// } else {
//     console.log('No need for raincoat');
// }

//* Switch
// Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block.
// let weather = 'cloudy'
// switch(weather){
//     case 'rainy':
//         console.log('You need a raincoat');
//         break
//     case 'cloudy':
//         console.log('It might be cold, you need a jacket');
//         break  
//     case 'sunny':
//         console.log('Go out freely');
//         break
//     default:
//         console.log('No need for raincoat');
// }

// let dayUserInput = 'Monday'
// let day = dayUserInput.toLowerCase()

// switch(day){
//     case 'monday':
//         console.log('Today is Monday');
//         break
//     case 'tuesday':
//         console.log('Today is Tuesday');
//         break
//     case 'wednesday':
//         console.log('Today is Wednesday');
//         break
//     case 'thursday':
//         console.log('Today is Thursday');
//         break
//     case 'friday':
//         console.log('Today is Friuday');
//         break
//     case 'saturday':
//         console.log('Today is Saturday');
//         break
//     case 'sunday':
//         console.log('Today is Sunday');
//         break
//     default:
//         console.log('It is not a week day');
// }

// let num = 0
// switch (true){
//     case num > 0:
//         console.log('Number is positive');
//         break
//     case num == 0:
//         console.log('Number is zero');
//         break
//     case num < 0:
//         console.log('Number is negative');
//         break
//     default:
//         console.log('That is not a number');

// }

// //* Ternary Operators
// let isRaining = false
//     ? console.log('You need a raincoat')
//     : console.log('No need for raincoat');
    

//! 💻 Exercises
//? Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
let age = 12;
let diff = 18 - age ;

if(age > 18){
    console.log('You are old enough to drive')
} else {
    console.log(`You are left with ${diff} years to drive`);
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.

let myAge = 23;
let yourAge = 30;
let difff = yourAge - myAge 

if(myAge > yourAge){
    console.log(`I am ${difff} years older than you`);
} else {
    console.log(`You are ${difff} years older than me`);
}


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//     let a = 4
//     let b = 3
//     4 is greater than 3
// using if else
    let a = 4
    let b = 3

    if(a > b){
        console.log(`${a} is greater than ${b}`);
    } else {
        console.log(`${a} is less than ${b}`);
    }

// ternary operator.
 a > b 
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${a} is less than ${b}`)

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.

let number = 3
if(number % 2 == 0){
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}



//? Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let grade = 90
if(grade >= 80 && grade <= 100){
    console.log('Grade A');
}else if (grade >= 70 && grade <= 89){
    console.log('Grade B');
}else if(grade >=60 && grade <=69){
    console.log('Grade C');
}else if(grade >=50 && grade <=59){
    console.log('Grade D');
}else {
    console.log('Grade F');
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let userInput = 'March';
let month = userInput.toLowerCase();

switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer');
        break;
    default:
        console.log('Input month');
}


let months = 'January'
let autumnMonth = [ 'September','October','November']
let winterMonth = [ 'December','January', 'February']
let springMonth = [ 'March','April','May']
let summerMonth = [ 'June', 'July', 'August']

if(autumnMonth.includes(months)){
    console.log('The season is Autumn');
} else if (winterMonth.includes(months)){
    console.log('The season is Winter');
} else if (springMonth.includes(months)){
    console.log('The season is Spring');
} else if(summerMonth.includes(months)){
    console.log('The season is Summer');
} else {
    console.log('Input any month');
}
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

inputDay = 'Saturday'
let workingDays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday']
let weekend = ['Saturday','Sunday']

if(workingDays.includes(inputDay)){
    console.log(`${inputDay} is a working day`);
} else if (weekend.includes(inputDay)){
    console.log(`${inputDay} is a weekend`)
} else {
    console.log('Enter any day')
}


//? Exercises: Level 3
// Write a program which tells the number of days in a month.
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.
let monthDay = 'March'

let days31 = ['January','March' ,'May' ,'July' ,'August' ,'October' ,'December' ]
let days30= ['April' , 'June' , 'September','November' ]
let day28 = 'February'

if(days31.includes(monthDay)){
    console.log(`${monthDay} has 31 days`);
} else if (days30.includes(monthDay)){
    console.log(`${monthDay} has 30 days`);
} else {
    console.log(`${monthDay} has 28 days`);
}

// Write a program which tells the number of days in a month, now consider leap year.
//* Leap years occur every 4 years, except for years that are divisible by 100 but not by 400.

function isLeapYear (year){
    return(year % 4 === 0 &&  year % 100 !== 0) || (year % 400 === 0);
}

if(monthDay === day28){
    const currentYear = new Date().getFullYear();
    if(isLeapYear (currentYear)){
        console.log(`${monthDay} has 29 days (Leap Year)`);
    } else {
        console.log(`${monthDay} has 28 days`);
    }
}else if (days31.includes(monthDay)){
    console.log(`${monthDay} has 31 days`);
}else if (days30.includes(monthDay)){
    console.log(`${monthDay} has 30 days`);
} else {
    console.log('Enter any month');
}
