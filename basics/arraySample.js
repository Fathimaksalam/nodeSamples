let array = [12,23,42,31,4,5]
function isNumberPresent(array,num){
    let ind = array.indexOf(num)
    if( ind >= 0 ){
        console.log(`${num} is in the array at postion : `,ind)
    }else{
        console.log(`${num} is not in the array`)
    }
}

isNumberPresent(array,31)
isNumberPresent(array,29)
isNumberPresent(array,3)
isNumberPresent(array,12)
isNumberPresent(array,4)
