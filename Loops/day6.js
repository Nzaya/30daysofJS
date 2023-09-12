//* for Loop
// for(initialization, condition, increment/decrement){
    // code goes here
//   }
// for(let i =0; i <= 5; i++){
//     console.log(i);
// }
// console.log('----------');
// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }
// console.log('----------');
// for(let i = 0; i <=5 ; i++){
//     console.log(`${i} * ${i} = ${i * i}`);
// }

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArr = []
// for(let i =0 ; i < countries.length; i++){
//     newArr.push(countries[i].toUpperCase())
// }
// console.log(newArr);

//* Adding all elements in the array
// const numbers = [1,2,3,4,5]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i]    
// }
// console.log(sum);

//* Creating a new array based on the existing array     
// const numbers = [1,2,3,4,5]
// const newArr = []
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//     newArr.push(numbers[i] ** 2)
// }
// console.log(newArr);

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArrr = []
// for(let i = 0; i < countries.length; i++){
//     newArrr.push(countries[i].toUpperCase())
// }
// console.log(newArrr);

//* while loop
// let i = 0
// while(i <= 5){
//     console.log(i)
//     i++
// }

//* do while loop
// let i = 0
// do{
//     console.log(i)
//     i++
// } while (i <=5 )

//* for of loop
// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array
// const numbers = [1,2,3,4,5]
// for(const num of numbers){
//     console.log(num);
// }

// for(const num of numbers){
//     console.log(num * num);
// }

// let sum = 0
// for(const num of numbers){
//     sum = sum + num
// }
// console.log(sum);

// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
// for(const tech of webTechs){
//     console.log(tech.toUpperCase());
// }

// for(const tech of webTechs){
//     console.log(tech[0]);
// }

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// const newArr = []
// for(country of countries){
//     newArr.push(country.toUpperCase())
// }
// console.log(newArr);

//* break
// Break is used to interrupt a loop.
// for(let i = 0; i <= 5; i++){
//     if(i == 3){
//         break
//     }
//     console.log(i);
// }

//* continue
// We use the keyword continue to skip a certain iterations.
// for(let i = 0; i <=5; i++){
//     if(i == 3){
//         continue
//     }
//     console.log(i);
// }

//! 💻 Exercises:Day 6
//? Exercises: Level 1
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']  
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop
for(let i = 0; i <= 10; i++){
    console.log(i);
}

//do while
let i = 0
do{
    console.log(i);
    i++
} while(i <= 10)

//while
let ii = 0
while (ii <= 10) {
    console.log(ii);
    ii++
}


// Iterate 10 to 0 using for loop, do the same using while and do while loop
//for loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//do while
let y = 10
do{
    console.log(y);
    y--
} while(y >=0 )

//while
let x = 10
while (x >= 0) {
    console.log(x);
    x--
}
// Iterate 0 to n using for loop
n = 10;
for (let i = 0; i <= n; i++) {
    console.log(i);    
}

// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

for (let i = 1; i <= 7; i++) {
    let line = '';

    for (let j = 1; j <= i; j++) {
        line += '#'
        
    }
    console.log(line);    
}


// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i*i}`);    
}

// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i**2} ${i**3}`);    
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }    
}
console.log('------------');
// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100 ; i++) {
    if (i % 2 ) {
        console.log(i);
    }
    
}
console.log('############');

// Use for loop to iterate from 0 to 100 and print only prime numbers
// A prime number is a number that can only be divided by itself and 1 without remainders.
for (let i = 2; i <= 100 ; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }        
    }
    if(isPrime){
        console.log(i);
    }
    
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i   
}
console.log(sum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumEven = 0
let sumOdd = 0

for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0){
       sumEven += i;
    } else{
       sumOdd += i;
    }    
}
console.log(`sum of even numbers is ${sumEven}`);
console.log(`sum of odd numbers is ${sumOdd}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]

// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0){
//        sumEven += i;
//     } else{
//        sumOdd += i;
//     }    
// }
const sums = `${sumEven}, ${sumOdd}`.split(',')
console.log(sums);

// Develop a small script which generate array of 5 random numbers

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// Develop a small script which generate a six characters random id:
// 5j2khz