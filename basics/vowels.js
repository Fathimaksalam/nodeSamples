function countVowels(string){
    let vowels = ['a','e','i','o','u']
    count = 0
    for(i=0;i<=string.length;i++){
        let char = string.toLowerCase()
        if(vowels.includes(char[i])){
            count+=1
            console.log(char[i])
        }
    }
    console.log(`The vowels appears ${count} times.`)
}














function countOfVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let counts = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase()
        if (vowels.includes(char)) {
            if (counts[char]) {
                counts[char] += 1
            } else {
                counts[char] = 1
            }
        }
    }
    console.log(counts)
    return counts
}

countVowels('Hello world')
countVowels('Education')
countOfVowels('Hello world')
countOfVowels("Education")