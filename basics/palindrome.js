function reverse(string) {
    let str = string.toUpperCase()
    let rev=""
    for (i = str.length-1 ; i>=0; i--) {
       rev = rev+ str[i]
    }
    console.log('Reversed array is : ', rev)
    return rev
}

function palindrome(string){
    let str1 = string.toUpperCase()
    console.log('string to be checked : ',str1)
    if(reverse(string) === str1){
        console.log(`${string} is palindrome`)
    }else {
        console.log(`${string} is not palindrome`)
    }
}

palindrome('malayalam')
palindrome('amma')
palindrome('Hello')
palindrome('Madam')
palindrome('English')