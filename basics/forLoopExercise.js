const numbers = [20, 4, 6, 8, 9, 10, 12]
let sum = 0
let index = 0
do {
     if (numbers[index] % 2 !== 0) {
    break
 }
sum += numbers[index]
index++
} while (index < numbers.length)
console.log("Sum of even numbers until the first odd:", sum)
