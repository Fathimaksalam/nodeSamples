function isPrime(n) {
    let prime = true
    if (n <= 1) {
        console.log(`${n} is not Prime Number.`)
    } else {
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                prime = false
                break
            }
        }

        if (prime) {
            console.log(`${n} is a prime number`)
        } else {
            console.log(`${n} is not a prime number`)

        }
    }


}

isPrime(3)
isPrime(1)
isPrime(7)
isPrime(9)
isPrime(10)
isPrime(11)