function longestWord(string){
    let strArray = string.split(" ")
    console.log('Array of string : ',strArray)
    let longestlen = strArray[0].length
    let longest = strArray[0]
    //  console.log(strArray[0].length)
    //  console.log(longest) 
    for(i=1;i<strArray.length;i++){
      if(strArray[i].length >= longestlen){
        longestlen = strArray[i].length
        longest = strArray[i]
        // console.log('longest = ',longest)
      }
    }
    console.log('Longest word is : ',longest)
}
longestWord("How long you")
longestWord("Today seems a rainy day")
longestWord("How long you")
longestWord("Welcome to Ooty")
