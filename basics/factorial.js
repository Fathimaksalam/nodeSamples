function factorial(num) {
    let fact = 1
    if (num == 0) {
        fact = 1
    } else {
        for (let i = 1; i <= num; i++) {
            fact = fact * i
        }
       
    }
     console.log(`${num}! = `, fact)
}

factorial(4)
factorial(1)
factorial(10)
factorial(0)
factorial(13)