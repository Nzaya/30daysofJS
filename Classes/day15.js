// class allows to create many objects. 
//* Class Instantiation
// Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

// class Person {
//  //code goes here
// }
// const person = new Person()
// console.log(person);

//* Class Constructor
// The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

// The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.

// class Person{
//     constructor(firstName, lastName){
//         console.log("this", this);
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const person = new Person()
// console.log(person);

// All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties. Let us pass value at this time when we instantiate the class.

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const person = new Person('Asabeneh', 'Yetayeh')
// console.log(person);

// As we have stated at the very beginning that once we create a class we can create many object using the class. Now, let us create many person objects using the Person class.

// class Person {
//     constructor(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     }
// }
// const person1 = new Person('Asabeneh', 'Yetayeh')
// const person2 = new Person('Lidiya', 'Tekle')
// const person3 = new Person('Abraham','Yetayeh')
// console.log("person1", person1);
// console.log("person2", person2);
// console.log("person3", person3);

// class Person{
//     constructor(firstName, lastName, age, country, city){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
// }
// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// console.log(person1);

//* Default values with constructor
// The constructor function properties may have a default value like other regular functions.

// class Person {
//     constructor(
//         firstName = 'Asabeneh',
//         lastName = 'Yetayeh',
//         age = 250,
//         country = 'Finland',
//         city = 'Helsinki'
//     ){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
// }
// const person1 = new Person()
// console.log(person1); // it will take the default values
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
// console.log(person2);

//* Class methods
// The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.

// class Person{
//     constructor(firstName, lastName, age, country, city){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
//     getFullName(){
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
// }
// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
// console.log(person1.getFullName());
// console.log(person2.getFullName());

//* Properties with initial value
// When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.

// class Person{
//     constructor(firstName, lastName, age, country, city){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName(){
//         const fullName = this.firstName + " " + this.lastName
//         return fullName
//     }
// }
// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
// console.log(person1.score);
// console.log(person2.score);
// console.log(person1.skills);
// console.log(person2.skills);


// A method could be regular method or a getter or a setter. Let us see, getter and setter.
//* getter
// The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value.

