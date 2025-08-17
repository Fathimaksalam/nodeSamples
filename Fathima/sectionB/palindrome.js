

function reverse(string) {
    let str = string.toUpperCase()
    let rev = ''
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i]
    }
    return rev
}


function palindrome(string) {
    let str1 = string.toUpperCase()
    if (reverse(string) == str1) {
        console.log(`${str1} is Palindrome`)
    } else {
        console.log(`${str1} is not Palindrome`)

    }
}

palindrome('amma')
palindrome('hello')
palindrome('malayalam')
palindrome('reverse')