//* JSON
// JSON stands for JavaScript Object Notation. 

{
    "users" [
        {
            "firstName": "Asabeneh",
            "lastName": "Yetayeh",
            "age": 250,
            "email": "asab@asb.com"
        },
        {
            "firstName": "Alex",
            "lastName": "James",
            "age": 25,
            "email": "alex@alex.com"
        },
        {
            "firstName": "Lidiya",
            "lastName": "Tekle",
            "age": 28,
            "email": "lidiya@lidiya.com"
        }
    ]
}

// The above JSON example is not much different from a normal object. Then, what is the difference ? The difference is the key of a JSON object should be with double quotes or it should be a string. JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.

// Let us see the above example in more detail, it starts with a curly bracket. Inside the curly bracket, there is "users" key which has a value array. Inside the array we have different objects and each objects has keys, each keys has to have double quotes. For instance, we use "firstNaMe" instead of just firstName, however in object we use keys without double quotes. This is the major difference between an object and a JSON. Let's see more examples about JSON.
 const person = {
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}

//* Converting JSON to JavaScript Object
// In JavaScript the keyword JSON has parse() and stringify() methods.
//  When we want to change the JSON to an object we parse the JSON using JSON.parse(). 
// When we want to change the object to JSON we use JSON.stringify().

//* JSON.parse()
// JSON.parse(json[, reviver])
// // json or text , the data
// // reviver is an optional callback function
// JSON.parse(json, (key, value) => {
// })

const usersText = `{
    "users" : [
        {
            "firstName": "Asabeneh",
            "lastName": "Yetayeh",
            "age": 250,
            "email": "asab@asb.com"
        },
        {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
        },
        {
            "firstName":"Lidiya",
            "lastName":"Tekle",
            "age":28,
            "email":"lidiya@lidiya.com"
        }
    ]
}`
const userObj = JSON.parse(usersText, undefined, 4)
console.log("userObj", userObj);

//* Using a reviver function with JSON.parse()
// To use the reviver function as a formatter, we put the keys we want to format first name and last name value. Let us say, we are interested to format the firstName and lastName of the JSON data .

const userObjs = JSON.parse(usersText, (key, value) => {
    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})
console.log("userObjs", userObjs);

// The JSON.parse() is very handy to use. You do not have to pass optional parameter, you can just use it with the required parameter and you will achieve quite a lot.

//* Converting Object to JSON
// When we want to change the object to JSON we use JSON.stringify(). The stringify method takes one required parameter and two optional parameters. The replacer is used as filter and the space is an indentations. If we do not want to filter out any of the keys from the object we can just pass undefined.

// JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txt = JSON.stringify(users, undefined, 4)
  console.log(txt) // text means JSON- because json is a string form of an object.


//* Using a Filter Array with JSON.stringify
// Now, lets use the replacer as a filter. The user object has long list of keys but we are interested only in few of them. We put the keys we want to keep in array as show in the example and use it the place of the replacer.

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }
  
  const text = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
  console.log(text)

//!   Exercises
//? Exercises Level 1
// Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const skillsJSON = JSON.stringify(skills)
console.log("skillsJSON",skillsJSON);



// Stringify the age variable
let age = 250;
let stringAge = JSON.stringify(age)
console.log("stringAge",stringAge);

// Stringify the isMarried variable
let isMarried = true
let marriedString = JSON.stringify(isMarried)
console.log("marriedString",marriedString);


// Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

  const studentString = JSON.stringify(student)
  console.log("studentString",studentString);

//? Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties
  const studentSubset = {
    firstName: student.firstName,
    lastName: student.lastName,
    skills: student.skills
  }

  const studentSubString = JSON.stringify(studentSubset)
  console.log("studentSubString",studentSubString);

//? Exercises Level 3
// Parse the txt JSON to object.
const txts = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

const txtsObject = JSON.parse(txts)
console.log("txtsObject",txtsObject);


// Find the user who has many skills from the variable stored in txt.
let maxSkills = 0;
let userWIthMaxSkills = '';

for(const user in txts){
    if(txts[user].skills){
        const numSkills = txts[user].skills.length;
        if(numSkills > maxSkills){
            maxSkills = numSkills
            userWIthMaxSkills = user
        }
    }
}

console.log(`User with the most skills: ${userWIthMaxSkills} (${maxSkills} skills)`);