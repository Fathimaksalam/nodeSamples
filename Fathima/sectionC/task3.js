//  TASK A
function factorial(n) {
    let fact = 1
    if (n == 0) {
        fact =1
    } else {
        for (let i = 1; i <= n; i++) {
            fact = fact * i
        }
    }

    console.log('Factorial = ', fact)
}

factorial(3)
factorial(4)
factorial(5)
factorial(1)
factorial(0)

//TASK C

function sumofEvenNatural(n){
    let sum=0
    for(let i=1; i<=n ; i++){
        if(i%2 == 0){
            sum = sum+i
        }
    }
    console.log(`Sum of fisrt even natural numbers upto ${n} = `,sum)
}
sumofEvenNatural(10)
sumofEvenNatural(7)
sumofEvenNatural(0)
sumofEvenNatural(1)
sumofEvenNatural(4)
sumofEvenNatural(100)

//TASK D

function vowels(string) {
    let str1 = string.toLowerCase()
    let char = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (i = 0; i < str1.length; i++) {
        if (char.includes(str1[i])) {
            count = count+1
        }
    }
    console.log('Count = ', count)
}

vowels('Hello')
vowels('aeiou')
vowels('JavaScript')

//TASK B

 function isAmstrong(num) {
    const digits = num.toString().split('')
    const power = digits.length

    let sum = 0
    for (let i = 0; i < power; i++) {
        sum += Math.pow(parseInt(digits[i]), power)
    }
   if(sum == num){
    console.log(`${num} is amstrong number`)
   }else{
    console.log(`${num} is not an amstrong number`)
    
    }

}

isAmstrong(153)
isAmstrong(370)
isAmstrong(371)
isAmstrong(200)
