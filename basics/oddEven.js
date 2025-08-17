function oddEven(num){
    if(num==0){
        console.log(`${num} is neither odd or even`)
    }else if(num % 2 == 0){
        console.log(`${num} is even number`)
    }else{
        console.log(`${num} is odd number`)
    }
}

oddEven(13)
oddEven(10)
oddEven(1)
oddEven(0)
oddEven(15)