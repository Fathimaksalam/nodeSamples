function large(num1,num2,num3){
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`${num1} is largest`)
    } else {
        console.log(`${num3} is largest`)
    }
} else {
    console.log(`${num2} is largest`)
}

}


// large(10,20,30)

module.exports = {large};
