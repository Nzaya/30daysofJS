// An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

//? How to create an empty array
//* Using Array constructor
// const arr = Array()
// console.log(arr);

//* Using square brackets([])
// const arr = []
// console.log(arr);

//*How to create an array with values
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
// const fruits = ['bananas', 'orange', 'mango', 'lemon']
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// const animalProducts = ['milk', 'meat', 'butter', 'yorgut']
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

// console.log('Numbers:', numbers);
// console.log('Number of numbers:', numbers.length);

// console.log('Fruits:', fruits);
// console.log('Number of fruits:', fruits.length);

// console.log('Vegetables:', vegetables);
// console.log('Number of vegetables:', vegetables.length);

// console.log('Animal Products:', animalProducts);
// console.log('Number of Animal Products:', animalProducts.length);

// console.log('WebTechs:', webTechs);
// console.log('Number of Web Techs:', webTechs.length);

// console.log('Countries', countries);
// console.log('Number of countries: ', countries.length);

//* Array can have items of different data types
// const arr = ['Asabeneh', 250, true, {country: 'Finland', city:'Helinski'}, {skills:['HTML', 'CSS', 'JS']}]
// console.log(arr);

//* Creating an array using split
// let js = 'JAvaScript'
// const charInJavaScript = js.split('')
// console.log(charInJavaScript);

// let companiesString = 'Facebook, Google, Microdsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')
// console.log(companies);

// let txt = 'I love teaching and empowering people. I teach HTML, CSS, JavaScript, Python'
// const words = txt.split(' ')
// console.log(words);

//* Accessing array items using index
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0]
// console.log(firstFruit);

// secondFruits = fruits[1]
// console.log(secondFruits);

// let lastFruit = fruits[3]
// console.log(lastFruit);

// let lastIndex = fruits.length -1
// lastFruit = fruits[lastIndex]
// console.log(lastFruit);

// const numbers= [0, 3.14, 9.81, 37, 98.6, 100]
// console.log(numbers.length);
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[5]);

// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
// console.log(webTechs);
// console.log(webTechs.length);
// console.log(webTechs[0]);
// console.log(webTechs[6]);

// let lastIndex = webTechs.length -1
// console.log(webTechs[lastIndex]);

// const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// console.log(countries);
// console.log(countries[0]);
// console.log(countries[10]);

// let lastIndex = countries.length -1
// console.log(countries[lastIndex]);

// const shoppingCart = ['Milk','Mango','Tomato','Potato','Avocado','Meat','Eggs','Sugar']
//  console.log(shoppingCart);
//  console.log(shoppingCart[0]);
//  console.log(shoppingCart[7]);

//  let lastIndex = shoppingCart.length - 1
//  console.log(shoppingCart[lastIndex]);

//* Modifying array element
// const number = [1,2,3,4,5]
// number[0] =10
// number[1] = 20
// console.log(number);

// const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// countries[0]='Afghanistan'
// console.log(countries);

// let lastIndex = countries.length -1
// countries[lastIndex] ='Korea'
// console.log(countries);

//? Methods to manipulate array
// These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

//* Array Constructor
// const arr = Array()
// console.log(arr);

// const eightEmptyValues = Array(8)
// console.log(eightEmptyValues);

//* Creating static values with fill
// const arr = Array()
// console.log(arr);

// const eightXValues = Array(8).fill('X')
// console.log(eightXValues);

// const eight0Values = Array(8).fill(0)
// console.log(eight0Values);

// const four4Values = Array(4).fill(4)
// console.log(four4Values);

//* Concatenating array using concat
// const firstList = [1,2,3]
// const secondList = [4,5,6]
// const thirdList = firstList.concat(secondList)
// console.log(thirdList);

// const fruits = ['banana', 'orange', 'mango', 'lemon']   
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']    
// const fruitsAndVegetables = fruits.concat(vegetables)
// console.log(fruitsAndVegetables); 

//* Getting array length
// Length:To know the size of the array
// const numbers = [1,2,3,4,5]
// console.log(numbers.length);

//* Getting index an element in arr array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
// console.log(numbers);
// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(0));
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(6));

//* Check an element if it exist in an array.
// Check items in a list

// let us check if a banana exist in the array
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')
// if(index === -1){
//     console.log('This fruits does not exist in the array');
// } else {
//     console.log('This fruit does exist in the array');
// }
// we can use also ternary here
// index === 1 ? console.log('This fruit does not exist in the array') : console.log('This fruit exist in the array');


