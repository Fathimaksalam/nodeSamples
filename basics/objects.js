// 


//30-07-2025
//Destructing Arrays

// const numbers = [1, 2, 3]
// let [numOne, numTwo, numThree] = numbers
// console.log(numOne, numThree)

// const names = ['asabenah', 'arjun', 'reena']
// let [firstPerson, secondPerson, thirdPerson] = names
// console.log(firstPerson, secondPerson, thirdPerson)

// const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
// let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
// console.log(e, pi, gravity, bodyTemp, boilingTemp)

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]
// const [frontEnd, backEnd] = fullStack

// console.log(frontEnd)
// console.log(backEnd)
// console.log(fullStack)

// const numArray = [1,23,3,4]
// let [num1,,num3,]=numArray
// console.log(num1,num3)

// const names = [undefined, 'Brook', 'David']
// let [
//   firstMan= 'Asabeneh',
//   secondMan,
//   thirdMan,
//   fourthMan = 'John'
// ] = names

// console.log(firstMan, secondMan, thirdMan, fourthMan) 

// const nums = [10,20,30,40,50,60,70,80,90,100]
// let [num1,num2,num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)

// const countries = [['India','Kerala'],['Japan','Tokyo'],['UAE','Abudhabi']]
// for(const [country,city] of countries){
//   console.log(country,city)
// }

//  const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]
// for(const [first,second,third] of fullStack){
//   console.log(first,second,third)
// }

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width, height, area, perimeter } = rectangle

// console.log(width, height, area, perimeter)

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width: w, height: h, area: a, perimeter: p } = rectangle

// console.log(w, h, a, p)

// const rect={
//   width : 20,
//   height:10
// }
// const calculatePerimeter = rectangle => {
//   return 2*(rectangle.width+rectangle.height)
// }

// console.log(calculatePerimeter(rect))

// const todoList = [
//   {
//     task: 'Prepare JS',
//     time: '2/1/2020 2:30',
//     completed: true
//   },
//   {
//     task: 'Give JS',
//     time: '5/1/2020 4:30',
//     completed: false
//   },
//   {
//     task: 'Assess Result',
//     time: '6/1/2020 10:30',
//     completed: false
//   }
// ]
// for (const {task,time,completed} of todoList){
//   console.log(task,time,completed)
// }

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)