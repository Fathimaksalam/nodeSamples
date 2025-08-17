function reverse(string){
    let rev= ''
    for(let i= string.length-1; i>=0 ;i-- ){
        rev = rev + string[i]
    }
    console.log('Reversed string is : ', rev)
}

reverse('Hello')
reverse('Madam')
reverse('Javascript')