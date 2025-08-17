function fibonacci(n){
    let sum =0
    let array=[0,1]
        for(let i=1;i<=n;i++){
        // sum= array[i] + array[i-1]
        sum= array[i] + array[i-1]
        // console.log('Sum : ',sum)
        array.push(sum)
        console.log(i)
        console.log('Sum = ',sum)
        console.log('-------------------------------------')

    }
        console.log('Fibonacci series :',array)
    
    
}

fibonacci(5)