// let us check if an avocado exist in the array
// let index = fruits.indexOf('avocado')
// if(index === -1){
//     console.log('This fruit does not exist in the array');
// } else {
//     console.log('This fruit does exist in the array');
// }
// we can use also ternary here
// index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array');

//* Getting last index of an element in array
// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(0));
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(6));

//* includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
// console.log(numbers.includes(5));
// console.log(numbers.includes(7));
// console.log(numbers.includes(0));
// console.log(numbers.includes(3));

// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
// console.log(webTechs);
// console.log(webTechs.includes('Java'));
// console.log(webTechs.includes('CSS'));

//* Checking array
// Array.isArray:  To check if the data type is an array 
// const numbers = [1 , 2, 3, 4, 5]
// console.log(Array.isArray(numbers));

// const number = 100
// console.log(Array.isArray(number));

//* Converting array to string
// toString:Converts array to string
// const numbers = [1 , 2, 3, 4, 5]
// console.log(numbers.toString());

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString());

//* Joining array elements
// join: It is used to join the elements of the array.By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join());

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.join());
// console.log(names.join(''));
// console.log(names.join(' '));
// console.log(names.join(', '));
// console.log(names.join(' # '));


// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
// console.log(webTechs.join());
// console.log(webTechs.join(' # '));

//* Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
// const numbers = [1,2,3,4,5]

// console.log(numbers.slice());
// console.log(numbers.slice(0));
// console.log(numbers.slice(0, numbers.length));
// console.log(numbers.slice(1,4));

//* Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

// const numbers = [1, 2, 3, 4, 5]
// num = numbers.splice()
// console.log(num);

// numbers.splice(0,1)
// console.log(numbers);

// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers);

// console.log(numbers.splice(3, 3, 7, 8, 9));

//* Adding item to an array using push
// Push: adding item in the end. 
// const arr = ['item1', 'item2', 'item3']
// arr.push('new item')
// console.log(arr);

// const numbers = [1,2,3,4,5]
// numbers.push(6)
// console.log(numbers);

// let fruits = ['banana', 'orange','lemon']
// fruits.push('apple')
// console.log(fruits);

//* Removing item to an array using pop
// remove one item from the end
// numbers.pop()
// console.log(numbers);

//* Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.
// const numbers = [1,2,3,4,5]
// numbers.shift()
// console.log(numbers);

//* Add an element from the beginning
// unshift: Adding array element in the beginning of the array.
// const numbers = [1,2,3,4,5]
// numbers.unshift(0)
// console.log(numbers);

//* Reversing array order
// reverse: reverse the order of an array.
// const numbers = [1,2,3,4,5]
// numbers.reverse()
// console.log(numbers);

// numbers.reverse()
// console.log(numbers);

//* Sorting elements in array
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
// webTechs.sort()
// console.log(webTechs);

// webTechs.reverse()
// console.log(webTechs);

//* Array of arrays
// const firstNum = [1,2,3]
// const secondNum = [1,4,9]

// const arrayOfArrays = [[1,2,3], [1,2,3]]
// console.log(arrayOfArrays[0]);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express','MongoDB']
// const fullStack = [frontEnd, backEnd]
// console.log(fullStack);
// console.log(fullStack.length);
// console.log(fullStack[0]);
// console.log(fullStack[1]);

//! Exercise: Brain Booster Questions
//? Level 1
// const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'] 
// const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']

// Declare an empty array;
const arr = Array()
console.log(arr);

// Declare an array with more than 5 number of elements
number = [1,2,3,4,5]
console.log(number);

// Find the length of your array
console.log(number.length);

