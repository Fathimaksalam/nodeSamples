function reverse(string) {
    let str = string.toUpperCase()
    let rev=""
    for (i = str.length-1 ; i>=0; i--) {
       rev = rev+ str[i]
    }
    console.log('Reversed array is : ', rev)
}

reverse('Hello')
reverse('Hello World')
reverse('Reverse')
reverse('Malayalam')