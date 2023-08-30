//------------------- LEVEL ONE -------------------------
// QUESTION 1
// Get user input using prompt(“Enter your age:”). 
// If user is 18 or older , give feedback:'You are old enough to drive'
//  but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// const age = prompt('Enter you age');
// if (age > 18) {
//     console.log("You are old enough to drive");
// } else {
//     console.log("You are left with", 18 - age);
// }

// QUESTION 2
// Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older (me or you).
//  Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 9;
// let yourAge = 17;
// if (myAge > yourAge){
//     console.log(`I am ${myAge-yourAge} older than you`);
// } else {
//     console.log(`You are ${yourAge-myAge} older than me`);
// }

// QUESTION 3
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// let a = 4;
// let b = 3;
// if (a > b){
//     console.log(`${a} is greater than ${b}`);
// } else {
//     console.log(`${a} is less than ${b}`);
// }

// ternary operator.
// let a = 4;
// let b = 3;
// let age = (a > b) ? 'greater than' : 'less than';
// console.log(`${a} is ${age} ${b}`);

// QUESTION 4
// Even numbers are divisible by 2 and the remainder is zero. 
// How do you check, if a number is even or not using JavaScript?

// let num = 11;
// if (num % 2 == 0){
//     console.log(`${num} is an even number`);
// } else{
//     console.log(`${num} is an odd number`);
// }


//------------------------LEVEL TWO -----------------
// QUESTION 1
// Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let scores = 12
// if(scores >= 90){
//     console.log(" Grade A ");
// }else if (scores >= 70){
//     console.log(" Grade B ");
// }else if (scores >= 60){
//     console.log(" Grade C ");
// }else if(scores >=50){
//     console.log(" Grade D ");
// }else {
//     console.log(" Grade F");
// }

//Question 2
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

function findSeason(M){
    switch (M){
        case 9:
        case 10:
        case 11:
            console.log('The season is Autumn');
            break;
        case 12:
        case 1:
        case 2:
            console.log('The season is Winter');
            break;
        case 3:
        case 4:
        case 5:
            console.log('The season is Spring');
            break;
        case 6:
        case 7:
        case 8:
            console.log('The season is Summer');
    }
}

let M =1;

findSeason(M);