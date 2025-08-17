
// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a, b)


// function number(num){
//     if(num > 0){
//         console.log(`${num} is positive number`)
//     }else if(num<0){
//         console.log(`${num} is negative number`)

//     }else{
//         console.log(`The number is zero`)
//     }
// }

// number(5)
// number(10)
// number(-3)
// number(0)

// let num = 209
// let str = num.toString()
// console.log(str , typeof(str))

// function strin(str,char){
//     if(str.toLowerCase().includes(char)){
//         console.log(`${char} is present in ${str}`)
//     }else{
//         console.log(`${char} is not in the ${str}`)

//     }
// }

// strin('Hello world','wo')
// strin('JavaScript','s')

// function divisiblebynumber(num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log(`${num} is divisible by 3 and 5`)
//     } else {
//         console.log(`${num} is  not divisible by 3 and 5`)
//     }

// }

// divisiblebynumber(15)
// divisiblebynumber(9)
// divisiblebynumber(30)

//waf to check if a tring contains specific letter
// function letterInString(str,letter){
//     if(str.toLowerCase().includes(letter)){
//         console.log(`${letter} is present in ${str}`)
//     }else{
//         console.log(`${letter} is not in ${str}`)

//     }
// }

// letterInString('JavaScript','p')
// letterInString('JavaScript','u')
// letterInString('Hello','l')


//waf to reverse a string

// function reverse(string) {
//     let str = string.toUpperCase()
//     let rev=""
//     for (i = str.length-1 ; i>=0; i--) {
//        rev = rev+ str[i]
//     }
//     console.log('Reversed array is : ', rev)
// }
// reverse("Hello")

//wap to generate a random number bw 1 and 100

// function random(n){
//     let randNum = Math.floor(Math.random()*n)
//     console.log(randNum)
// }
// random(101)

//wap to find sum of even numbers in an array

// function sumOfEven(array){
//     let sum=0
//     for(i=0;i<=array.length;i++){
//         if(array[i]%2==0){
//             sum= sum+array[i]
//         }
//     }
//     console.log(`Sum of even numbers in ${array} = `,sum)
// }
// sumOfEven([1,2,3,4])
// sumOfEven([2,2,3,4])
// sumOfEven([10,20,31,4])
// sumOfEven([1,3,5,7])
// sumOfEven([-1,3,-2,5,7])

//wap to find average of numbers in an array

function average(array){
    let sum=0
    for(i=0;i<array.length;i++){
        sum= sum+ array[i]
    }
    console.log(sum)
    let average = sum / array.length
    console.log(`Average of elements in ${array} is : `,average)
}
average([1,2,3,4])
average([10,20,30,40,50,60])