// Get the first item, the middle item and the last item of the array
console.log("first item",number[0]);
console.log("middle item",number[2]);
let index = number.length -1
console.log("last item",number[index]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = [1, true, {name: 'John', age: 20}, fruits=['mangoes', 'bananas']]
console.log(mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);

// Print out each company
console.log(itCompanies.toString());

// Change each company name to uppercase one by one and print them out
companies = itCompanies.toString().toUpperCase()
console.log(companies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
companySent = itCompanies.toString()
console.log(`${companySent} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
company = companySent.includes('Facebook')
if(company){
    console.log('company exist');
} else {
    console.log('Company not found');
}

// Filter out companies which have more than one 'o' without the filter method
// filteredCompanies = companySent.filter(company => {
//     const characters = company.toLowerCase().split('');
//     const oCount = characters.reduce((count, char) => {
//         if(char === 'o'){
//             return count + 1
//         }
//         return count;
//     }, 0);
//     return oCount <= 1;
// })
// console.log(filteredCompanies);


// Sort the array using sort() method
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
comp = itCompanies.sort()
console.log(comp);

// Reverse the array using reverse() method
compp = itCompanies.reverse()
console.log(compp);

// Slice out the first 3 companies from the array
console.log(compp.slice(0,3));

// Slice out the last 3 companies from the array
console.log(compp.slice(-3));

// Slice out the middle IT company or companies from the array
middleIndex = Math.floor(itCompanies.length / 2);
if(itCompanies.length % 2 === 1){
    let middleCompany = [itCompanies[middleIndex]]
    console.log(middleCompany);
} else {
    middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1)
    console.log(middleCompanies);
}

// Remove the first IT company from the array
commp = itCompanies.shift()
console.log(commp);

// Remove the middle IT company or companies from the array
middleComp = Math.floor(itCompanies.length / 2);
if(itCompanies.length % 2 === 1){
    itCompanies.splice(middleComp, 1)
}else {
    itCompanies.splice(middleComp -1, 3)
}

console.log("mid",itCompanies);

// Remove the last IT company from the array
coomp = itCompanies.pop()
console.log(coomp);

// Remove all IT companies

// Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// function isNotITCompany(company){
//     const lowerCompany = company.toLowerCase();
//     return !(lowerCompany.includes('it') || lowerCompany.includes('information technology'));
//     }

// const nonITCompanies = Companies.filter(isNotITCompany);
// const nonITCompanyNames = nonITCompanies.map(company => company.name);
// console.log(nonITCompanyNames);

//? Exercise: Level 2
// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


// First remove all the punctuations and change the string to array and count the number of words in the array
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//remove punctuation
text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
console.log(text);
const wordArray = text.split(' ')
console.log(wordArray);
console.log(wordArray.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.push('Meat')
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
honey = shoppingCart.indexOf('Honey')
if(honey !== -1){
    shoppingCart.splice(honey, 1)
}
console.log(shoppingCart);
// modify Tea to 'Green Tea'
shoppingCart[2]= 'Green Tea'
console.log(shoppingCart);


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'] 
if(countries.includes('Ethiopia')){
    console.log('Ethiopia'.toUpperCase());
} else{
    countries.push('Ethiopia')
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}else {
    webTechs.push('Sass')
}
console.log(webTechs);


// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)

//? Exercise: Level 3
// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log(ages.sort());
minAge = Math.min(...ages)
console.log(minAge);

// Find the median age(one middle item or two middle items divided by two)
// sortedAges = ages.sort((a,b) => a-b);
// let middleIndex;

// if(sortedAges.length % 2 === 0){
//     middleIndex = sortedAges.length / 2;
//     const middleValue1 = sortedAges[middleIndex - 1];
//     const middleValue2 = sortedAges[middleIndex];
//     medianAge = (middleValue1 + middleValue2) / 2;
// } else {
//     middleIndex = Math.floor(sortedAges.length / 2);
//     medianAge = sortedAges[middleIndex];
// }

// console.log(medianAge);

// Find the average age(all items divided by number of items)
const sumOfAges = ages.reduce((acc, age) => acc + age, 0)
const average = sumOfAges / ages.length
console.log(average);

// Find the range of the ages(max minus min)
// const maxAge = Math.max(...ages);
// const minAge = Math.min(...ages);
// //range
// const ageRange = maxAge - minAge 
// console.log(ageRange);

// Compare the value of (min - average) and (max - average), use abs() method 
// Calculate the absolute differences

// const absMinDiff = Math.abs(minAge - average)
// const absMaxDiff = Math.abs(maxAge - average)

// if(absMinDiff > absMaxDiff){
//     console.log(`The absolute difference (min - average) is greater.`);
// } else if (absMaxDiff < absMaxDiff){
//     console.log(`The absolute difference (max - average) is greater.`);
// } else {
//     console.log(`The absolute differences are equal.`);
// }

// 1.Slice the first ten countries from the countries array
const countriess = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya'] 
console.log(countriess.slice(0,10));

// Find the middle country(ies) in the countries array
// midCountry = Math.floor(countriess.length / 2)
// if(midCountry.length % 2 === 0){
//     countriess.splice(midCountry, 1)
// } else {
//     countriess.splice(-1, 3)
// }
// console.log(midCountry);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if(countriess.length % 2 === 0){
    console.log('Even countries');
} else {
    countriess.push('Uganda')
}
console.log(countriess);