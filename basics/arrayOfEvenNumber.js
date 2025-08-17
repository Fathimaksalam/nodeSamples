
function evenArray(array) {
    let arrayofEven = []
    console.log('Array is : ' ,array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayofEven.push(array[i])
            // console.log(arrayofEven)
        }
    }
    console.log('Array with even numbers : ', arrayofEven)
}


evenArray([1, 2, 3, 4, 5, 6, 7, 8])
evenArray([10,20,30,40,50,60,70,80,90,100])
evenArray([1,3,5,7,9,11])
evenArray([20,18,47,39,200,450])
// isEven([1, 2, 3, 4, 5, 6, 7, 8])