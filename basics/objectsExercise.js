// const dog ={}
// // console.log(dog)

// dog.name = 'Toby'
// dog.legs = 4
// dog.color = 'White'
// dog.age= 1
// dog.bark='woof woof'
// // console.log(dog)
// console.log(Object.values(dog))
// dog.breed = 'Husky'
// dog.getDogInfo = function(){
//     return `I am ${this.name} and I have ${this.legs} legs. I have ${this.color} fur. I am ${this.age} year old. I make ${this.bark} sound . My breed is ${this.breed}.`
// }

// console.log(dog)
// console.log(dog.getDogInfo())

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
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
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
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

//Level 2
//1

// let maxSkills = 0
// let mostSkilledPerson = ""
// let skillCount 
// for (let user in users) {
//   skillCount = users[user].skills.length

//   if (skillCount > maxSkills) {
//     maxSkills = skillCount
//     mostSkilledPerson = user
//   }
// }
// // console.log(skillCount)
// console.log(`${mostSkilledPerson} has the most skills (${maxSkills}):`, users[mostSkilledPerson].skills)

//2

// let loggedUserCount = 0
// let loggedInUsers = ''
// let loggedUser
// for (let user in users) {
//     users[user].isLoggedIn
//     if (users[user].isLoggedIn) {
//         loggedUserCount = loggedUserCount + 1
//         loggedInUsers = user
//         console.log(`${user} has logged in.`)
//     }
//     loggedUser = loggedInUsers
// }
// console.log(`${loggedUserCount} people have logged in. `) 

//3
let mernDevelopers = []
let userSkill
let mernStack = ['MongoDB', 'Express', 'React', 'Node']
for (let user in users) {
    userSkill = users[user].skills
    // console.log(userSkill)
    //   let cond = userSkill.includes(mernskill)
    let isMern = true
    for (let i = 0; i < mernStack.length; i++) {
        if (!userSkill.includes(mernStack[i])) {
           isMern = false
             
        }
    }
        if(isMern){
            mernDevelopers.push(user)
        }
    
}
console.log("MERN Stack Developers are ", mernDevelopers.join(', '))

//4

let copyUser = Object.assign({},users)
// console.log(copyUser)
copyUser.Fathima = {
     email: 'fathima@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 40
}
// console.log(copyUser)

//5

// console.log('Keys are : ',Object.keys(users))

//6

// console.log('Values are : ',Object.values(users))

//7

const countries= {
    India: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
}


