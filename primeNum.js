function isPrime(n) {
    if(n == 1){
        // console.log(`${n} is neither prime nor composite`)
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {  // i<= n/2
        if (n % i == 0) {
            // console.log(`${n} is Not prime`)
            return false
        } 
    }
    // console.log(`${n} is prime`)
    return true
}

// // isPrime(1)
// // isPrime(2)
// // isPrime(3)
// // isPrime(5)
// // isPrime(7)
// isPrime(9)
// // isPrime(10)
// // isPrime(12)
// // isPrime(13)
// // isPrime(97)

function nPrime(num){
    let array= []
    for(let i=1; i <=num ;i++){
        if(isPrime(i)){
            console.log(i)
            array.push(i)
        }
    }
    console.log('Prime nos : ',array)
}
nPrime(50)
// nPrime(50)
// nPrime(100)
// nPrime(1)
