function largest(array){
  
    let large = array[0]
    for(let i=1;i<array.length;i++){
        if(array[i] > large){
            large= array[i]
        }
    }
    console.log('Largest number = ', large)
}

largest([1,3,4,6])
largest([10,3,4,6])
largest([1,30,4,6])
largest([1,3,40,6])