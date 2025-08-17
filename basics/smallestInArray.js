function smallest(array){
    let small = array[0]
    for(i=1;i<=array.length;i++){
       if(array[i]< small){
        small = array[i]
       }
    }
    console.log('Smallest is : ',small)
}

smallest([10,2,40,11,3])
smallest([1,2,4,5,7])
smallest([10,2,0,13,90])