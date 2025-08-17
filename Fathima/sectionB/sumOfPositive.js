function sumOfPositiveNumbers(array){
    sum=0
    for(i=0;i<array.length;i++){
        if(array[i]>=0){
            sum= sum + array[i]
        }
    }
    console.log('Sum of positive numbers = ',sum)
}

sumOfPositiveNumbers([1,2,-1,3])
sumOfPositiveNumbers([1,-2,-1,3])
sumOfPositiveNumbers([10,23,1,0,-7,-1,3])