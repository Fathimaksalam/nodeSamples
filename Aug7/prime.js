function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}


// if (isPrime(number)) {
//     console.log(number + " is a prime number");
// } else {
//     console.log(number + " is not a prime number");
// }

module.exports= {isPrime}