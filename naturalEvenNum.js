function isEven(no) {
    if (no % 2 == 0) {
        // console.log(`${no} is an even number`)
        return true
    } else {
        // console.log(`${no} is an odd number`)
        return false
    }
}

function sumEven(num) {
    let sum = 0
    for (i = 1; i <= num; i++) {
        if (isEven(i)) {
            sum = sum + i
        }
    }
    console.log(`Sum of ${num} even natural numbers = `, sum)
}

sumEven(5)
sumEven(10)
sumEven(2)
sumEven(0)
sumEven(100)
sumEven(25)


