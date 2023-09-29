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
const sums = `${sumEven}, ${sumOdd}`.split(',')
console.log(sums);

// Develop a small script which generate array of 5 random numbers
// num = Math.floor(Math.random() * 11)
// console.log(num);
for (let i = 1; i <= 5; i++) {
    num = Math.floor(Math.random(i) * 11)
    console.log(num)    
}

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
count = 5
min = 1
max = 100
uniqueNumbers = []

if (count > max - min + 1) {
    throw new Error ("Cannot generate unique numbers. Range is too small")    
}

while (uniqueNumbers.length < count){
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if(!uniqueNumbers.includes(randomNum)){
        uniqueNumbers.push(randomNum)
    }
}
console.log(uniqueNumbers);

// Develop a small script which generate a six characters random id:
// 5j2khz

//Number.MAX_SAFE_INTEGER is a JavaScript constant representing the largest integer that can be safely represented without loss of precision. It's a very large number.
function max_random_number(max){
    return Math.floor(Math.random()* max)
}

for (let i =0; i< 1; i++){
    console.log(max_random_number(Number.MAX_SAFE_INTEGER).toString(36));  
}
console.log('########################');


//? Exercises: Level 2
// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let result = '';

function generateString(length){
    const charactersLength = characters.length;

    for(let i = 0; i < length; i ++){
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex)
    }

    return result;
}

console.log(generateString(7));
console.log(generateString(10));


// Write a script which generates a random hexadecimal number.
// '#ee33df'

const hexNumbers ="012389ab4567def"
let hex = '';

for(let i = 0; i < 6; i++){
    const randomHex = Math.floor(Math.random() * 11)
    nowHex = hex += hexNumbers.charAt(randomHex)
}

console.log(` #${nowHex}`);



// Write a script which generates a random rgb color number.
// rgb(240,180,80)

function generateRandomRGBColor(){
    let rgbColor = "rgb(";
    for(i = 0; i < 3; i++){
        const value = Math.floor(Math.random() * 256 ); // Generate a random value between 0 and 255
        rgbColor += value;
        if(i < 2){
            rgbColor += ", ";  // Add a comma and space if it's not the last channel
        } else {
            rgbColor += ")" // Close the RGB color string with a closing parenthesis if it's the last channel
        }
    }
    return rgbColor;
}

const randomColor = generateRandomRGBColor();
console.log(randomColor);


// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'];
let newCountries = countries.toString().toUpperCase()
let arrCountries = newCountries.split(",")
console.log(arrCountries);


// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

const countryLength = countries.map(country => country.length);
console.log(countryLength);


// Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

const formattedCountrys = countries.map(country => {
    countryCode = country.slice(0,3).toUpperCase()
    countryLengths = country.length
    return[country, countryCode, countryLengths]
})
console.log("formattedCountries1", formattedCountrys);

formattedCountries = []
for(i = 0; i < countries.length; i++){
    const country = countries[i];
    const countryCode = country.slice(0,3).toUpperCase()
    const countryLengths = country.length
    const countryInfo = [country, countryCode, countryLengths]
    formattedCountries.push(countryInfo)
}
console.log("formattedCountries2", formattedCountries);


// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']


landCountries = []
for(i = 0; i < countries.length; i++){
    const country = countries[i];
    if(country.toLowerCase().includes('land')){
        landCountries.push(country)
    }
}

if(landCountries.length > 0){
    console.log(landCountries)
} else {
    console.log("All this countries are without land");
}


// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']

iaCountries = []
for(i = 0; i < countries.length; i++){
    const country = countries[i]
    if(country.toLowerCase().includes('ia')){
        iaCountries.push(country)
    }
}

if(iaCountries.length > 0 ){
    console.log(iaCountries);
} else {
    console.log('These are countries ends without ia');
}

// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia


// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']



// Find the longest word in the webTechs array



// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]




// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack




// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.




// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.



// Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB



//? Exercises: Level 3
// Copy countries array(Avoid mutation)


// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries


// Sort the webTechs array and mernStack array


// Extract all the countries contain the word 'land' from the countries array and print it as array


// Find the country containing the hightest number of characters in the countries array


// Extract all the countries contain the word 'land' from the countries array and print it as array


// Extract all the countries containing only four characters from the countries array and print it as array


// Extract all the countries containing two or more words from the countries array and print it as array


// Reverse the countries array and capitalize each country and stored it as an array