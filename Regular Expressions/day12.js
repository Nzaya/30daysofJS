//* Regular Expressions
// To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

//* RegExp parameters
// A regular expression takes two parameters. One required search pattern and an optional flag.

//? Flags
// Flags are optional parameters in a regular expression which determine the type of searching.
// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

//* Creating a pattern with RegExp Constructor
//? Declaring regular expression without global flag and case insensitive flag.
// without flag

// let pattern = 'love'
// let regex = new RegExp(pattern)

//? Declaring regular expression with global flag and case insensitive flag.

// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)
// console.log(regEx);

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

// let regEx = new RegExp('love', 'gi')
// console.log(regEx);

//* Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag.

// let regEx = /love/gi
// console.log(regEx);

//* RegExpp Object Methods
//? Testing for a match
// test():Tests for a match in a string. It returns true or false.

// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result);

//* Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result);

// const stg = 'I love JavaScript'
// const patterns = /love/g
// const results = str.match(patterns)
// console.log(results);

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const strs = 'I love JavaScript'
const patt = /love/g
const resultss = str.search(patt)
console.log(resultss);

//* Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'
// matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// console.log(matchReplaced);


const text = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchRep = text.replace(/Python|python/g, 'JavaScript')
console.log(matchRep);


const texts = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchRepl = texts.replace(/Python/gi, 'JavaScript')
console.log(matchRepl);


// const txts = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
// matches = txts.replace(/%/g, '')
// console.log(matches);

// ========== ----------------------------------------------------------------
//TODO : NOTES
// []: A set of characters
// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
// \: uses to escape special characters
// \d mean: match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits
// . : any character except new line character(\n)
// ^: starts with
// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.
// $: ends with
// r'substring$' eg r'love$', sentence ends with a word love
// *: zero or more times
// r'[a]*' means a optional or it can occur many times.
// +: one or more times
// r'[a]+' means at least once or more times
// ?: zero or one times
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending of a word
// {3}: Exactly 3 characters
// {3,}: At least 3 characters
// {3,8}: 3 to 8 characters
// |: Either or
// r'apple|banana' mean either of an apple or a banana
// (): Capture and group
// ========== ----------------------------------------------------------------

//* Square Bracket
// Let's use square bracket to include lower and upper case

// const pattern = '[Aa]pple' // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor away'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /[Aa]pple/g  // this square bracket means either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor away'
// const matches = txt.match(pattern)
// console.log(matches);

// If we want to look for the banana, we write the pattern as follows:

// const pattern = /[Aa]pple|[Bb]anana/g
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way'
// const matches = txt.match(pattern)
// console.log(matches);

//* Escape character(\) in RegExp
// const pattern = /\d/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)
// console.log(matches);


//* One or more times(+)
// const pattern = /\d+/g // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)
// console.log(matches);

//* Period(.)
// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /[a].+/g  // . any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches);

//* Zero or more times(*)
// Zero or many times. The pattern may not occur or it can occur many times.

// const pattern = /[a].*/g   //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches);

//* Zero or one times(?)
// Zero or one times. The pattern may not occur or it may occur once.

// const txt = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'
// const pattern = /[Ee]-?mail/g   // ? means optional
// matches = txt.match(pattern)
// console.log(matches);

//* Quantifier in RegExp

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b[a-zA-Z]{4}\b/g   //  exactly four character  words without numbers
// const matches = txt.match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{4}/g // a number and exactly four digits
// const matches = txt.match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{1,4}/g  // 1 to 4
// const matches = txt.match(pattern)
// console.log(matches);

//* Cart ^
//? Starts with
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/  // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches);

//? Negation
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
// const matches = txt.match(pattern)
// console.log(matches);

//* Exact match
// It should have ^ starting and $ which is an end.

let pattern = /^[A-Z][a-z]{3,12}$/
let name = 'Asabeneh'
let result = pattern.test(name)
console.log(result);


//! 💻 Exercises
//? Exercises: Level 1
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’ 
//salary
const salaryPerMonth = 4000;
const months = 12
const annualSalary = salaryPerMonth * months
//bonus
const anualBonus = 10000
//onlineCourses
const onlineCourses = 5500
const annualCourses = onlineCourses * months
//Total
let annualIncome = annualSalary + anualBonus + annualCourses
console.log(`Total annual income is ${annualIncome} euros`);


// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// Extract and convert points to numbers
const numericPoints = points.map(point => parseInt(point, 10))
//Sort the numeric points
const sortedPoints = numericPoints.sort((a,b) => a - b)
// Find the distance between the two furthest particles
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
// sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
console.log(`The distance between the two furthest particles is ${distance}`);


// Write a pattern which identify if a string is a valid JavaScript variable
// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

function is_valid_variable(variable){
  //Regex for variable name
  const variablePatterns = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
  //test
  return variablePatterns.test(variable)
}
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));

//? Exercises: Level 2
// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph){
  // Remove punctuation and convert to lowercase
  const sanitizedText = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '').toLowerCase();
    // Split the text into an array of words
    const words = sanitizedText.split(/\s+/);
    // Create a frequency map for each word
    const wordFrequencyMap = {};
    words.forEach(word => {
      wordFrequencyMap[word] = (wordFrequencyMap[word] || 0) + 1;
    });
    // Convert the frequency map to an array of objects
    const wordFrequencyArray = Object.entries(wordFrequencyMap)
      .map(([word, count]) => ({word, count}))
      .sort((a, b) => b.count - a.count);
      // Return the top ten most frequent words
      return wordFrequencyArray.slice(0,10);

}
console.log(tenMostFrequentWords(paragraph))




//? Exercises: Level 3
// Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence) {
  //Regex to remove characters
  sanText = sentence.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
  //Text in an array
  const words = sanText.split(/\s+/);
  //Frequency Map
  const wordFreq = {};
  words.forEach((word) => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });
  // Convert the frequency map to an array of objects
  const wordArr = Object.entries(wordFreq)
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count);
  // Return the top three most frequent words
  return wordArr.slice(0, 3);
}
console.log(cleanText(sentence));



// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// ```js
//  console.log(mostFrequentWords(cleanedText))
//  [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]