// class Person{
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName(){
//         const fullName = this.firstName + " " + this.lastName
//         return fullName
//     }
//     get getScore(){
//         return this.score
//     }
//     get getSkills(){
//         return this.skills
//     }
// }
// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// console.log(person1.getScore); // We do not need parenthesis to call a getter method
// console.log(person1.getScore);

// console.log(person1.getSkills);
// console.log(person2.getSkills);

//* setter
// The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.

// class Person{
//     constructor(firstName, lastName, age, country, city){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName(){
//         const fullName = this.firstName + " " + this.lastName
//         return fullName
//     }
//     get getScore(){
//         return this.score
//     }
//     get getSkills(){
//         return this.skills
//     }
//     set setScore(score){
//         this.score += score
//     }
//     set setSkill(skill){
//         this.skills.push(skill)
//     }
// }

// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// person1.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'JavaScript'

// person2.setScore = 1
// person2.setSkill = 'PLanning'
// person2.setSkill = 'Managing'
// person2.setSkill = 'Organizing'

// console.log(person1.score);
// console.log(person2.score);

// console.log(person1.skills);
// console.log(person2.skills);


//* regular method
// Do not be puzzled by the difference between regular method and a getter. If you know how to make a regular method you are good. Let us add regular method called getPersonInfo in the Person class.

// class Person{
//     constructor(firstName, lastName, age, country, city){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName(){
//         const fullName = this.firstName + " " + this.lastName
//         return fullName
//     }
//     get getScore(){
//         return this.score
//     }
//     get getSkills(){
//         return this.skills
//     }
//     set setScore(score){
//         this.score += score
//     }
//     set setSkill(skill){
//         this.skills.push(skill)
//     }
//     getPersonInfo(){
//         let fullName = this.getFullName()
//         let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length -1).join(', ') + `and ${this.skills[this.skills.length -1]}` 
//         let formattedSkills = skills ? `He knows ${skills}` : ''
//         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}` 
//         return info
//     }
// }

// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
// const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

// person1.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'JavaScript'

// person2.setScore = 1
// person2.setSkill = 'Planning'
// person2.setSkill = 'Managing'
// person2.setSkill = 'Organizing'

// console.log(person1.getScore)
// console.log(person2.getScore)

// console.log(person1.getSkills)
// console.log(person2.getSkills)
// console.log(person3.getSkills)

// console.log(person1.getPersonInfo())
// console.log(person2.getPersonInfo())
// console.log(person3.getPersonInfo())

//* Static method
// The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now(). The now method is called directly from the class.

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(", ") +
//         ` and ${this.skills[this.skills.length - 1]}`;

//     let formattedSkills = skills ? `He knows ${skills}` : "";

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
//   static favoriteSkill(){
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     return skills[index]
//   }
//   static showDateTime(){
//     let now = new Date()
//     let year = now.getFullYear()
//     let month = now.getMonth() + 1
//     let date = now.getDate()
//     let hours = now.getHours()
//     let minutes = now.getMinutes()
//     if (hours < 10){
//         hours = '0' + hours
//     }
//     if(minutes < 10 ){
//         minutes = '0' + minutes
//     }

//     let dateMonthYear = date + "." + month + "."+ year
//     let time = hours + ":" + minutes
//     let fullTime = dateMonthYear + ' ' + time
//     return fullTime 
//   }
// }

// console.log(Person.favoriteSkill());
// console.log(Person.showDateTime());


//* Inheritance
// Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

// Let us create a Student child class from Person parent class.

// class Student extends Person{
//     saySomething(){
//         console.log('I am a child of the person class');
//     }
// }
// const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
// console.log(s1);
// console.log(s1.saySomething());
// console.log(s1.getFullName());
// console.log(s1.getPersonInfo());


//* Overriding methods
// As you can see, we manage to access all the methods in the Person Class and we used it in the Student child class. We can customize the parent methods, we can add additional properties to a child class. If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too. Inside the constructor function we call the super() function to access all the properties from the parent class. The Person class didn't have gender but now let us give gender property for the child class, Student. If the same method name used in the child class, the parent method will be overridden.

// class Student extends Person{
//     constructor(firstName, lastName, age, country, city, gender){
//         super(firstName, lastName, age, country, city)
//         this.gender = gender
//     }
//     saySomething(){
//         console.log('I am a child of the person class');
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName()
//         let skills =
//           this.skills.length > 0 &&
//           this.skills.slice(0, this.skills.length - 1).join(', ') +
//             ` and ${this.skills[this.skills.length - 1]}`
    
//         let formattedSkills = skills ? `He knows ${skills}` : ''
//         let pronoun = this.gender == 'Male' ? 'He' : 'She'
    
//         let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//         return info
//     }
// }

// const s1 = new Student(
//     'Asabeneh',
//   'Yetayeh',
//   250,
//   'Finland',
//   'Helsinki',
//   'Male'
// )

// const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')

// s1.setScore = 1
// s1.setSkill = 'HTML'
// s1.setSkill = 'CSS'
// s1.setSkill = 'JavaScript'

// s2.setScore = 1
// s2.setSkill = 'Planning'
// s2.setSkill = 'Managing'
// s2.setSkill = 'Organizing'

// console.log(s1)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())


//! Exercises
//? Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    //Method to display animal info
    getDogName(){
        return `The dog name is ${this.name}. He is ${this.age} years old`
    }
    //Method to make animal speak
    speak(sound){
        return `${this.name} ${sound}`
    }
}

const animal1 = new Animal ('Zuli', 14, 'brown and black', 'four')
console.log(animal1);
console.log(animal1.speak('bark'));
console.log(animal1.getDogName());

// Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{
    constructor(name, age , color){
        //Call parent constructor using super()
        super(name, age, color, 4)
    }
    //Method for dog
    bark(){
        return `${super.name} says woof!`
    }
}
const myDog = new Dog('Zari', 5, 'black and white')
console.log(myDog.getDogName());
console.log(myDog.speak('Woof ! Woof'));


class Cat extends Animal{
    constructor(name, age, color){
        //Call parent constructor using super()
        super(name, age, color, 4)
    }
    //Method for cat
    meow(){
        return`${super.name} meows: Meow! Meow!`
    }
}

const myCat = new Cat('Mimi', 3, 'white')
console.log(myCat.getDogName());
console.log(myCat.speak('Meow'));

//? Exercises Level 2
// Override the method you create in Animal class

class Cats extends Animal{
    constructor(name, age, color){
        //Call parent constructor using super()
        super(name, age, color, 4)
    }
    //Overide speak method for cat
    speak(){
        return`${super.name} meows: Meow! Meow!`
    }
}

console.log(myCat.speak());



//? Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics {
  constructor(data) {
    this.data = data;
  }
  count() {
    return this.data.length;
  }
  sum() {
    return this.data.reduce((acc, value) => acc + value, 0);
  }
  min() {
    return Math.min(...this.data);
  }
  max() {
    return Math.max(...this.data);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return this.sum() / this.count();
  }
  median() {
    const sortedData = this.data.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }
  mode() {
    const frequencyMap = new Map();
    this.data.forEach((value) => {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    });

    let maxFrequency = 0;
    let modes = [];

    frequencyMap.forEach((frequency, value) => {
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        modes = [value];
      } else if (frequency === maxFrequency) {
        modes.push(value);
      }
    });
    return { mode: modes, count: maxFrequency };
  }
  sumArray(array){
    return array.reduce((acc, value) => acc + value, 0)
  }
  var() {
    const meanValue = this.mean();
    const squaredDiffrences = this.data.map((value) =>
      Math.pow(value - meanValue, 2)
    );
    return this.sumArray(squaredDiffrences) / (this.count() - 1);
  }
  std() {
    return Math.sqrt(this.var());
  }
  freqDist() {
    const frequencyMap = new Map();
    this.data.forEach((value) => {
      frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
    });

    const sortedEntries = Array.from(frequencyMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    return sortedEntries.map(([value, frequency]) => [frequency, value]);
  }
  describe() {
    return `Count: ${this.count()}
        Sum: ${this.sum()}
        Min: ${this.min()}
        Max: ${this.max()}
        Range: ${this.range()}
        Mean: ${this.mean()}
        Median: ${this.median()}
        Mode: (${this.mode().mode}, ${this.mode().count})
        Variance: ${this.var()}
        Standard Deviation: ${this.std()}
        Frequency Distribution: ${JSON.stringify(this.freqDist())}`;
  }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.incomes = []
    this.expenses = []
  }
  //Method to add income
  addIncome(description, amount){
    this.incomes.push({description, amount})
  }
  //Method to add expense
  addExpense(description, amount){
    this.expenses.push({description, amount})
  }
  //Method to calculate total income
  totalIncome(){
    return this.incomes.reduce((total, expense) => total + expense.amount, 0)
  }
  //Method to calculate total expense
  totalExpense(){
    return this.expenses.reduce((total, expense) => total + expense.amount, 0)
  }
  //Method to get account information
  accountInfo(){
    return `${this.firstName} ${this.lastName}'s Account:\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}`
  }
  //Method to calculate account balance
  accountBalance(){
    return this.totalIncome() - this.totalExpense()
  }
}

const person = new PersonAccount('John', 'Doe')
person.addIncome('Salary', 5000);
person.addIncome('Freelance', 1000);
person.addExpense('Rent', 1200);
person.addExpense('Groceries', 200);
person.addExpense('Utilities', 150);

console.log(person.accountInfo());
console.log('Account Balance:', person.accountBalance());
