//? SET
// Set can only contains unique elements.

//* Creating an empty set
// const companies = new Set()
// console.log(companies);

//* Creating set from array
const languages = ['English','Finnish','English','French','Spanish','English','French']
const setOfLanguages = new Set(languages)
console.log(setOfLanguages);

// Set is an iterable object and we can iterate through each elements.
for(const language of setOfLanguages){
    console.log(language);
}

//* Adding an element to a set
const companies = new Set()
// console.log(companies.size);

companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add("Microsoft")
console.log(companies.size);
console.log(companies);

// We can also use loop to add element to a set.
const companiess = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for(const company of companiess){
    setOfCompanies.add(company)
}

//* Deleting an element a set
// We can delete an element from a set using a delete method.
console.log(companies.delete('Google'))
console.log(companies.size);

//* Checking an element in the set
// The has method can help to know if a certain element exists in a set.
console.log(companies.has('Apple'));
console.log(companies.has('Facebook'));

//* Clearing the set
// It removes all the elements from a set.
companies.clear()
console.log(companies);

const languagess = ['English','Finnish','English','French','Spanish','English','French']

const langSet = new Set(languagess)
console.log(langSet.size);

const counts = []
const count = {}

for(const l of langSet){
    const filteredLang = languagess.filter((lng) => lng === l)
    console.log(filteredLang);
    counts.push({lang: 1, count: filteredLang.length})
}
console.log(counts);

// Other use case of set. For instance to count unique item in an array.
const numbers = [5,3,2,5,5,9,4,5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers);

//* Union of sets
// To find a union to two sets can be achieved using spread operator. 
let a = [1,2,3,4,5]
let b = [3,4,5,6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C);

//* Intersection of sets
// To find an intersection of two sets can be achieved using filter. 

let d = a.filter((num) => B.has(num))
let D = new Set(d)

console.log(D);

//* Difference of sets
// To find an the difference between two sets can be achieved using filter. 

let e = a.filter((num) => !B.has(num))
let E = new Set(e)

console.log(E);

//? MAP
//* Creating an empty Map
// const map = new Map()
// console.log(map);

// Creating an Map from array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

const map = new Map(countries)
console.log(map);
console.log(map.size);

//* Adding values to the Map
const countriesMap = new Map()
console.log(countriesMap.size);
countriesMap.set('Finland','Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway','Oslo')
console.log(countriesMap);
console.log(countriesMap.size);

//* Getting a value from Map
// Check if a key exists in a map using has method. It returns true or false.
console.log(countriesMap.has('Finland'));

// Getting all values from map using loop
for (const [country, city] of countriesMap){
    console.log(country, city);
}

//! Exercises
//? Exercises:Level 1
// create an empty set
const set =  new Set()
console.log(set);

// Create a set containing 0 to 10 using loop
const numberSet = new Set()
for(i = 0; i <= 10; i++){
    numberSet.add(i)
}
console.log(numberSet);

// Remove an element from a set
console.log(numberSet.delete(0));
console.log(numberSet);


// Clear a set
numberSet.clear()
console.log(numberSet);


// Create a set of 5 string elements from array
const fruits = ["apples", "bananas", "avocado", "mangoes", "passion"]
let fruitSet = new Set(fruits)
console.log(fruitSet);
console.log(fruitSet.size);


// Create a map of countries and number of characters of a country
const Countries = ['Finland', 'Sweden', 'Norway']

const countryLengthsMap = new Map();

for(const country of Countries){
    countryLengthsMap.set(country, country.length)
}
console.log(countryLengthsMap);

//? Exercises:Level 2
const f = [4, 5, 8, 9]
const g = [3, 4, 5, 7]
// Find f union g
let F = new Set(f)
let G = new Set (g)

let h = [...f, ...g]
let H = new Set(h)

console.log(H);


// Find f intersection g
let j = f.filter((num) => G.has(num))
let J = new Set(j)


// Find f with g
let k = f.filter((num) => !G.has(num))
let K = new Set(k)


//? Exercises:Level 3
// How many languages are there in the countries object file.

// Use the countries data to find the 10 most spoken languages:

//    //Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]