
function sumOfPositiveNos(array) {
    let sum = 0
    console.log('Array is : ' ,array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum = sum + array[i]
            // console.log(arrayofEven)
        }
    }
    console.log('Array with even numbers : ', sum)
}

sumOfPositiveNos([-1,2,3,-2])