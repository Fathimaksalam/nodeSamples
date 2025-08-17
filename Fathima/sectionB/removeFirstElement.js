function removeFirstElement(array){
    let newArray = array.slice(1,array.length)
    console.log('New Array = ',newArray)
}

removeFirstElement([20,30,10,23])
removeFirstElement([78,30,10,23,49])
removeFirstElement([2,30,10,23,1,2,4,5])