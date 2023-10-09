// A function can be declared or created in couple of ways:
// Declaration function
// Expression function
// Anonymous function
// Arrow function

//* Function Declaration
//? Function without a parameter and return
function square(){
    let num = 2
    let sq = num * num
    console.log(sq);
}
square()

function addTwoNumbers(){
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum);
}
addTwoNumbers()

function printFullName(){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName);
}
printFullName()

//? Function returning value
function FullName(){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(FullName());

function addNumbers(){
    let numOne = 20
    let numTwo = 12
    let total = numOne + numTwo
    return total
}
console.log(addNumbers());

//? Function with a parameter
function areaOfCircle(r){
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(7));

function square(number){
    return number * number
}
console.log(square(7));

//? Function with two parameters
function sumtwoNumbers(num1, num2){
    let sum = num1 + num2
    return sum
}
console.log(sumtwoNumbers(100, 12));

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName("Jane","Doe"));

//? Function with many parameters
function sumArrayValues(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
const numbers = [1,2,3,4,5]
console.log(sumArrayValues(numbers));


const areaCircle = (radius) => {
    let area = Math.PI * radius * radius
    return area
}
console.log(areaCircle(10));

//* Function with unlimited number of parameters
//? Unlimited number of parameters in regular function
function sumAllNums(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1,2,3,4));
console.log(sumAllNums(10,20,13,40,10));
console.log(sumAllNums(15,20,30,25,10,33,40));

//? Unlimited number of parameters in arrow function
const sumNums = (...args) => {
    let sum = 0
    for(const element of args){
        sum += element
    }
    return sum
}
console.log(sumNums(12,3,4,5));
console.log(sumNums(34,567,890,1,2));
console.log(sumNums(1,2,3,4,5,6,7,8,9));

//* Anonymous Function
// Anonymous function or without name
const anonymousFun = function(){
    console.log('I am an anonymous function and my value is stored in anonymousFun');
}
console.log(anonymousFun());

//* Expression Function
// Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.
const squares = function(n){
    return n * n
}
console.log(squares(2));

//* Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value.
let squaredNum = (function(n){
    return n * n
}) (10)
console.log(squaredNum);

//* Arrow Function
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr){
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries));

const printName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printName('Jane', 'Doe'));

//* Function with default parameters
function generateFullNames(firstName='John', lastName="Doe"){
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullNames());
console.log(generateFullNames('Ashley', 'Mathews'));

function calculateAge(birthYear, currentYear = 2019){
    let age = currentYear - birthYear
    return age
}
console.log('Age:', calculateAge(1819));

function weightOfObject(mass, gravity = 9.81){
    let weight = mass * gravity + 'N'
    return weight
}
console.log('Weight of an object in Newton:', weightOfObject(100));
console.log('Weight of an object in Newton:', weightOfObject(100, 1.62));

const greetings = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days of Javascript'
    return message
}
console.log(greetings());
console.log(greetings('Asha'));

const calculateAges = (birthYear, currentYear = 2020) => currentYear - birthYear
console.log('Age:', calculateAge(1819));

const objectWeight = (mass, gravity = 9.81) => mass * gravity + 'N'
console.log('Weight of an object in Newton:', weightOfObject(200));


//! 💻 Exercises
//? Exercises: Level 1
// Declare a function fullName and it print out your full name.
function fullNames(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullNames("Mary", "Jane"));

function fullname(){
    let firstName = 'John'
    let lastName = 'Jane'
    let space = ' '
    const name = firstName + space + lastName
    return name
}
console.log(fullname());

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullnames (firstName, lastName){
    return `${firstName}, ${lastName}`
}
console.log(fullnames('Mercy', 'Abel'));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addnumbers(num1, num2){
    sum = num1 + num2
    return sum
}
console.log(addnumbers(10,12));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width){
    area = length * width
    return area
}
console.log(areaOfRectangle(12,2));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) =>{
    perimeter = 2*(length + width)
    return perimeter
}
console.log(perimeterOfRectangle(12,2));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectangle (length, width, height){
    volume = length * width * height
    return volume
}
console.log(volumeOfRectangle(2,4,6));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircles = (r) => {
    π = 22/7 
    area = π * r * r
    return area
}
console.log(areaOfCircles(7));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle (r){
    π = 22/7 
    circumfrence = 2 * π * r
    return circumfrence
}
console.log(circumOfCircle(7));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const densityOfSubstance = (mass, volume) => {
    density = mass / volume
    return density
}
console.log(densityOfSubstance(10,4));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const calcSpeed = (distance, time) =>{
    speed = distance / time
    return speed
}
console.log(calcSpeed(240, 4));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function calcWeight(mass, gravity = 9.81){
    weight = mass * gravity + 'N'
    return weight
}
console.log(calcWeight(12));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC){
    oF = (oC * 9/5) + 32
    return oF
}
console.log(convertCelsiusToFahrenheit(24));


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
//  BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calcBMI(weight, height){
    bmi = weight / (height * height)
    if(bmi < 18.5){
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <=24.9){
        return 'Normal Weight';
    }else if (bmi >=25 && bmi <=29.9){
        return 'Overweight';
    } else{
        return 'Obese'
    }
}
console.log(calcBMI(70, 1.35));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

function checkSeason(){
    let userInput = 'January';
    let month = userInput.toLowerCase()

    switch (month){
        case 'september': 
        case 'october':
        case 'november':
            return 'The season is Autumn'
            break;
        case 'december':
        case 'january':
        case 'february':
            return 'The season is Winter'
            break;
        case 'march':
        case 'april':
        case 'may':
            return 'The season is spring'
            break;
        case 'june':
        case 'july':
        case 'august':
            return 'The season is Summer'
            break;
        default:
            return 'Input month'
    }
}
console.log(checkSeason());

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function largest(num1, num2, num3){
    largestNum = Math.max(num1, num2, num3)
    return largestNum
}
console.log(largest(0,10,5));
console.log(largest(0,-10,-2));

//? Exercises: Level 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.


// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08



// Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4



// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']



// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.


// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10


// Write a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'



// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE



//? Exercises: Level 3
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '


// Write a function name rgbColorGenerator and it generates rgb colors.
// rgbColorGenerator()
// rgb(125,244,255)



// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'


// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.



// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'



// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]


// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array