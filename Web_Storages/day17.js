//* There are two Web Storage objects:
// sessionStorage
// localStorage

// localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is close

//* sessionStorage
// sessionStorage is only available within the browser tab or window session. It’s designed to store data in a single web page session. That means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, we will focus only on localStorage.

//* localStorage
// ocalStorage is kept even between browser sessions. This means data is still available when the browser is closed and reopened, and also instantly between tabs and windows.

// There are five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()

//* Use case of Web Storages
// store data temporarily
// saving products that the user places in his shopping cart
// data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
// can be used offline completely using localStorage
// Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
// can be used for user authentication method

//* HTML5 Web Storage Objects
// HTML web storage provides two objects for storing data on the client:
// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

//* Web Storage objects:
// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

//* Setting item to the localStorage
// When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

//* We store data in the localStorage using the localStorage.setItem method.
localStorage.setItem('key', 'value')

//* Storing string in a localStorage
localStorage.setItem('firstName', 'Asabeneh')
console.log(localStorage);

//* Storing number in a local storage
localStorage.setItem('age', 200)
console.log(localStorage)

//* Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. 
const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage);

let Skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]

  let SkillsJSON = JSON.stringify(SKills)
  localStorage.setItem('moreSkills', SkillsJSON)
  console.log(localStorage);

//   Before we storage objects to a localStorage, the object has to be stringified.
const user = {
    firstName: 'John',
    age: 25,
    skills: ['HTML','CSS','JS','React']
}

const userString = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userString)
console.log(localStorage);

//* Getting item from localStorage
//syntax
// localStorage.getItem('key')

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skillss = localStorage.getItem('skills')
console.log(firstName, age, skillss);

// As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.
let skillsss = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj);

//* Clearing the localStorage
localStorage.clear()

//! Exercises
//? Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('first_name', 'Sandy')
localStorage.setItem('age', 23)
localStorage.setItem('City', 'Nairobi')

//? Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: "John",
    lastName: "Interest",
    age: 23,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: "Sweden"
}

const studentString = JSON.stringify(student)
localStorage.setItem('student', studentString)
console.log(localStorage);

//? Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: 'Jane',
    lastName: 'Doe',
    incomes: [],
    expenses: [],

    //Method to add income
    addIncome(description, amount){
        this.incomes.push({description, amount})
    },

    //Method to add expense
    addExpense(description, amount){
        this.expenses.push(description, amount)
    },

    //Method to calculate total income
    totalIncome(){
        return this.incomes.reduce((total, income) => total + income.amount, 0)
    },

    //Method to calculate total expense
    totalExpense(){
        return this.expenses.reduce((total, expenses) => total + expenses.amount, 0)
    },

    //Mrthod to get account info
    accountInfo(){
        return `${this.firstName} ${this.lastName}'s Account:\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
    },

    //Method to calculate account balance
    accountBalance(){
        return this.totalIncome() - this.totalExpense()
    }
}

personAccount.addIncome('Salary', 5000)
personAccount.addExpense('Rent', 1200)
personAccount.addExpense('Food', 200)

console.log(personAccount.accountInfo())
console.log('Account Balance:', personAccount.accountBalance());